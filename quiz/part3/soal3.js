// Hint: kamu akan menggunakan kondisional juga di kasus ini.

// Problem
// Buatlah sebuah perulangan 1 - 100 dengan pertambahan counter sebanyak 1
// Di dalam perulangan, periksa setiap angka counter:

// Apabila angka counter adalah angka genap, tuliskan GENAP
// Apabila angka counter adalah angka ganjil, tuliskan GANJIL

//algoritma
//1. inisiasi variabel
//2. lakukan looping dari 1 sampai 100 dengan penambahan counter sebanyak 1
//3. cetak angka
//4. periksa apakah angka counter adalah genap atau ganjil
//5. jika counter adalah genap maka cetak GENAP
//6. jika counter adalah ganjil maka cetak GANJIL
//7. akhiri looping jika sudah mencapai 100

for(let i = 1; i <= 100; i++){
    if(i % 2 === 0){
        console.log(i + ": GENAP")
    } else {
        console.log(i + ": GANJIL");
    }
}