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
//Mulai

//Deklarasi variabel nama dan peran.
//Validasi Nama

//Jika nama kosong (""):
//Tampilkan pesan: "nama wajib diisi".
//Selesai (program berhenti).
//Jika nama terisi:
//Lanjut ke validasi peran.
//Validasi Peran

//Jika peran kosong (""):
//Tampilkan pesan: "Pilih Peranmu untuk memulai game".
//Selesai.
//Jika peran terisi:
//Lanjut ke pengecekan jenis peran.
//Pengecekan Jenis Peran

//Gunakan switch-case untuk mencocokkan nilai peran:
//Case 1: Jika peran = "ksatria":
//Tampilkan: halo Ksatria ${nama}, kamu dapat menyerang dengan senjatamu!.
//Case 2: Jika peran = "Tabib":
//Tampilkan: halo Tabib ${nama}, kamu akan membantu temanmu yang terluka.
//Case 3: Jika peran = "Penyihir":
//Tampilkan: halo Penyihir ${nama}, ciptakan keajaiban yang membantu kemenanganmu!.
//Default (jika peran tidak valid):
//Tampilkan: "tapi kayaknya kamu jadi bot aja ya, peran yang kamu pilih ga ada".
//Selesai.

let nama = "Ken Arok", peran = "ksatria";

//code disini gunakan console.log untuk outputnya
if (nama == "") {
    console.log("nama wajib di isi");
} else if (peran == "") {
    console.log("pilih peran untuk memulai game")
} else {
    switch (peran) {
        case "ksatria":
            console.log(`halo Ksatria ${nama} , kamu dapat menyerang dengan senjatamu!`);
            break;
        case "Tabib":
            console.log(`halo Tabib ${nama} , kamu akan membantu temanmu yang terluka`);
            break;
        case "Penyihir":
            console.log(`halo Penyihir ${nama} , ciptakan keajaiban yang membantu kemenanganmu!`);
            break;
        default:
            console.log(`tapi kayaknya kamu jadi bot aja ya, peran yang kamu pilih ga ada`);
    }
}