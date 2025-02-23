//Soal 2
```js
// Kamu akan diberikan sebuah tanggal dalam tiga variabel, yaitu hari, bulan, dan tahun. Disini kamu diminta untuk membuat format tanggal. Misal tanggal yang diberikan adalah hari 1, bulan 5, dan tahun 1945. Maka, output yang harus kamu proses adalah menjadi 1 Mei 1945.

// Gunakan switch case untuk kasus ini!
```
// Contoh:

// let hari = 21; let bulan = 1; let tahun = 1945;

// Maka hasil yang akan tampil di console adalah: '21 Januari 1945';

//tips gunakan keyword ini di google "conditional switch case javascript"
//dan mulailah membaca dan mencontek di stackoverflow xixixi

let tanggal = 12; // assign nilai variabel tanggal disini! (dengan angka antara 1 - 31)
let bulan = "februari"; // assign nilai variabel bulan disini! (dengan angka antara 1 - 12)
let tahun = 2001; // assign nilai variabel tahun disini! (dengan angka antara 1900 - 2200)

//code switch case kamu disini
let tanggal = "6"
let bulan = "01";
let namaBulan = ""
switch(bulan) {
    case "01":
        namaBulan = "Januari"
        break;
    case "02":
        namaBulan = "Februari"
        break;
    case "03":
        namaBulan = "Maret"
    case "04":
        namaBulan = "April"
        break;
    case "05":
        namaBulan = "Mei"
        break;
    case "06":
        namaBulan = "Juni"
        break;
    case "07":
        namaBulan = "Juli"
        break;
    case "08":
        namaBulan = "Agustus"
        break;
    case "09":
        namaBulan = "September"
        break;
    case "10":
        namaBulan = "Oktober"
        break;
    case "11":
        namaBulan = "November"
        break;
    case "05":
         namaBulan = "Mei"
        break;
}           
let tahun = 2008;