let nama = "Yuda";
let peran = "Maling";

if (nama === "" && peran === "") {
  console.log("Isi nama lu coi!");
} else if (nama === "") {
  console.log("Nama harus diisi!");
} else if (peran === "") {
  console.log("Peran harus diisi!");
} else if (peran === "Ksatria") {
  console.log(`Halo Ksatria ${nama}, kamu dapat menyerang dengan senjatamu!`);
} else if (peran === "Tabib") {
  console.log(`Halo Tabib ${nama}, kamu akan membantu temanmu yang terluka`);
} else if (peran === "Penyihir") {
  console.log(`Halo Penyihir ${nama}, ciptakan keajaiban yang membantu kemenanganmu!`);
} else {
  console.log("Kamu jadi bot aja ya, soalnya peranmu gaada cok");
}









// function proxytia(nama, peran) {
//   if (nama === "") {
//     console.log("Nama harus diisi!");
//   } else if (peran === "") {
//     console.log("Peran harus diisi!");
//   } else if (peran === "Ksatria") {
//     console.log(`Selamat datang di Dunia Proxytia, ${nama}`);
//     console.log(`Halo Ksatria ${nama}, kamu dapat menyerang dengan senjatamu!`);
//   } else if (peran === "Tabib") {
//     console.log(`Selamat datang di Dunia Proxytia, ${nama}`);
//     console.log(`Halo Tabib ${nama}, kamu akan membantu temanmu yang terluka.`);
//   } else if (peran === "Penyihir") {
//     console.log(`Selamat datang di Dunia Proxytia, ${nama}`);
//     console.log(`Halo Penyihir ${nama}, ciptakan keajaiban yang membantu kemenanganmu!`);
//   } else {
//     console.log("Kamu jadi bot aja, soalnya peran yang kamu pilih ga ada.");
//   }
// }

// proxytia("Yuda", "Ksatria");
// proxytia("Yuda", "Tabib");
// proxytia("Yuda", "Penyihir");
// proxytia("Yuda", "");
// proxytia("", "Ksatria");
// proxytia("Yuda", "Maling");
