function konversiMenit(menit) {
  // you can only write your code here!
  let menitwaktu = Math.floor(menit / 60);
  let detikwaktu = menit % 60;
  //format waktu
  let format =
    String(menitwaktu).padStart(2, 0) + ":" + String(detikwaktu).padStart(2, 0);

  return format;
}

// TEST CASES
console.log(konversiMenit(63)); // 1:03
console.log(konversiMenit(124)); // 2:04
console.log(konversiMenit(53)); // 0:53
console.log(konversiMenit(88)); // 1:28
console.log(konversiMenit(120)); // 2:00
