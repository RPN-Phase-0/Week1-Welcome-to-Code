function konversiMenit(menit) {
    let men = Math.floor(menit / 60);
    let detik = menit % 60;
    
    let sec = detik < 10 ? '0' + detik : detik; // operator ternary
    // if (detik < 10) {
    //     detik = '0' + detik;
    // }
    return `${men}:${sec}`
}
  
// TEST CASES
console.log(konversiMenit(63)); // 1:03
console.log(konversiMenit(124)); // 2:04
console.log(konversiMenit(53)); // 0:53
console.log(konversiMenit(88)); // 1:28
console.log(konversiMenit(120)); // 2:00