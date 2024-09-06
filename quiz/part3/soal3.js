
// Hint: kamu akan menggunakan kondisional juga di kasus ini.

// Problem
// Buatlah sebuah perulangan 1 - 100 dengan pertambahan counter sebanyak 1
// Di dalam perulangan, periksa setiap angka counter:

// Apabila angka counter adalah angka genap, tuliskan GENAP
// Apabila angka counter adalah angka ganjil, tuliskan GANJIL

function CekAngka(angka) {
    if (angka % 2 == 0){
        return "GENAP"
    }
    if (angka % 2 == 1){
        return "GANJIL"
    }
  }
for (let index = 1; index <= 100; index++) {
    console.log(index +" "+ CekAngka(index));
}
