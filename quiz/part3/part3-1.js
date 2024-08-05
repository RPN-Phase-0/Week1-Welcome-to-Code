// Belajar Looping | Part 3
// Soal 1
// Problem
// Pada tugas ini kamu diminta untuk melakukan looping dalam JavaScript dengan menggunakan syntax while. 
// Untuk membuat tantangan ini lebih menarik, kamu juga diminta untuk membuat suatu looping yang menghitung maju dan 
// menghitung mundur. Jangan lupa tampilkan di console juga judul 'LOOPING PERTAMA' dan 'LOOPING KEDUA'.
//tampilkan output yang menunjukan kalau looping itu maju pada looping pertama dan mundur pada looping kedua
let x = 0;
console.log("============================ Jawaban Soal 1 ============================");
console.log("LOOPING PERTAMA");
while (x <= 10) {
    x++;
    console.log("Menghitung Maju dari " + x);
}
console.log("\n");
console.log("LOOPING KEDUA");
while (x >= 0) {
    console.log("Menghitung Mundur dari " + x);
    x--;
}
console.log("========================================================================\n");
