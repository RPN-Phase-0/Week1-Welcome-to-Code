// Problem
// Pada tugas ini kamu diminta untuk melakukan looping dalam JavaScript dengan menggunakan syntax while. 
// Untuk membuat tantangan ini lebih menarik, kamu juga diminta untuk membuat suatu looping yang menghitung maju dan 
// menghitung mundur. Jangan lupa tampilkan di console juga judul 'LOOPING PERTAMA' dan 'LOOPING KEDUA'.
//tampilkan output yang menunjukan kalau looping itu maju pada looping pertama dan mundur pada looping kedua

let i = 0

while (i < 10) {
    console.log(`loping pertama maju ${i}`)
    i++
}

let a = 10

while (a > 0) {
    console.log(`loping pertama maju ${a}`)
    a--
}

// Problem
// Pada tugas ini kamu diminta untuk melakukan looping dalam JavaScript dengan menggunakan syntax for. 
// Untuk membuat tantangan ini lebih menarik, kamu juga diminta untuk membuat suatu looping yang menghitung maju dan 
// menghitung mundur. Jangan lupa tampilkan di console juga judul 'LOOPING PERTAMA' dan 'LOOPING KEDUA'.
//tampilkan output yang menunjukan kalau looping itu maju pada looping pertama dan mundur pada looping kedua

for (i = 0; i < 10; i++) {
    console.log(`lopping pertama`)
    console.log(`output looping ini maju ${i}`)
}

for (i = 10; i > 0; i--) {
    console.log(`lopping kedua`)
    console.log(`output looping ini mundur ${i}`)
}

// Hint: kamu akan menggunakan kondisional juga di kasus ini.

// Problem
// Buatlah sebuah perulangan 1 - 100 dengan pertambahan counter sebanyak 1
// Di dalam perulangan, periksa setiap angka counter:

// Apabila angka counter adalah angka genap, tuliskan GENAP
// Apabila angka counter adalah angka ganjil, tuliskan GANJIL

// Buatlah sebuah perulangan 1 - 100 dengan pertambahan counter sebanyak 1
for (i = 0; i < 100; i++) {
    // Di dalam perulangan, periksa setiap angka counter:
    // Apabila angka counter adalah angka genap, tuliskan GENAP
    // Apabila angka counter adalah angka ganjil, tuliskan GANJIL
    if (i % 2 == 0 ) {
        console.log(`${i} angaka ini genap`)
    } else {
        console.log(`${i} angkan ini ganjil`)
    }
}

// Buatlah 3 perulangan baru dari 1 - 100, dengan pertambahan counter sebesar 2, 5, dan 9.
// Pada 3 perulangan baru ini periksa setiap angka counter:

// Apabila bukan kelipatan yang ditentukan tidak perlu menuliskan apa-apa
// Apabila angka counter adalah kelipatan 3 dengan pertambahan 2, kelipatan 6 dengan pertambahan 5, dan kelipatan 10 dengan pertambahan 9, tuliskan:
// "3 kelipatan 3"dan seterusnya.

// Buatlah 3 perulangan baru dari 1 - 100, dengan pertambahan counter sebesar 2, 5, dan 9.
for ( let i = 0; i < 100; i = i + 2 ) {
    if ( i % 3 == 0 ) {
        console.log(`${i} kelipatan dari 3`)
    }
}
for ( let i = 0; i < 100; i = i + 5 ) {
    if ( i % 6 == 0 ) {
        console.log(`${i} kelipatan dari 6`)
    }
}
for ( let i = 0; i < 100; i = i + 9 ) {
    if ( i % 10 == 0 ) {
        console.log(`${i} kelipatan dari 10`)
    }
}

// Problem buatlah bintang seperti berikut
let input = 5

for (let i = 0; i < 5; i++) {
    let hasil = "*"
    for ( a = 0; a < i; a++) {
        hasil = hasil + "*"
    }
    console.log(hasil)
}
//hasilnya
//*
//**
//***
//****
//*****
