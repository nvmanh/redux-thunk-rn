import Const from './../common/Const';

export function toFixed(value) {
  const val = value || 0;
  return Number.parseFloat(val).toFixed(Const.ROUND);
}
