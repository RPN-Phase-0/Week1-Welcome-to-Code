// 4. counter kelipatan
// Buatlah 3 perulangan baru dari 1 - 100, dengan pertambahan counter sebesar 2, 5, dan 9.
// Pada 3 perulangan baru ini periksa setiap angka counter:

// Apabila bukan kelipatan yang ditentukan tidak perlu menuliskan apa-apa
// Apabila angka counter adalah kelipatan 3 dengan pertambahan 2, kelipatan 6 dengan pertambahan 5, dan kelipatan 10 dengan pertambahan 9, tuliskan:
// "3 kelipatan 3"dan seterusnya.
for(let angka = 1; angka <= 100; angka ++){
    if(angka % 3 === 0){
        console.log(`${angka} kelipatan 3`)
    }else if(angka % 6 === 0){
        console.log(`${angka} kelipatan 6`)
    }else if(angka % 10 === 0){
        console.log(`${angka} kelipatan 10`)
    }else{
        console.log(angka)
    }
}