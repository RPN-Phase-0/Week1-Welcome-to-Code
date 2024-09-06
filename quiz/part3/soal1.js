// Problem
// Pada tugas ini kamu diminta untuk melakukan looping dalam JavaScript dengan menggunakan syntax while. 
// Untuk membuat tantangan ini lebih menarik, kamu juga diminta untuk membuat suatu looping yang menghitung maju dan 
// menghitung mundur. Jangan lupa tampilkan di console juga judul 'LOOPING PERTAMA' dan 'LOOPING KEDUA'.
//tampilkan output yang menunjukan kalau looping itu maju pada looping pertama dan mundur pada looping kedua

let LangkahKeDepan = 10;
let LangkahKeBelakang = -10;
let TitikAwal = 0;
console.log("LOOPING PERTAMA");
while(TitikAwal < LangkahKeDepan){
    TitikAwal++
    console.log(TitikAwal)
}
TitikAwal = 0
console.log("LOOPING KEDUA");
while(TitikAwal > LangkahKeBelakang){
    TitikAwal--
    console.log(TitikAwal)
}