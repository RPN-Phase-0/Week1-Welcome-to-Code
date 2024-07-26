// Hint: kamu akan menggunakan kondisional juga di kasus ini.

// Problem
// Buatlah sebuah perulangan 1 - 100 dengan pertambahan counter sebanyak 1
// Di dalam perulangan, periksa setiap angka counter:

// Apabila angka counter adalah angka genap, tuliskan GENAP
// Apabila angka counter adalah angka ganjil, tuliskan GANJIL

let i = 0;
for(let i = 0; i <= 100; i++) {
    if (i % 2 === 0) {
        console.log(i + ' ' + 'Bilangan Genap')
    } else if (i % 1 === 0) {
        console.log(i + ' ' + 'Bilangan Ganjil')
    }
}