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


console.log(konversiMenit(63)); 
console.log(konversiMenit(124)); 
console.log(konversiMenit(53)); 