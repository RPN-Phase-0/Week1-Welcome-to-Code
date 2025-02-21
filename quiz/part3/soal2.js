// Problem
// Pada tugas ini kamu diminta untuk melakukan looping dalam JavaScript dengan menggunakan syntax for. 
// Untuk membuat tantangan ini lebih menarik, kamu juga diminta untuk membuat suatu looping yang menghitung maju dan 
// menghitung mundur. Jangan lupa tampilkan di console juga judul 'LOOPING PERTAMA' dan 'LOOPING KEDUA'.
//tampilkan output yang menunjukan kalau looping itu maju pada looping pertama dan mundur pada looping kedua

//algoritma
//1. Inisiasi variabel awal
//2. tampilkan judul 'LOOPING PERTAMA'
//3. Lakukan looping. Jika variabel awal belum lebih kecil atau sama dengan kondisi tertentu (lebih kecil atau sama dengan 10 misalkan)
//tetap lakukan looping dan tampilkan output
//4. jika variabel awal sudah mencapai kondisi tersebut, hentikan looping
//5. tampilkan judul 'LOOPING KEDUA'
//6. Lakukan looping. Jika variabel awal belum lebih besar atau sama dengan kondisi tertentu (lebih besar atau sama dengan 1)
//tetap lakukan looping dan tampilkan output
//7. jika variabel awal sudah mencapai kondisi tersebut, hentikan looping

function loopingMaju(){
    console.log('LOOPING PERTAMA');
    for (let awal = 1; awal <= 10; awal++){
        console.log(awal);
    }
}

function loopingMundur(){
    console.log('LOOPING KEDUA');
    for (let awal = 10; awal >= 1; awal--){
        console.log(awal);
    }
}

loopingMaju();
loopingMundur();