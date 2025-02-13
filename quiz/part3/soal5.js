let input = 5;

for (let i = 1; i <= input; i++) {
  let test = "";
  for (let j = 1; i >= j; j++) {
    test += "*";
  }
  console.log(test);
}
