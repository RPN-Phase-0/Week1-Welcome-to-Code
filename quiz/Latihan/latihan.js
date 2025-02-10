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
