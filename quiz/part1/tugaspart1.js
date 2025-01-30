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

// // nama variabel `
let nama = "Hans Toreto", peran = "Ksatria";

// cek apakah variable nama itu kosong ?
if (nama == "") {
    // kalau kosong ada peringatan "nama wajib di isi"
    console.log("nama wajib di isi");  
} 
// mengecek apakah peran itu variable kosong ?
else if ( peran == "") {
    // kalau iya ada peringatan "Pilih Peranmu untuk memulai game"
    console.log("Pilih Peranmu untuk memulai game")
} 
// kalau sudah / gak ada yang aneh cek semua respon peran 
else {
    // mengecek misal peranya adalah ksatria
    if ( peran == "Ksatria") {
        // kalau iya tampilin ini
        console.log(`halo Ksatria ${nama} , kamu dapat menyerang dengan senjatamu!`)
    } 
    // mengecek peran selain kesatria 
    else if ( peran == "Tabib") {
        // kalau peran nya tabib tampilin ini 
        console.log(`halo Tabib ${nama} , kamu akan membantu temanmu yang terluka`)
    }
    else if (peran == "Penyihir") {
        console.log(`halo Penyihir ${nama} , ciptakan keajaiban yang membantu kemenanganmu!`)
    }
    else {
        console.log(`tapi kayaknya kamu jadi bot aja ya, peran yang kamu pilih ga ada`)
    }
}

//code disini gunakan console.log untuk outputnya

// soal nomer 2 

// Kamu akan diberikan sebuah tanggal dalam tiga variabel, yaitu hari, bulan, dan tahun. 
// Disini kamu diminta untuk membuat format tanggal. Misal tanggal yang diberikan adalah hari 1, 
// bulan 5, dan tahun 1945. Maka, output yang harus kamu proses adalah menjadi 1 Mei 1945.

// Gunakan switch case untuk kasus ini!

// Contoh:

// let hari = 21; let bulan = 1; let tahun = 1945;

// Maka hasil yang akan tampil di console adalah: '21 Januari 1945';

//tips gunakan keyword ini di google "conditional switch case javascript"
//dan mulailah membaca dan mencontek di stackoverflow xixixi

let tanggal = 12; // assign nilai variabel tanggal disini! (dengan angka antara 1 - 31)
let bulan = 12; // assign nilai variabel bulan disini! (dengan angka antara 1 - 12)
let tahun = 2002; // assign nilai variabel tahun disini! (dengan angka antara 1900 - 2200)

//code switch case kamu disini

switch(bulan) {
    case 1 : 
    bulan = "january"
    console.log(`${tanggal} ${bulan} ${tahun}`);
    break;
    case 2 : 
    bulan = "february"
    console.log(`${tanggal} ${bulan} ${tahun}`);
    break;
    case 3 : 
    bulan = "maret"
    console.log(`${tanggal} ${bulan} ${tahun}`);
    break;
    case 4 : 
    bulan = "april"
    console.log(`${tanggal} ${bulan} ${tahun}`);
    break;
    case 5 : 
    bulan = "mei"
    console.log(`${tanggal} ${bulan} ${tahun}`);
    break;
    case 6 : 
    bulan = "juni"
    console.log(`${tanggal} ${bulan} ${tahun}`);
    break;
    case 7 : 
    bulan = "july"
    console.log(`${tanggal} ${bulan} ${tahun}`);
    break;
    case 8 : 
    bulan = "agustus"
    console.log(`${tanggal} ${bulan} ${tahun}`);
    break;
    case 9 : 
    bulan = "September"
    console.log(`${tanggal} ${bulan} ${tahun}`);
    break;
    case 10 : 
    bulan = "Oktober"
    console.log(`${tanggal} ${bulan} ${tahun}`);
    break;
    case 11 : 
    bulan = "November"
    console.log(`${tanggal} ${bulan} ${tahun}`);
    break;
    case 12 : 
    bulan = "Desember"
    console.log(`${tanggal} ${bulan} ${tahun}`);
    break;
}
