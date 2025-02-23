// Hint: kamu akan menggunakan kondisional juga di kasus ini.

// Problem
// Buatlah sebuah perulangan 1 - 100 dengan pertambahan counter sebanyak 1
// Di dalam perulangan, periksa setiap angka counter:

// Apabila angka counter adalah angka genap, tuliskan GENAP
// Apabila angka counter adalah angka ganjil, tuliskan ganjil

for (let i = 0; i <= 100; i++) {
  i % 2 === 0 ? console.log(`GENAP: ${i}`) : console.log(`ganjil: ${i}`);
}