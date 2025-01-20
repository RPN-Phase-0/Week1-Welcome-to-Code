let i = 1;
let j = 1;
let k = 1;

while (i <= 100) {
  if (i % 3 === 0) {
    console.log(i, "Kelipatan 3");
  }
  i = i + 2;
}
console.log(" ");
while (j <= 100) {
  if (j % 6 === 0) {
    console.log(j, "Kelipatan 6");
  }
  j = j + 5;
}
console.log(" ");
while (k <= 100) {
  if (k % 10 === 0) {
    console.log(k, "Kelipatan 10");
  }
  k = k + 9;
}
