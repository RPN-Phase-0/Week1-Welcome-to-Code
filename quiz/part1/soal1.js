let nama = "Vhey";
let peran = "ksatria";

if (nama === "") {
  console.log("Nama Wajib Diisi!");
}

if (peran == "ksatria") {
  console.log(`halo Ksatria ${nama} , kamu dapat menyerang dengan senjatamu!`);
} else if (peran == "tabib") {
  console.log(`halo Tabib ${nama} , kamu akan membantu temanmu yang terluka`);
} else if (peran == "penyihir") {
  console.log(
    `halo Penyihir ${nama} , ciptakan keajaiban yang membantu kemenanganmu!`
  );
} else if (peran != "") {
  console.log(
    "tapi kayaknya kamu jadi bot aja ya, peran yang kamu pilih ga ada"
  );
} else {
  console.log("Pilih Peranmu untuk memulai game");
}
