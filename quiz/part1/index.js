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
//buat dulu 2 variabel untuk nama dan peran lalu buat kondisi dimana nama dan peran harus diisi atau mengeluarkan output "Pilih Peranmu untuk memulai game" jika kosong
//lalu buat 3 kondisi dimana 
//jika peran == ksatria, outputnya hello ksatria ${nama} , kamu dapat menyerang dengan senjatamu!
//jika peran == tabib, penyihir dan tabib maka outputnya "halo tabib ${nama} , kamu akan membantu temanmu yang terluka"
//jika peran == penyihir, maka outputnya "halo penyihir ${nama} , ciptakan keajaiban yang membantu kemenanganmu!"
//jika peran bukan penyihir, tabib, atau ksatria maka outputnya "tapi kayaknya kamu jadi bot aja ya, peran yang kamu pilih ga ada"


let nama = "alphari", peran = "ksatria";

if(peran == "ksatria"){
    console.log(`halo ${peran} ${nama} , kamu dapat menyerang dengan senjatamu!`)
} else if(peran == "tabib"){
    console.log(`halo ${peran} ${nama} , kamu akan membantu temanmu yang terluka`)
} else if(peran == "penyihir"){
    console.log(`halo ${peran} ${nama} , ciptakan keajaiban yang membantu kemenanganmu!`)
}
//code disini gunakan console.log untuk outputnya



// ## Soal 2
// Kamu akan diberikan sebuah tanggal dalam tiga variabel, yaitu hari, bulan, dan tahun. Disini kamu diminta untuk membuat format tanggal. Misal tanggal yang diberikan adalah hari 1, bulan 5, dan tahun 1945. Maka, output yang harus kamu proses adalah menjadi 1 Mei 1945.

// Gunakan switch case untuk kasus ini!

// Contoh:

// let hari = 21; let bulan = 1; let tahun = 1945;

// Maka hasil yang akan tampil di console adalah: '21 Januari 1945';

//tips gunakan keyword ini di google "conditional switch case javascript"
//dan mulailah membaca dan mencontek di stackoverflow xixixi

let tanggal = 12; // assign nilai variabel tanggal disini! (dengan angka antara 1 - 31)
let bulan = 2; // assign nilai variabel bulan disini! (dengan angka antara 1 - 12)
let tahun = 2001; // assign nilai variabel tahun disini! (dengan angka antara 1900 - 2200)

//code switch case kamu disini
if(tanggal > 31){
    console.log("masukkan angka antara 1 - 31")
} if(bulan > 12){
    console.log("masukkan angka antara 1 - 12")
} else if(tahun < 1900 || tahun > 2200){
    console.log("masukkan angka antara 1900 - 2200")
}

switch(bulan){
    case 1:
        bulan = "januari"
        console.log(`${tanggal} ${bulan} ${tahun}`)
        break;
    case 2:
        bulan = "februari"
        console.log(`${tanggal} ${bulan} ${tahun}`)
        break;
    case 3:
        bulan = "maret"
        console.log(`${tanggal} ${bulan} ${tahun}`)
        break;
    case 4:
        bulan = "april"
        console.log(`${tanggal} ${bulan} ${tahun}`)
        break;
    case 5:
        bulan = "mei"
        console.log(`${tanggal} ${bulan} ${tahun}`)
        break;
    case 6:
        bulan = "juni"
        console.log(`${tanggal} ${bulan} ${tahun}`)
        break;
    case 7:
        bulan = "juli"
        console.log(`${tanggal} ${bulan} ${tahun}`)
        break;   
    case 8:
        bulan = "agustus"
        console.log(`${tanggal} ${bulan} ${tahun}`)
        break;
    case 9:
        bulan = "september"
        console.log(`${tanggal} ${bulan} ${tahun}`)
        break;
    case 10:
        bulan = "oktober"
        console.log(`${tanggal} ${bulan} ${tahun}`)
        break;
    case 11:
        bulan = "november"
        console.log(`${tanggal} ${bulan} ${tahun}`)
        break;
    case 12:
        bulan = "desember"
        console.log(`${tanggal} ${bulan} ${tahun}`)
        break;
}

