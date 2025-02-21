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
//1. CEK apakah nama kosong, jika nama kosong kode akan mengeluarkan peringatan "nama wajib diisi" dan program akan berhenti
//2. CEK apakah peran kosong, jika peran kosong kode akan mengeluarkan peringatan "Pilih Peranmu untuk memulai game"
//3. CEK apakah peran yang dipilih adalah Ksatria, jika iya maka program akan mengeluarkan pesan "halo Ksatria ${nama} , kamu dapat menyerang dengan senjatamu!"
//4. CEK apakah peran yang dipilih adalah Tabib, jika iya maka program akan mengeluarkan pesan "halo Tabib ${nama} , kamu akan membantu temanmu yang terluka"
//5. CEK apakah peran yang dipilih adalah Penyihir, jika iya maka program akan mengeluarkan pesan "halo Penyihir ${nama} , ciptakan keajaiban yang membantu kemenanganmu!"
//6. Jika peran yang dipilih tidak ada dalam 3 peran yang ada, maka program akan mengeluarkan pesan "tapi kayaknya kamu jadi bot aja ya, peran yang kamu pilih ga ada"

let nama = "Zitoo",
  peran = "Tabib";

if (nama === "") {
  console.error("nama wajib diisi");
} else {
  if (peran === "") {
    console.warn("Pilih Peranmu untuk memulai game");
    console.log("==================================");
  }

  if (peran === "Ksatria") {
    console.log(
      `halo Ksatria ${nama} , kamu dapat menyerang dengan senjatamu!`
    );
  } else if (peran === "Tabib") {
    console.log(`halo Tabib ${nama} , kamu akan membantu temanmu yang terluka`);
  } else if (peran === "Penyihir") {
    console.log(
      `halo Penyihir ${nama} , ciptakan keajaiban yang membantu kemenanganmu!`
    );
  } else {
    console.log(
      "tapi kayaknya kamu jadi bot aja ya, peran yang kamu pilih ga ada"
    );
  }
}
