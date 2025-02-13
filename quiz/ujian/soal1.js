function BandingAngka(angka1, angka2) {
  if (angka2 === angka1) {
    return -1;
  } else if (angka2 > angka1) {
    return true;
  } else {
    return false;
  }
}

function TernaryTes(a, b) {
  return a === b ? -1 : b > a;
}

console.log(BandingAngka(5, 8));
console.log(BandingAngka(5, 3));
console.log(BandingAngka(4, 4));
console.log(BandingAngka(3, 3));
console.log(BandingAngka(17, 2));

console.log(TernaryTes(5, 8));
console.log(TernaryTes(5, 3));
console.log(TernaryTes(4, 4));
console.log(TernaryTes(3, 3));
console.log(TernaryTes(17, 2));
