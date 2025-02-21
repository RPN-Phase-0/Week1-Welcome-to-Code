let nama = "test",
  peran = "Ksatria";

//code disini gunakan console.log untuk outputnya
if (nama === "") {
  console.log("nama wajib di isi");
} else if (peran === "") {
  console.log("Pilih Peranmu untuk memulai game");
} else if (peran === "Ksatria") {
  console.log(`halo ksatria ${nama},kamu dapat menyerang dengan senjatamu`);
} else if (peran === "tabib") {
  console.log(`halo tabib ${nama},kamu akan membantu temanmu yang terluka`);
} else if (peran === "penyihir") {
  console.log(
    `halo penyihir ${nama},ciptakan keajaiban yang membantu kemenanganmu`
  );
} else {
  console.log(
    `halo ${nama},kaya nya kamu jadi bot aja ya,peran yang kamu pilih tidak ada atau tidak terdaftar `
  );
}
