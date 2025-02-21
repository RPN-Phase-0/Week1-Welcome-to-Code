# Belajar Looping | Part 3
## Soal 1

```js
// Problem
// Pada tugas ini kamu diminta untuk melakukan looping dalam JavaScript dengan menggunakan syntax while. 
// Untuk membuat tantangan ini lebih menarik, kamu juga diminta untuk membuat suatu looping yang menghitung maju dan 
// menghitung mundur. Jangan lupa tampilkan di console juga judul 'LOOPING PERTAMA' dan 'LOOPING KEDUA'.
//tampilkan output yang menunjukan kalau looping itu maju pada looping pertama dan mundur pada looping kedua

//CODE HERE
console.log("LOOPING MAJU")
let detik = 1;
while(detik <= 10){
    console.log(`detik ke ${detik}`)
    detik++
}

console.log("")

console.log("LOOPING MUNDUR")
let menit = 10;
while(menit >= 1){
    console.log(`menit ke ${menit}`)
    menit--
}
```
## Soal 2. Melakukan Looping Menggunakan For
```js
// Problem
// Pada tugas ini kamu diminta untuk melakukan looping dalam JavaScript dengan menggunakan syntax for. 
// Untuk membuat tantangan ini lebih menarik, kamu juga diminta untuk membuat suatu looping yang menghitung maju dan 
// menghitung mundur. Jangan lupa tampilkan di console juga judul 'LOOPING PERTAMA' dan 'LOOPING KEDUA'.
//tampilkan output yang menunjukan kalau looping itu maju pada looping pertama dan mundur pada looping kedua

//CODE HERE
console.log("LOOPING MAJU")
for(let i=1; i<=10; i++){
    console.log(`Loop ke-${i}`)
}

console.log("");

console.log("LOOPING MUNDUR")
for(let j=10; j>=1; j--){
    console.log(`Loop ke-${j}`)
}
```
## Soal 3. Angka Ganjil dan Genap

```js
// Hint: kamu akan menggunakan kondisional juga di kasus ini.

// Problem
// Buatlah sebuah perulangan 1 - 100 dengan pertambahan counter sebanyak 1
// Di dalam perulangan, periksa setiap angka counter:

// Apabila angka counter adalah angka genap, tuliskan GENAP
// Apabila angka counter adalah angka ganjil, tuliskan GANJIL

//ALGORITMA
ALGORITMA GanjilGenap
    FOR i FROM 1 TO 100 STEP +1 DO
        IF i MOD 2 = 0 THEN
            OUTPUT GENAP
        ELSE
            OUTPUT GANJIL
        END IF
    END FOR

//CODE HERE
for(let i=1; i<=100; i++){
    if(i % 2 === 0){
        console.log("GENAP");
    } else {
        console.log("GANJIL");
    }
}
```
## Soal 4. counter kelipatan
```js
// Buatlah 3 perulangan baru dari 1 - 100, dengan pertambahan counter sebesar 2, 5, dan 9.
// Pada 3 perulangan baru ini periksa setiap angka counter:

// Apabila bukan kelipatan yang ditentukan tidak perlu menuliskan apa-apa
// Apabila angka counter adalah kelipatan 3 dengan pertambahan 2, kelipatan 6 dengan pertambahan 5, dan kelipatan 10 dengan pertambahan 9, tuliskan:
// "3 kelipatan 3"dan seterusnya.

//ALGORITMA
ALGORITMA kelipatan3Counter2
    FOR i FROM 1 TO 100 STEP +2 DO
        IF i MOD 3 = 0
            OUTPUT i + kelipatan 3
        END IF
    END FOR

ALGORITMA kelipatan6Counter5
    FOR j FROM 1 TO 100 STEP +5 DO
        IF j MOD 6 = 0
            OUTPUT i + kelipatan 6
        END IF
    END FOR

ALGORITMA kelipatan10Counter6
    FOR i FROM 1 TO 100 STEP +6 DO
        IF i MOD 10 = 0
            OUTPUT i + kelipatan 10
        END IF
    END FOR

//CODE HERE
console.log("KELIPATAN 3 DENGAN COUNTER 2");
for(let i=1; i<= 100; i+=2){
    if(i % 3 == 0){
        console.log(`${i} kelipatan 3`);
    }
}

console.log("");
console.log("KELIPATAN 6 DENGAN COUNTER 5");
for(let j=1; j<= 100; j+=5){
    if(j % 6 == 0){
        console.log(`${j} kelipatan 6`);
    }
}

console.log("");
console.log("KELIPATAN 10 DENGAN COUNTER 9");
for(let k=1; k<= 100; k+=9){
    if(k % 10 == 0){
        console.log(`${k} kelipatan 10`);
    }
}
```
## Soal 5. Bintang asteriks
```js
// Problem buatlah bintang seperti berikut
let input = 5
//hasilnya
//*
//**
//***
//****
//*****

//ALGORITMA
ALGORITMA SegitigaSikuBintang
    DEKLARASI:
        input <- INTEGER
        bintang <- STRING
    DESKRIPSI:
        FOR i FROM 1 TO input STEP +1 DO
            FOR j FROM 1 TO i STEP +1 DO
                bintang = bintang + *
            END FOR
            bintang = bintang + \n
        END FOR
    OUTPUT bintang

//CODE HERE
let input = 5;
bintang = "";
for(i=1; i<= input; i++){
    for(j=1; j<=i ;j++){
        bintang += "*";
    }
    bintang += "\n";
}
console.log(bintang);
```

---
Tips pengerjaan ada di video berikut :
[Looping](https://youtu.be/kyobpgoqx2c)

[Materi Looping](../../study-materials/part5.md)