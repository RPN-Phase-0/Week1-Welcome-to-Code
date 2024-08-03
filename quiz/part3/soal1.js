// Problem
// Pada tugas ini kamu diminta untuk melakukan looping dalam JavaScript dengan menggunakan syntax while. 
// Untuk membuat tantangan ini lebih menarik, kamu juga diminta untuk membuat suatu looping yang menghitung maju dan 
// menghitung mundur. Jangan lupa tampilkan di console juga judul 'LOOPING PERTAMA' dan 'LOOPING KEDUA'.
// tampilkan output yang menunjukan kalau looping itu maju pada looping pertama dan mundur pada looping kedua

let maju = 1;
let mundur = 5;

console.log("LOOPING PERTAMA");
while (maju <= 5) {
  console.log(maju);
  maju++;
}

console.log("LOOPING KEDUA");
while (mundur >= 1) {
  console.log(mundur);
  mundur--;
}