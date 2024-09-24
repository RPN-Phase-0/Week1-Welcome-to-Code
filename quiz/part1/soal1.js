// Kamu diminta untuk memprogram suatu game sederhana, Proxytia namanya. 
// Untuk memulai game itu diperlukan 2 variabel (untuk sekarang), 
// yaitu nama dan peran. Variabel peran harus memiliki isi data, 
// bila nama kosong, pemain akan diberikan peringatan berupa "nama wajib diisi"
// bila peran kosong pemain akan diberikan peringatan berupa "Pilih Peranmu untuk memulai game". 
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
/**
 * input nama dan peran
 * cek nama
 * jika nama kosong, tampilkan peringatan "Nama wajib diisi".
 * cek peran
 * jika peran kosong, tampilkan peringatan "Silahkan Pilih peranmu untuk memulai game".
 * validasi peran
 * jika peran Ksatria tampilkan pesan "halo Ksatria ${nama} , kamu dapat menyerang dengan senjatamu!"
 * jika peran Tabib tampikan pesan "halo Tabib ${nama} , kamu akan membantu temanmu yang terluka"
 * jka peran Penyihir tampilkan pesan "halo Penyihir ${nama} , ciptakan keajaiban yang membantu kemenanganmu!"
 * jika peran yang bukan "Ksatria", "Tabib", dan "Penyihir" tampilkan pesan "tapi kayaknya kamu jadi bot aja ya, peran yang kamu pilih ga ada"
 * 
 */
//isi algoritma mu disini (AWAS KALO GA DI ISI!!!!)


let nama = "yanzah", peran = "Anggota DPR";

if (nama === "") {
    console.log("Nama wajib diisi!") 
} else if (peran === "") {
    console.log("Silahkan Pilih peranmu untuk memulai game")
} else if (peran === "Ksatria") {
    console.log(`Hallo Ksatria ${nama}, Kamu dapat menyerang dengan senjatamu!`)
} else if (peran === "Tabib") {
    console.log(`Halo Tabib ${nama}, Kamu akan membantu temanmu yang terluka!`)
} else if (peran === "Penyihir") {
    console.log(`Hallo Penyihir ${nama}, Ciptakan keajaiban yang membantu kemenanganmu!`)
} else {
    console.log(`tapi kayaknya kamu jadi bot aja ya, peran yang kamu pilih ga ada`)
}

//code disini gunakan console.log untuk outputnya