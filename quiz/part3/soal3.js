//Soal 3. Angka Ganjil dan Genap

// Hint: kamu akan menggunakan kondisional juga di kasus ini.

// Problem
// Buatlah sebuah perulangan 1 - 100 dengan pertambahan counter sebanyak 1
// Di dalam perulangan, periksa setiap angka counter:

// Apabila angka counter adalah angka genap, tuliskan GENAP
// Apabila angka counter adalah angka ganjil, tuliskan GANJIL

let i = 1;

while(i <= 100){
    if(i % 2 === 0){
        console.log(`${i} adalah bilangan genap`)
    } else {
        console.log(`${i} adalah bilangan ganjil`)
    }
    i++
}