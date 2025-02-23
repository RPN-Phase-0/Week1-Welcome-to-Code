// Problem
// Pada tugas ini kamu diminta untuk melakukan looping dalam JavaScript dengan menggunakan syntax for. 
// Untuk membuat tantangan ini lebih menarik, kamu juga diminta untuk membuat suatu looping yang menghitung maju dan 
// menghitung mundur. Jangan lupa tampilkan di console juga judul 'LOOPING PERTAMA' dan 'LOOPING KEDUA'.
//tampilkan output yang menunjukan kalau looping itu maju pada looping pertama dan mundur pada looping kedua

console.log("-----------Looping Pertama-----------");

let angka = 10;
for(let i = 1; i <= angka; i++) {
    console.log(i)
};
console.log("-----------Looping Kedua-----------");

for(let i = angka; i > 0; i--) {
    console.log(i)
};