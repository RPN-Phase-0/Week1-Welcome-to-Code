// Input variabel
let nama = "";
let peran = " "; 

function proxytiaGames(nama, peran){
  if (nama === "") {
  console.error("Nama wajib diisi.");
} else { 
  if (peran === "") {
    console.erorr("Pilih Peranmu untuk memulai game.");
  } else {
    console.log("Selamat datang di Dunia Proxytia, " + nama);
    if (peran === "Ksatria") {
      console.log("Halo Ksatria " + nama + ", kamu dapat menyerang dengan senjatamu!");
    } else if (peran === "Tabib") {
      console.log("Halo Tabib " + nama + ", kamu akan membantu temanmu yang terluka!");
    } else if (peran === "Penyihir") {
      console.log("Halo Penyihir " + nama + ", ciptakan keajaiban yang membantu kemenanganmu!");
    } else {
      console.log("Tapi kayaknya kamu jadi bot aja ya, peran yang kamu pilih ga ada.");
    }
  }
}
}
console.log(proxytiaGames("Daniel", "Ksatria"));




