// Soal 2. Melakukan Looping Menggunakan For

// Problem
// Pada tugas ini kamu diminta untuk melakukan looping dalam JavaScript dengan menggunakan syntax for. 
// Untuk membuat tantangan ini lebih menarik, kamu juga diminta untuk membuat suatu looping yang menghitung maju dan 
// menghitung mundur. Jangan lupa tampilkan di console juga judul 'LOOPING PERTAMA' dan 'LOOPING KEDUA'.
//tampilkan output yang menunjukan kalau looping itu maju pada looping pertama dan mundur pada looping kedua
console.log("============================ Jawaban Soal 2 ============================");
console.log("LOOPING PERTAMA");
for (;x <= 10;) {
    x++;
    console.log("Menghitung Maju dari " + x);
}
console.log("\n");
console.log("LOOPING KEDUA");
for (;x >= 0;) {
    console.log("Menghitung Maju dari " + x);
    x--;
}
console.log("========================================================================\n");
