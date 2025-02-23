let nama = "";
let peran = " ";

function proxytiaGames(nama, peran) {
  // mengecek apakah namanya di sisi atau tidak
  if (nama === "") {
    console.error("Nama wajib diisi.");
  } else {
    // mengecek apakah peranya di sisi atau tidak
    if (peran === "") {
      console.erorr("Pilih Peranmu untuk memulai game.");
    } else {
      // menampilkan pilihan peran
      if (peran === "Ksatria") {
        console.log(
          `Halo Ksatria ${nama}, kamu dapat menyerang dengan senjatamu!`
        );
      } else if (peran === "Tabib") {
        console.log(
          `Halo Tabib ${nama}, kamu akan membantu temanmu yang terluka!`
        );
      } else if (peran === "Penyihir") {
        console.log(
          `Halo Penyihir ${nama}, ciptakan keajaiban yang membantu kemenanganmu!`
        );
      } else {
        // jika peranya tidak di sisi menjadi bot
        console.log(
          `${nama} Tapi kayaknya kamu jadi bot aja ya, peran yang kamu pilih ga ada.`
        );
      }
    }
  }
}
console.log(proxytiaGames("Ulum", "Ksatria"));
