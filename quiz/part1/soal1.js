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
1. kita siapkan variabel nama dan peran untuk menyimpan inputan user
2. tampilkan peringatan "nama wajib diisi" jika variabel nama kosong, proses akan berhenti sehingga user harus menginput nama
3. tampilkan peringatan "Pilih Peranmu untuk memulai game" jika variabel peran kosong
4. tampilkan pesan "halo Ksatria (nama), kamu dapat menyerang dengan senajtamu!" jika peran = Ksatria
5. tampilkan pesan "halo Tabib (nama), kamu akan membantu temanmu yang terluka" jika peran = Tabib
6. tampilkan pesan "halo Penyihir (nama), ciptakan keajaiban yang membantu kemenanganmu!" jika peran = Penyihir
7. tampilkan pesan "tapi kayaknya kamu jadi bot aja ya, peran yang kamu pilih ga ada" jika peran tidak sama dengan Ksatria, Tabib, dan Penyihir
*/

//code disini gunakan console.log untuk outputnya

let nama = "",
  peran = "";

function proxytia(nama, peran) {
  if (nama === "") {
    return "nama wajib diisi";
  }

  if (peran === "") {
    return "Pilih Peranmu untuk memulai game";
  }

  if (peran === "Ksatria") {
    return "halo Ksatria " + nama + ", kamu dapat menyerang dengan senjatamu";
  } else if (peran === "Tabib") {
    return "halo Tabib " + nama + ", kamu akan membantu temanmu yang terluka";
  } else if (peran === "Penyihir") {
    return (
      "halo Penyihir " +
      nama +
      ", ciptakan keajaiban yang membantu kemenanganmu!"
    );
  } else {
    return "tapi kayaknya kamu jadi bot aja ya, peran yang kamu pilih ga ada";
  }
}

console.log(proxytia("", ""));
console.log(proxytia("", "Ksatria"));
console.log(proxytia("Rover", ""));
console.log(proxytia("Rover", "Ksatria"));
console.log(proxytia("Verina", "Tabib"));
console.log(proxytia("Phoebe", "Penyihir"));
console.log(proxytia("Rover", "Kang Pukul"));
