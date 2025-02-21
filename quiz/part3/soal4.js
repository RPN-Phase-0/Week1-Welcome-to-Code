// Buatlah 3 perulangan baru dari 1 - 100, dengan pertambahan counter sebesar 2, 5, dan 9.
// Pada 3 perulangan baru ini periksa setiap angka counter:

// Apabila bukan kelipatan yang ditentukan tidak perlu menuliskan apa-apa
// Apabila angka counter adalah kelipatan 3 dengan pertambahan 2, kelipatan 6 dengan pertambahan 5, dan kelipatan 10 dengan pertambahan 9, tuliskan:
// "3 kelipatan 3"dan seterusnya.

//algoritma
//1. inisiasi variabel, max angka (100), dan penambahan counter (2, 5, 9)
//2. lakukan looping dari 1 sampai max angka dengan penambahan masing2 looping yauitu 2, 5, dan 9
//3. kelipatan 3 : jika counter mod 3 menghaasilkan angka 0 (tidak ada sisa), cetak counter dan "kelipatan 3"
//kelipatan 6 : jika counter mod 6 menghasilkan angka 0 (tidak ada sisa), cetak counter dan "kelipatan 6"
//kelipatan 10 : jika counter mod 10 menghasilkan angka 0 (tidak ada sisa), cetak counter dan "kelipatan 10"

function kelipatanTiga(){
    console.log('KELIPATAN 3')
    for (let i = 1; i <= 100; i += 2) {
        if(i % 3 === 0){
            console.log(`${i} kelipatan 3`);
        }
    }
}

function kelipatanEnam(){
    console.log('KELIPATAN 6')
    for (let i = 1; i <= 100; i += 5) {
        if(i % 6 === 0){
            console.log(`${i} kelipatan 6`);
        }
    }
}

function kelipatanSepuluh(){
    console.log('KELIPATAN 10')
    for (let i = 1; i <= 100; i += 9) {
        if(i % 10 === 0){
            console.log(`${i} kelipatan 10`);
        }
    }
}

kelipatanTiga();
kelipatanEnam();
kelipatanSepuluh();