import { takeEvery } from 'redux-saga/effects';
import { FEATURE } from './actions';

export function* featureActionSaga() {
  try {
    yield console.log('Ding!');
  } catch (e) {
    yield console.log('Dong!');
  }
}

const featureSagas = [
  takeEvery(FEATURE.ACTION, featureActionSaga)
];

export default featureSagas;
