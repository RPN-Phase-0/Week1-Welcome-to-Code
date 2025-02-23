// Buatlah 3 perulangan baru dari 1 - 100, dengan pertambahan counter sebesar 2, 5, dan 9.
// Pada 3 perulangan baru ini periksa setiap angka counter:

// Apabila bukan kelipatan yang ditentukan tidak perlu menuliskan apa-apa
// Apabila angka counter adalah kelipatan 3 dengan pertambahan 2, kelipatan 6 dengan pertambahan 5, dan kelipatan 10 dengan pertambahan 9, tuliskan:
// "3 kelipatan 3"dan seterusnya.

for (let a = 1; a <= 100; a = a + 2) {
  if (a % 3 === 0) console.log(`${a} kelipatan 3`);
}

for (let b = 1; b <= 100; b = b + 5) {
  if (b % 6 === 0) console.log(`${b} kelipatan 6`);
}

for (let c = 1; c <= 100; c = c + 9) {
  if (c % 10 === 0) console.log(`${c} kelipatan 10`);
}
