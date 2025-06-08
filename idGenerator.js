let currentId = 0;

const chars = "0123456789abcdefghijklmnopqrstuvwxyz-_";

export function nextId() {
  return toBase38(++currentId);
}

export function toBase38(base10) {
if (base10 < 38) {
    return chars[base10];
  }
  let base38 = [];
  let quotient = base10;
  let divident = base10;
  do {
    quotient = Math.floor(quotient / 38);
    let reminder = divident - quotient * 38;
    base38.push(chars[reminder]);
    divident = quotient;
  } while (quotient >= 38);
  base38.push(chars[quotient]);
  base38.reverse();
  return base38.join("");
}