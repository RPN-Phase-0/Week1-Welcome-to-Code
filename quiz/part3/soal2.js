// Problem
// Pada tugas ini kamu diminta untuk melakukan looping dalam JavaScript dengan menggunakan syntax for. 
// Untuk membuat tantangan ini lebih menarik, kamu juga diminta untuk membuat suatu looping yang menghitung maju dan 
// menghitung mundur. Jangan lupa tampilkan di console juga judul 'LOOPING PERTAMA' dan 'LOOPING KEDUA'.
//tampilkan output yang menunjukan kalau looping itu maju pada looping pertama dan mundur pada looping kedua


let LangkahKeDepan = 10;
let LangkahKeBelakang = -10;
console.log("LOOPING PERTAMA");
for (let index = 0; index <= LangkahKeDepan; index++) {
    console.log(index);
    
}
TitikAwal = 0
console.log("LOOPING KEDUA");
for (let index = 0; index >= LangkahKeBelakang; index--) {
    console.log(index);
    
}