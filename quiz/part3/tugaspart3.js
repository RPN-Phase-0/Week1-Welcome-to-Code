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
