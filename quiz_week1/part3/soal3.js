// 3
// Hint: kamu akan menggunakan kondisional juga di kasus ini.

// Problem
// Buatlah sebuah perulangan 1 - 100 dengan pertambahan counter sebanyak 1
// Di dalam perulangan, periksa setiap angka counter:

// Apabila angka counter adalah angka genap, tuliskan GENAP
// Apabila angka counter adalah angka ganjil, tuliskan GANJIL

for(let angka = 1; angka <= 100; angka++){
    if(angka%2 === 0){
        console.log(`${angka} : GENAP`)
    }else{
        console.log(`${angka} : GANJIL`)
    }
}