// Problem
// Diberikan sebuah function konversiMenit(menit) yang menerima satu parameter berupa angka yang merupakan ukuran waktu 
// dalam menit. Function akan me-return string waktu dalam format jam:menit berdasarkan menit tersebut. 
// Contoh, jika menit adalah 63, maka function akan me-return "1:03".

function konversiMenit(menit) {
    // you can only write your code here!
    if (menit >= 60) {
      detik = menit % 60
      menit = menit / 60
      menit = Math.round(menit)
      result = `${menit}:${detik}`
    } else {
      result = `0:${menit}`
    }
    if(detik < 10 && menit >= 60) {
      result = `${menit}:0${detik}`
    }
    return result
}
  
// TEST CASES
console.log(konversiMenit(63)); // 1:03
console.log(konversiMenit(124)); // 2:04
console.log(konversiMenit(53)); // 0:53
console.log(konversiMenit(88)); // 1:28
console.log(konversiMenit(120)); // 2:00