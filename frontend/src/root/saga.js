import { all } from 'redux-saga/effects';
import featureSagas from 'feature/sagas';

export default function* rootSaga() {
  yield all([
    ...featureSagas
  ]);
}
