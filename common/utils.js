/**
 * Add zero in front of numbers < 10
 * @param {number} i
 */
export function zeroPad(i) {
  if (i < 10) {
    i = "0" + i;
  }
  return i;
}
