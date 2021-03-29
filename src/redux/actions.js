import { FIELD_GAME, RESULT_CORDINATE } from './types';

export const fieldGametAC = (fieldGame) => ({ type: FIELD_GAME, payload: { fieldGame } });
export const resultCordinateAc = (resultCordinate) => ({ type: RESULT_CORDINATE, payload: { resultCordinate } });