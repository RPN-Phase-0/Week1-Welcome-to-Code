// Buatlah 3 perulangan baru dari 1 - 100, dengan pertambahan counter sebesar 2, 5, dan 9.
// Pada 3 perulangan baru ini periksa setiap angka counter:
// Apabila bukan kelipatan yang ditentukan tidak perlu menuliskan apa-apa
// Apabila angka counter adalah kelipatan 3 dengan pertambahan 2, kelipatan 6 dengan pertambahan 5, dan kelipatan 10 dengan pertambahan 9, tuliskan:
// "3 kelipatan 3"dan seterusnya.

// Alogoritma
/**
 * ! Logic
 * * membuat looping dengan kondisi (i = 1; i <= 100; i += 2)
 * * melakukan pengecekan i % 3 == 0, maka hasil nya adalah kelipatan 3 dengan pertambahan 2
 * * membuat looping dengan kondisi (i = 1; i <= 100; i += 5)
 * * melakukan pengecekan i % 6 == 0, maka hasil nya adalah kelipatan 6 dengan pertambahan 5
 * * membuat looping dengan kondisi (i = 1; i <= 100; i += 9)
 * * melakukan pengecekan i % 10 == 0, maka hasil nya adalah kelipatan 10 dengan pertambahan 9
 */

for (let i = 1; i <= 100; i += 2) {
  if (i % 3 == 0) console.log(`${i} adalah kelipatan 3 dengan pertambahan 2`);
}

console.log();

for (let i = 1; i <= 100; i += 5) {
  if (i % 6 == 0) console.log(`${i} adalah kelipatan 6 dengan pertambahan 5`);
}

console.log();

for (let i = 1; i <= 100; i += 9) {
  if (i % 10 == 0) console.log(`${i} adalah kelipatan 10 dengan pertambahan 9`);
}
