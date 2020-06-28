import mongoose from 'mongoose';
import R from 'ramda';
import { getHash, isSameHash } from '../utils/user.js';

const clearPrivateFields = (doc, ret) => R.omit(['password'], ret);

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      unique: true
    },
    login: {
      type: String,
      required: true,
      unique: true
    },
    password: {
      type: String,
      required: true,
      select: false
    }
  },
  {
    toObject: {
      transform: clearPrivateFields
    },
    toJSON: {
      transform: clearPrivateFields
    }
  }
);

userSchema.index({ login: 1, password: -1 });

userSchema.pre('save', async function() {
  if (this.isModified('password')) {
    this.password = await getHash(this.password);
  }
});

userSchema.methods.checkPassword = async function(password) {
  return await isSameHash(password, this.password);
};

userSchema.statics.login = async function(login, password) {
  const user = await this.findOne({ login }).select('+password');
  if (!user) return false;
  const isCorrectPassword = await user.checkPassword(password);
  if (!isCorrectPassword) return false;
  return user;
};

userSchema.statics.deleteAll = async function() {
  return await this.deleteMany({});
};

export default mongoose.model('user', userSchema);
