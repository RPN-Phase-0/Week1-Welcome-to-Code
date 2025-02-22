// Problem
// Pada tugas ini kamu diminta untuk melakukan looping dalam JavaScript dengan menggunakan syntax for. 
// Untuk membuat tantangan ini lebih menarik, kamu juga diminta untuk membuat suatu looping yang menghitung maju dan 
// menghitung mundur. Jangan lupa tampilkan di console juga judul 'LOOPING PERTAMA' dan 'LOOPING KEDUA'.
//tampilkan output yang menunjukan kalau looping itu maju pada looping pertama dan mundur pada looping kedua

function maju(){
console.log("LOOPING PERTAMA");
for (let i = 1; i <= 5;) {
    console.log(i + " - I love LUASCRIPT");
    i++;
}}

function mundur(){
console.log("\nLOOPING KEDUA");
for (let ziroi = 5; ziroi >= 1;) {
    console.log(ziroi + " - I will Attacked NASA SYSTEM");
    ziroi--;
}}

maju();
mundur();
