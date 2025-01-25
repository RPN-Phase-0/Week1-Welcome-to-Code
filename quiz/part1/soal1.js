// ## Soal 1:
// ```js
// // Kamu diminta untuk memprogram suatu game sederhana, Proxytia namanya. 
// // Untuk memulai game itu diperlukan 2 variabel (untuk sekarang), 
// // yaitu nama dan peran. Variabel peran harus memiliki isi data, 
// // bila nama kosong, pemain akan diberikan peringatan berupa "nama wajib diisi"
// // bila kosong pemain akan diberikan peringatan berupa "Pilih Peranmu untuk memulai game". 
// // Terdapat 3 peran berbeda yaitu Ksatria, Tabib, dan Penyihir. 
// // Tugas Anda adalah untuk membuat program yang mengecek isi variabel 
// // peran serta mengeluarkan respon sesuai isi variabel tersebut.
// //ada 4 jenis respons sesuai dengan 3 jenis peran yaitu
// //halo Ksatria ${nama} , kamu dapat menyerang dengan senjatamu!
// //halo Tabib ${nama} , kamu akan membantu temanmu yang terluka
// //halo Penyihir ${nama} , ciptakan keajaiban yang membantu kemenanganmu!
// //tapi kayaknya kamu jadi bot aja ya, peran yang kamu pilih ga ada
// //tips belajar penggunaan `` (backtick) pada javascript agar
// //mudah dalam memasukan variabel ke dalam string
// //tapi tanpa backtick juga ga masalah sih yg penting output sesuai

// algoritma
/**
 * Masukan nama dan peran
 * jika nama kosong tampilakan pesan "Nama wajib diisi"
 * jika nama tidak kosong, kemudian periksa peran
 * jika peran kosong tampilkan pesan "Pilih peranmu untuk memulai game"
 * jika peran tidak kosong, periksa isi peran
 * jika isi peran adalah Ksatria, tampilkan "Halo Ksatria <nama> kamu dapat meyerang dengan senjatamu!"
 * jika isi peran adalah Tabib, Tampilkan "Halo Tabib <nama> Kamu akan membantu temanmu yang terluka"
 * jika isi peran adalah Penyihir, Tampilkan "Halo Penyihir <nama> Ciptakan keajaiban yang membentu kemenangan!"
 * jika peran tidak sesuai, Tampilkan "tapi kayaknya kamu jadi bot aja ya, peran yang kamu pilih ga ada"
 * selesai
 */
//isi algoritma mu disini (AWAS KALO GA DI ISI!!!!)


let nama = "shan", peran = "Tabib";

if(!nama) {
    console.log("Nama wajib diisi")
} else if(!peran) {
    console.log("Pilih peranmu untuk memulai game.")
} else {
    if(peran == "Ksatria") {
        console.log(`halo Ksatria ${nama} , kamu dapat menyerang dengan senjatamu!`)
    } else if(peran == "Tabib") {
        console.log(`halo Tabib ${nama} , Kamu akan membantu temanmu yang terluka`)
    } else if(peran == "Penyihir") {
        console.log(`halo Penyihir ${nama} , Ciptakan Keajaiban yang akan membantu kemenangan!`)
    } else {
        console.log("Tapi kayaknya kamu jadi bot aja ya, peran yang kamu pilih ga ada.")
    }
}

//code disini gunakan console.log untuk outputnya


