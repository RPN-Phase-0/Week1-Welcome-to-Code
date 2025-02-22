// Problem
// Diberikan sebuah function balikKata(kata) yang menerima satu parameter berupa string.
// Function akan me-return kata yang dibalik. Contoh, jika kata adalah "John Doe", function akan me-return "eoD nhoJ".

let kata = "John Doe";

function balikKata(kata) {
  let reversed = "";
  for (let i = kata.length - 1; i >= 0; i--) {
    reversed += kata[i];
  }
  return reversed;
}
console.log(kata.length);
console.log("Kata : " + kata + ", Dibalik Menjadi : " + balikKata("John Doe")); // eoD nhoJ
