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
