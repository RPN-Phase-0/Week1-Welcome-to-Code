let input = 5;
let pattern = "*";

for (let i = 0; i <= input; i++) {
  console.log(pattern.repeat(i));
}

//segitiga dengan sepasi
// for (let i = 1; i <= input; i++) {
// Membentuk pola segitiga (1, 3, 5, 7, ...)
// let stars = pattern.repeat(2 * i - 1);
// Menambahkan spasi di kiri untuk pemusatan
//   let spaces = " ".repeat(input - i);
//   console.log(spaces + stars);
// }
