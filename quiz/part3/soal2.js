// Problem
// Pada tugas ini kamu diminta untuk melakukan looping dalam JavaScript dengan menggunakan syntax for. 
// Untuk membuat tantangan ini lebih menarik, kamu juga diminta untuk membuat suatu looping yang menghitung maju dan 
// menghitung mundur. Jangan lupa tampilkan di console juga judul 'LOOPING PERTAMA' dan 'LOOPING KEDUA'.
//tampilkan output yang menunjukan kalau looping itu maju pada looping pertama dan mundur pada looping kedua

let angka = 0

for(i = angka; i < 10; i++) {
    console.log('LOOPING PERTAMA angka = ' + angka)
    angka++
} for(i = angka; i > 0; i--) {
    console.log('LOOPING KEDUA angka = ' + angka)
    angka--
}