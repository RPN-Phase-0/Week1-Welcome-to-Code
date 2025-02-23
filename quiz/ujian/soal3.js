function konversiMenit(menit) {
  let s = menit % 60
  let m = menit / 60 | 0
  const x = s <= 10? "0" + String(s): s
  
  return `${m}:${x}`
}
  
// TEST CASES
console.log(konversiMenit(63)); // 1:03
console.log(konversiMenit(124)); // 2:04
console.log(konversiMenit(53)); // 0:53
console.log(konversiMenit(88)); // 1:28
console.log(konversiMenit(120)); // 2:00

// Banyak implementsi, gua pilih paling simple aja. thanks to discord 