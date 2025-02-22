// LATIHAN TAMBAHAN (OPTIONAL) YANG ADA DI PHASE 0 WEEK 1 PART 5

//Modifikasi program untuk menampilkan bukan bilangan prima dari 1 hingga 100.

for (let i = 1; i <= 100; i++) {
  let isNotPrime = false;
  for (let j = 2; j < i; j++) {
    if (i % j === 0) {
      isNotPrime = true;
      break;
    }
  }
  if (isNotPrime) {
    console.log(i);
  }
}

// Hitung jumlah bilangan prima dari 1 hingga 100.

let primeCount = 0;
for (let i = 2; i <= 100; i++) {
  let isPrime = true;
  for (let j = 2; j < i; j++) {
    if (i % j === 0) {
      isPrime = false;
      break;
    }
  }
  if (isPrime) {
    primeCount++;
  }
}
console.log(`the total prime number from 1 to 100 is ${primeCount}`);

// Buat program untuk mengecek apakah sebuah angka yang diinput pengguna adalah bilangan prima.

let inputUser = 11;
let isPrime = true;

if (inputUser <= 1) {
  isPrime = false;
} else {
  for (let i = 2; i < Math.sqrt(inputUser); i++) {
    if (inputUser % i === 0) {
      isPrime = false;
      break;
    }
  }
}

if (isPrime) {
  console.log(`${inputUser} adalah bilangan prima`);
} else {
  console.log(`${inputUser} bukan bilangan prima`);
}
