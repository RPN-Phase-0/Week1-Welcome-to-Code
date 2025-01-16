function konversiMenit(menit) {
  let jam = Math.floor(menit / 60);
  let menitSisa = menit % 60;
  let menitSisaStr = '';
  if (menitSisa < 10) {
    menitSisaStr = '0' + menitSisa
    } else {
    menitSisaStr = menitSisa
    }
  return jam + ':' + menitSisaStr;
}

// TEST CASES
console.log(konversiMenit(63)); // 1:03
console.log(konversiMenit(124)); // 2:04
console.log(konversiMenit(53)); // 0:531