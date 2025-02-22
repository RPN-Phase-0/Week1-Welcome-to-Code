// Soal 1
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

let nama = "", peran = "";
function proxytiaGames(nama, peran) {
    if (nama === "") {
        console.error("Nama wajib diisi"); // return "Nama wajib diisi";
    } else if (peran === "") {
        console.error("Pilih peranmu untuk memulai"); // return ("Pilih peranmu untuk memulai");
    } else if (peran == "Ksatria") {
        return "Halo " + nama + ", kamu dapat menyerang dengan senjatamu!"
    } else if (peran == "Tabib") {
        return "Halo " + nama + ", kamu akan membantu temanmu yang terluka!"
    } else if (peran == "Penyihir") {
        return "Halo " + nama + ", ciptakan keajaiban yang membantu kemenanganmu!"
    } else {
        return "kayaknya kamu jadi bot aja ya, peran yang kamu pilih gaada"
    }
}

//code disini gunakan console.log untuk outputnya
console.log(proxytiaGames("",""));
console.log(proxytiaGames("tuta", ""));
console.log(proxytiaGames("", "ksatria"));
console.log(proxytiaGames("tuta", "Ksatria"));
console.log(proxytiaGames("Chawpie", "Tabib"));
console.log(proxytiaGames("Dorry", "Penyihir"));
console.log(proxytiaGames("Dani", "Mr.X"))


console.log(' ');
// Soal 2
// Kamu akan diberikan sebuah tanggal dalam tiga variabel, yaitu hari, bulan, dan tahun. Disini kamu diminta untuk membuat format tanggal. Misal tanggal yang diberikan adalah hari 1, bulan 5, dan tahun 1945. Maka, output yang harus kamu proses adalah menjadi 1 Mei 1945.

// Gunakan switch case untuk kasus ini!

// Contoh:

// let hari = 21; let bulan = 1; let tahun = 1945;

// Maka hasil yang akan tampil di console adalah: '21 Januari 1945';

//tips gunakan keyword ini di google "conditional switch case javascript"
//dan mulailah membaca dan mencontek di stackoverflow xixixi

let tanggal = 12; // assign nilai variabel tanggal disini! (dengan angka antara 1 - 31)
let bulan = 2 // assign nilai variabel bulan disini! (dengan angka antara 1 - 12)
let tahun = 2001; // assign nilai variabel tahun disini! (dengan angka antara 1900 - 2200)

//code switch case kamu disini
 function buatTanggal(tanggal, bulan, tahun) {
    switch (bulan) {
        case 1: bulan = "Januari";
        case 2: bulan = "Februari";
        case 3: bulan = "Maret";
        case 4: bulan = "April";
        case 5: bulan = "Mei";
        case 6: bulan = "Juni";
        case 7: bulan = "Juli";
        case 8: bulan = "Agustus";
        case 9: bulan = "Septermber";
        case 10: bulan = "Oktober";
        case 11: bulan = "November";
        case 12: bulan = "Desember";
            break;
    }
    return tanggal + ' ' + bulan + ' ' + tahun;
 }
console.log(buatTanggal(2, 1, 2012));