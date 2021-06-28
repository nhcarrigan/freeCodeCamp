/* eslint-disable require-yield */

import { takeEvery } from 'redux-saga/effects';
import store from 'store';

const soundKey = 'fcc-sound';

export function setSound(currentSetting = false, newSetting) {
  if (currentSetting !== newSetting) {
    store.set(soundKey, newSetting);
  }
}

function* updateLocalSoundSaga({ payload: { user, sound } }) {
  const currentSetting = store.get(soundKey) || false;
  if (user) {
    const { sound = false } = user;
    return setSound(currentSetting, sound);
  }
  return setSound(currentSetting, sound);
}

export function createSoundModeSaga(types) {
  return [
    takeEvery(types.fetchUserComplete, updateLocalSoundSaga),
    takeEvery(types.updateUserFlagComplete, updateLocalSoundSaga)
  ];
}
