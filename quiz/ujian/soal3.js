function konversiMenit(menit) {
    var hour = Math.floor(menit / 60)
    var minute = menit % 60

    if (minute < 10) {
        minute = "0" + minute
    }

    return `${hour}:${minute}`
}
  
// TEST CASES
console.log(konversiMenit(63)); // 1:03
console.log(konversiMenit(124)); // 2:04
console.log(konversiMenit(53)); // 0:53
console.log(konversiMenit(88)); // 1:28
console.log(konversiMenit(120)); // 2:00
