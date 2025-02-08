// Problem
// Pada tugas ini kamu diminta untuk melakukan looping dalam JavaScript dengan menggunakan syntax while. 
// Untuk membuat tantangan ini lebih menarik, kamu juga diminta untuk membuat suatu looping yang menghitung maju dan 
// menghitung mundur. Jangan lupa tampilkan di console juga judul 'LOOPING PERTAMA' dan 'LOOPING KEDUA'.
//tampilkan output yang menunjukan kalau looping itu maju pada looping pertama dan mundur pada looping kedua

console.log("LOOPING PERTAMA");
let number = 1;

while (number < 50) {
  number++;
  console.log("Ini Looping Maju" + " " + number);
}

console.log('LOOPING KEDUA');
number = 50;

while(number > 0) {
  number--;
  console.log("Ini Looping Mundur" + " " + number)
}
