// Soal 1
// Problem
// Pada tugas ini kamu diminta untuk melakukan looping dalam JavaScript dengan menggunakan syntax while. 
// Untuk membuat tantangan ini lebih menarik, kamu juga diminta untuk membuat suatu looping yang menghitung maju dan 
// menghitung mundur. Jangan lupa tampilkan di console juga judul 'LOOPING PERTAMA' dan 'LOOPING KEDUA'.
//tampilkan output yang menunjukan kalau looping itu maju pada looping pertama dan mundur pada looping kedua

// code
console.log("Looping Pertama While");
let i = 0;
 while (i <= 5) {
    console.log(i);
    i++;
 }

 console.log("looping Kedua While");
 i = 5;
 while (i >= 0) {
    console.log(i);
    i--;
 }
 

 console.log(' ');
 // Soal 2. Melakukan Looping Menggunakan For
 // Problem
// Pada tugas ini kamu diminta untuk melakukan looping dalam JavaScript dengan menggunakan syntax for. 
// Untuk membuat tantangan ini lebih menarik, kamu juga diminta untuk membuat suatu looping yang menghitung maju dan 
// menghitung mundur. Jangan lupa tampilkan di console juga judul 'LOOPING PERTAMA' dan 'LOOPING KEDUA'.
//tampilkan output yang menunjukan kalau looping itu maju pada looping pertama dan mundur pada looping kedua

//code
console.log("Looping Pertama For");
for (let j = 0; j < 10; j++) {
    console.log(j);
}

console.log("Looping Kedua For");
for (let j = 9; j > 0; j--) {
    console.log(j);
}


console.log(' ');
// Hint: kamu akan menggunakan kondisional juga di kasus ini.

// Problem
// Buatlah sebuah perulangan 1 - 100 dengan pertambahan counter sebanyak 1
// Di dalam perulangan, periksa setiap angka counter:

// Apabila angka counter adalah angka genap, tuliskan GENAP
// Apabila angka counter adalah angka ganjil, tuliskan GANJIL

// code
for (let counter = 1; counter <= 100; counter++) {
    if (counter % 2 == 0) {
        console.log(counter + " GENAP");
    } else {
        console.log(counter + " GANJIL");
    }
}


// Soal 4. counter kelipatan
// Buatlah 3 perulangan baru dari 1 - 100, dengan pertambahan counter sebesar 2, 5, dan 9.
// Pada 3 perulangan baru ini periksa setiap angka counter:

// Apabila bukan kelipatan yang ditentukan tidak perlu menuliskan apa-apa
// Apabila angka counter adalah kelipatan 3 dengan pertambahan 2, kelipatan 6 dengan pertambahan 5, dan kelipatan 10 dengan pertambahan 9, tuliskan:
// "3 kelipatan 3"dan seterusnya.

//code
console.log("counter + 2, kelipatan 2");
for (counter = 0; counter <= 100; counter+=2) {
    if (counter % 2 === 0 && counter != 0) {
        console.log(counter += " kelipatan 2");
    }
}

console.log("counter + 5, kelipatan 6");
for (counter = 0; counter <= 100; counter+=5) {
    if (counter % 6 == 0 && counter != 0) {
        console.log(counter += " kelipatan 6");
    }
}

console.log("counter + 9, kelipatan 10");
for (counter = 0; counter <= 100; counter+=9) {
    if (counter % 10 == 0 && counter != 0) {
        console.log(counter += " kelipatan 10");
    }
}


console.log(' ');
// Soal 5. Bintang asteriks
// Problem buatlah bintang seperti berikut
let input = 5
//hasilnya
//*
//**
//***
//****
//*****

//code
let asteriks = "";
for (let i = 1; i <= input; i++) {
    asteriks += "*";
    console.log(asteriks);
}