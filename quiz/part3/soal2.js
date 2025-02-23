// Problem
// Pada tugas ini kamu diminta untuk melakukan looping dalam JavaScript dengan menggunakan syntax for. 
// Untuk membuat tantangan ini lebih menarik, kamu juga diminta untuk membuat suatu looping yang menghitung maju dan 
// menghitung mundur. Jangan lupa tampilkan di console juga judul 'LOOPING PERTAMA' dan 'LOOPING KEDUA'.
//tampilkan output yang menunjukan kalau looping itu maju pada looping pertama dan mundur pada looping kedua

let i;
let n = 10;

console.log("LOOPING PERTAMA");
for(i = 1; i <= n; i++) {
    console.log(`${i}`);
}

console.log("LOOPING KEDUA");
for(i = n; i >= 1; i--) {
    console.log(`${i}`);
}