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

// Algoritma
ALGORITMA GameProxytia
    DEKLARASI:
        nama, peran <- STRING
    
    DESKRIPSI:
        nama <- ""
        peran <- ""

        IF nama = "" THEN
            OUTPUT "Nama wajib diisi"
        ELSE IF peran = "" THEN
            OUTPUT "Pilih peranmu untuk memulai game!"
        ELSE
            IF LOWER(peran) = "ksatria" THEN
                OUTPUT "Ksatria", nama, ", kamu dapat menyerang dengan senjatamu!"
            ELSE IF LOWER(peran) = "tabib" THEN
                OUTPUT "Hallo tabib", nama, ", kamu akan membantu temanmu yang terluka"
            ELSE IF LOWER(peran) = "penyihir" THEN
                OUTPUT "Hallo penyihir", nama, ", ciptakan keajaiban yang membantu kemenanganmu!"
            ELSE 
                OUTPUT "Tapi kayaknya kamu jadi bot aja ya, peran yang kamu pilih ga ada"
            ENDIF
        ENDIF

//code disini gunakan console.log untuk outputnya
let nama = "", peran = "";
if(nama === ""){
    console.log("Nama wajib diisi!")
} else if (peran === ""){
    console.log("Pilih peranmu untuk memulai game!")
} else {
    if (peran.toLowerCase() == "ksatria"){
        console.log(`Ksatria ${nama}, kamu dapat menyerang dengan senjatamu!`)
    } else if (peran.toLowerCase() == "tabib"){
        console.log(`halo Tabib ${nama} , kamu akan membantu temanmu yang terluka`)
    } else if (peran.toLowerCase() == "penyihir"){
        console.log(`halo Penyihir ${nama} , ciptakan keajaiban yang membantu kemenanganmu!`)
    } else {
        console.log("tapi kayaknya kamu jadi bot aja ya, peran yang kamu pilih ga ada")
    };
}
```

## Soal 2
```js
// Kamu akan diberikan sebuah tanggal dalam tiga variabel, yaitu hari, bulan, dan tahun. Disini kamu diminta untuk membuat format tanggal. Misal tanggal yang diberikan adalah hari 1, bulan 5, dan tahun 1945. Maka, output yang harus kamu proses adalah menjadi 1 Mei 1945.

// Gunakan switch case untuk kasus ini!

// Contoh:

// let hari = 21; let bulan = 1; let tahun = 1945;

// Maka hasil yang akan tampil di console adalah: '21 Januari 1945';

//code switch case kamu disini
let tanggal = 12, bulan = 2, tahun = 2001;
switch(bulan){
    case 1:
        console.log(`${tanggal} Januari ${tahun}`);
        break;
    case 2:
        console.log(`${tanggal} Februari ${tahun}`);
        break;
    case 3:
        console.log(`${tanggal} Maret ${tahun}`);
        break;
    case 4:
        console.log(`${tanggal} April ${tahun}`);
        break;
    case 5:
        console.log(`${tanggal} Mei ${tahun}`);
        break;
    case 6:
        console.log(`${tanggal} Juni ${tahun}`);
        break;
    case 7:
        console.log(`${tanggal} Juli ${tahun}`);
        break;
    case 8:
        console.log(`${tanggal} Agustus ${tahun}`);
        break;
    case 9:
        console.log(`${tanggal} September ${tahun}`);
        break;
    case 10:
        console.log(`${tanggal} Oktober ${tahun}`);
        break;
    case 11:
        console.log(`${tanggal} November ${tahun}`);
        break;
    case 12:
        console.log(`${tanggal} Desember ${tahun}`);
        break;
    default:
        console.log("Bulan tidak valid");
}
---
video biar rada paham lah, soalnya ini awal kepahitan ngoding wkwk:

[Video tutor by Harkon](https://youtu.be/-YlMePibR6Y)

*sisanya kalian googling aja ya ges yak*
