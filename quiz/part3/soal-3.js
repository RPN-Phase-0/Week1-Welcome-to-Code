// Hint: kamu akan menggunakan kondisional juga di kasus ini.

// Problem
// Buatlah sebuah perulangan 1 - 100 dengan pertambahan counter sebanyak 1
// Di dalam perulangan, periksa setiap angka counter:

// Apabila angka counter adalah angka genap, tuliskan GENAP
// Apabila angka counter adalah angka ganjil, tuliskan GANJIL

for (let index = 1; index <= 100; index++) {
    if(index % 2 === 0) {
        console.log(`GENAP ${index}`)
    } else {
        console.log(`GANJIL ${index}`)
    }
}