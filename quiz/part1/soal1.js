let nama = "Reza",
  peran = "Penipu";
if (nama === "") {
  console.warn("Nama Wajib Diisi");
}
if (peran === "Ksatria") {
  console.log(`Halo Ksatria ${nama}, kamu dapat penyerang dengan senjatamu!`);
} else if (peran === "Tabib") {
  console.log(`Halo Tabib ${nama}, kamu akan membantu temanmu yang terluka!`);
} else if (peran === "Penyihir") {
  console.log(
    `Halo Penyihir ${nama}, ciptakan keajaiban untuk membantu kemenanganmu!`
  );
} else {
  console.log("Kayaknya kamu jadi bot aja deh, peran kamu tidak ada");
}
