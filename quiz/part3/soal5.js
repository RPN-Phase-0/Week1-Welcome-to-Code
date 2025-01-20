let input = 5;
let total = "";
for (let i = 1; i <= input; i++) {
  for (let j = 1; j <= i; j++) {
    total = total + "*";
  }
  total = total + "\n";
}
console.log(total);
