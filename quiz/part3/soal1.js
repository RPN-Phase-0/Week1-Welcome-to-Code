// Problem
// Pada tugas ini kamu diminta untuk melakukan looping dalam JavaScript dengan menggunakan syntax while. 
// Untuk membuat tantangan ini lebih menarik, kamu juga diminta untuk membuat suatu looping yang menghitung maju dan 
// menghitung mundur. Jangan lupa tampilkan di console juga judul 'LOOPING PERTAMA' dan 'LOOPING KEDUA'.
//tampilkan output yang menunjukan kalau looping itu maju pada looping pertama dan mundur pada looping kedua

//algoritma
//1. inisiasi variabel awal dan akhir
//2. tampilkan judul 'LOOPING PERTAMA'
//3. jika looping belum mencapai akhir, looping diteruskan dan menampilkan output angka
//4. jika looping sudah mencapai akhir, looping dihentikan
//5. tampilkan judul 'LOOPING KEDUA'
//6. jika looping belum mencapai awal, looping diteruskan dan menampilkan output angka
//7. jika looping sudah mencapai awal, looping dihentikan

function loopingMaju(awal, akhir) {
    console.log('LOOPING PERTAMA');
    while (awal <= akhir) {
        console.log(awal);
        awal++;
    }
}

function loopingMundur(akhir, awal) {
    console.log('LOOPING KEDUA')
    while (akhir >= awal) {
        console.log(akhir)
        akhir--;
    }
}

loopingMaju(1, 10);
loopingMundur(10, 1);