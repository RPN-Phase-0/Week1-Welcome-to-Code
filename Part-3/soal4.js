// Buatlah 3 perulangan baru dari 1 - 100, dengan pertambahan counter sebesar 2, 5, dan 9.
// Pada 3 perulangan baru ini periksa setiap angka counter:

// Apabila bukan kelipatan yang ditentukan tidak perlu menuliskan apa-apa
// Apabila angka counter adalah kelipatan 3 dengan pertambahan 2, kelipatan 6 dengan pertambahan 5, dan kelipatan 10 dengan pertambahan 9, tuliskan:
// "3 kelipatan 3"dan seterusnya.

for (let i = 1; i <= 100; i += 2) {
  if(i % 3 == 0) console.log(`${i} adalah kelipatan 3`);
}

for (let a = 1; a <= 100; a += 5) {
  if(a % 6 == 0) console.log(`${a} adalah kelipatan 6`);
}

for (let n = 1; n <= 100; n += 9) {
  if(n % 10 == 0) console.log(`${n} adalah kelipatan 10`);
}