import bcrypt from 'bcrypt';

const saltRounds = 12;

export const getHash = async password => await bcrypt.hash(password, saltRounds);

export const isSameHash = async (password, hash) => await bcrypt.compare(password, hash);
