// Problem
// Pada tugas ini kamu diminta untuk melakukan looping dalam JavaScript dengan menggunakan syntax while. 
// Untuk membuat tantangan ini lebih menarik, kamu juga diminta untuk membuat suatu looping yang menghitung maju dan 
// menghitung mundur. Jangan lupa tampilkan di console juga judul 'LOOPING PERTAMA' dan 'LOOPING KEDUA'.
//tampilkan output yang menunjukan kalau looping itu maju pada looping pertama dan mundur pada looping kedua


console.log("LOOPING PERTAMA")
console.log("")

let count = 5;
let num = 1;

while (num <= count) {
    console.log(num);
    num++;
}

console.log("")
console.log("LOOPING KEDUA")
console.log("")


num = 1

while (count >= num) {
    console.log(count);
    count--;
}