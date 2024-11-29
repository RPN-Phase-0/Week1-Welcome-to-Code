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

/* 
1. Buat 2 variabel Terlebih Dahulu, Yang Berisikan Nama Dan Perannya menggunakan let;
2. Gunakan If Else, Untuk Validasi Jika User Tidak Mengisi Nama maka akan menampilkan "Nama Wajib Diisi"
3. Gunakan If Else juga, untuk validasi peran jika user tidak mengisi Peran maka akan menampilkan "Pilih Peranmu untuk memulai game"
4. Gunakan If Else dan Else If, untuk validasi tentang memilih peran berbeda yaitu Ksatria, Tabib dan Penyihir -> Jadi Ketika salah satu peran terpilih maka akan menampilkan sesuai responnya
    - Ksatria : `halo Ksatria ${nama}, Kamu Dapat Menyerang Dengan Senjatamu dan Menahan Segala Serangan! `

    - Tabib : `halo Tabib ${nama} , Kamu Dapat Membantu Temanmu Yang Sedang Terluka!`

    - Penyihir : `halo Penyihir ${nama} , Kamu Bisa Mengeluarkan Sihir Paling Keren Sedunia dan Mengalahkan Musuh dengan Mudah`

    - Jika Tidak Memilih : tapi kayaknya kamu jadi bot aja ya, peran yang kamu pilih ga ada
5. Bisa gunakan Switch Case juga pada validasi peran
*/

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

// switch(peran) {
//   case "Ksatria":
//     console.log(`Halo Ksatria ${nama}, Kamu Dapat Menyerang Dengan Senjatamu dan Menahan Segala Serangan`);
//     break;
//   case "Tabib":
//     console.log(`Halo Tabib ${nama}, Kamu Dapat Membantu Temanmu Yang Sedang Terluka!`);
//     break;
//   case "Penyihir":
//     console.log(`Halo Penyihir ${nama}, Kamu Bisa Mengeluarkan Sihir Paling Keren Sedunia dan Mengalahkan Musuh dengan Mudah`);
//     break;
//   default:
//     console.log(`${nama} tapi kayaknya kamu jadi bot aja ya, peran yang kamu pilih ga ada`);
//     break;
// }
