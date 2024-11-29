# Conditional Statement | Part 1

oke kawan-kawan, disini kalian akan belajar yang namanya Conditional Statement, Logical Operator, dan Comparisons Operator.

singkatnya sih disini belajar if else, namun nanti ada soal yang dimana kamu harus belajar cara membaca dokumentasi dan cara belajar mandiri, yaitu soal bertema Switch hehe.

yak Buka aja W3school dan kerjakan soal soal berikut

## Soal 1:
```js
// Kamu diminta untuk memprogram suatu game sederhana, Proxytia namanya. 
// Untuk memulai game itu diperlukan 2 variabel (untuk sekarang), 
// yaitu nama dan peran. Variabel peran harus memiliki isi data, 
// bila nama kosong, pemain akan diberikan peringatan berupa "nama wajib diisi"
// bila kosong pemain akan diberikan peringatan berupa "Pilih Peranmu untuk memulai game". 
// Terdapat 3 peran berbeda yaitu Ksatria, Tabib, dan Penyihir. 
// Tugas Anda adalah untuk membuat program yang mengecek isi variabel 
// peran serta mengeluarkan respon sesuai isi variabel tersebut.
//ada 4 jenis respons sesuai dengan 3 jenis peran yaitu
//halo Ksatria ${nama} , kamu dapat menyerang dengan senjatamu!
//halo Tabib ${nama} , kamu akan membantu temanmu yang terluka
//halo Penyihir ${nama} , ciptakan keajaiban yang membantu kemenanganmu!
//tapi kayaknya kamu jadi bot aja ya, peran yang kamu pilih ga ada
//tips belajar penggunaan `` (backtick) pada javascript agar
//mudah dalam memasukan variabel ke dalam string
//tapi tanpa backtick juga ga masalah sih yg penting output sesuai

// algoritma
//isi algoritma mu disini (AWAS KALO GA DI ISI!!!!)

1. Buat 2 variabel Terlebih Dahulu, Yang Berisikan Nama Dan Perannya menggunakan let;
2. Gunakan If Else, Untuk Validasi Jika User Tidak Mengisi Nama maka akan menampilkan "Nama Wajib Diisi"
3. Gunakan If Else juga, untuk validasi peran jika user tidak mengisi Peran maka akan menampilkan "Pilih Peranmu untuk memulai game"
4. Gunakan If Else dan Else If, untuk validasi tentang memilih peran berbeda yaitu Ksatria, Tabib dan Penyihir -> Jadi Ketika salah satu peran terpilih maka akan menampilkan sesuai responnya
    - Ksatria : `halo Ksatria ${nama}, Kamu Dapat Menyerang Dengan Senjatamu dan Menahan Segala Serangan! `

    - Tabib : `halo Tabib ${nama} , Kamu Dapat Membantu Temanmu Yang Sedang Terluka!`

    - Penyihir : `halo Penyihir ${nama} , Kamu Bisa Mengeluarkan Sihir Paling Keren Sedunia dan Mengalahkan Musuh dengan Mudah`

    - Jika Tidak Memilih : tapi kayaknya kamu jadi bot aja ya, peran yang kamu pilih ga ada
5. Bisa gunakan Switch Case juga pada validasi peran

let nama = "Louis"
let peran = "Penyihir";

if(!nama || nama.length <= 0) {
  console.log("Nama Wajib Diisi!");
}

if (!peran || peran.length <= 0) {
  console.log("Pilih Peranmu untuk memulai game")
}

if(peran === "Ksatria") {
  console.log(`Halo Ksatria ${nama}, Kamu Dapat Menyerang Dengan Senjatamu dan Menahan Segala Serangan`)
} else if (peran === "Tabib") {
  console.log(`Halo Tabib ${nama}, Kamu Dapat Membantu Temanmu Yang Sedang Terluka!`)
} else if(peran === "Penyihir") {
  console.log(`Halo Penyihir ${nama}, Kamu Bisa Mengeluarkan Sihir Paling Keren Sedunia dan Mengalahkan Musuh dengan Mudah`)
} else {
  console.log(`${nama} tapi kayaknya kamu jadi bot aja ya, peran yang kamu pilih ga ada`)
}

switch(peran) {
  case "Ksatria":
    console.log(`Halo Ksatria ${nama}, Kamu Dapat Menyerang Dengan Senjatamu dan Menahan Segala Serangan`);
    break;
  case "Tabib":
    console.log(`Halo Tabib ${nama}, Kamu Dapat Membantu Temanmu Yang Sedang Terluka!`);
    break;
  case "Penyihir":
    console.log(`Halo Penyihir ${nama}, Kamu Bisa Mengeluarkan Sihir Paling Keren Sedunia dan Mengalahkan Musuh dengan Mudah`);
    break;
  default:
    console.log(`${nama} tapi kayaknya kamu jadi bot aja ya, peran yang kamu pilih ga ada`);
    break;
}

```

## Soal 2
```js
// Kamu akan diberikan sebuah tanggal dalam tiga variabel, yaitu hari, bulan, dan tahun. Disini kamu diminta untuk membuat format tanggal. Misal tanggal yang diberikan adalah hari 1, bulan 5, dan tahun 1945. Maka, output yang harus kamu proses adalah menjadi 1 Mei 1945.

// Gunakan switch case untuk kasus ini!

// Contoh:

// let hari = 21; let bulan = 1; let tahun = 1945;

// Maka hasil yang akan tampil di console adalah: '21 Januari 1945';

//tips gunakan keyword ini di google "conditional switch case javascript"
//dan mulailah membaca dan mencontek di stackoverflow xixixi

let tanggal = 12; // assign nilai variabel tanggal disini! (dengan angka antara 1 - 31)
let bulan = "februari"; // assign nilai variabel bulan disini! (dengan angka antara 1 - 12)
let tahun = 2001; // assign nilai variabel tahun disini! (dengan angka antara 1900 - 2200)

//code switch case kamu disini
```
let tanggal = 21; // assign nilai variabel tanggal disini! (dengan angka antara 1 - 31)
let bulan = 1; // assign nilai variabel bulan disini! (dengan angka antara 1 - 12)
let tahun = 1945; // assign nilai variabel tahun disini! (dengan angka antara 1900 - 2200)

//code switch case kamu disini

switch (bulan) {
    case 1:
        bulan = "Januari";
        break;
    case 2:
        bulan = "Februari";
        break;
    case 3:
        bulan = "Maret";
        break;
    case 4:
        bulan = "April";
        break;
    case 5:
        bulan = "Mei";
        break;
    case 6:
        bulan = "Juni";
        break;
    case 7:
        bulan = "Juli";
        break;
    case 8:
        bulan = "Agustus";
        break;
    case 9:
        bulan = "September";    
        break;
    case 10:
        bulan = "Oktober";
        break;
    case 11:
        bulan = "November";
        break;
    case 12:
        bulan = "Desember";
        break;
    default:
        break;
}

console.log(tanggal + " " + bulan + " " + tahun);

---
video biar rada paham lah, soalnya ini awal kepahitan ngoding wkwk:

[Video tutor](https://youtu.be/-YlMePibR6Y)

*sisanya kalian googling aja ya ges yak*
