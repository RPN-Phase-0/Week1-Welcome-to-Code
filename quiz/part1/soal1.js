let nama = "Reza",
  peran = "Ksatria";

if (nama != "" && peran === "Ksatria") {
  console.log(`Halo Ksatria ${nama}, kamu dapat penyerang dengan senjatamu!`);
} else if (nama != "" && peran === "Tabib") {
  console.log(`Halo Tabib ${nama}, kamu akan membantu temanmu yang terluka!`);
} else if (nama != "" && peran === "Penyihir") {
  console.log(
    `Halo Penyihir ${nama}, ciptakan keajaiban untuk membantu kemenanganmu!`
  );
} else if (nama === "") {
  console.warn("Nama Wajib Diisi");
} else {
  console.log("Kamu jadi bot aja deh");
}
