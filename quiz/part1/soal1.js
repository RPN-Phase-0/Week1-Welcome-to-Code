//soal 1
const prompt = require("prompt-sync")();

let nama = prompt(`Masukkan Nama: `);
let peran = prompt(`Masukkan Peran: `);
if(nama === "") console.log("Nama Wajib Di isi");
else if(peran === "") console.log("Pilih peran mu!");

//if(peran === "Ksatria") console.log(`Halo ${peran} ${nama}, Kamu dapat menyerang dengan Senjatamu`);
switch(peran){
    case "Ksatria":
        console.log(`Halo ${peran} ${nama}, Kamu dapat menyerang dengan Senjatamu`);
        break;
    case "Tabib":
        console.log(`halo ${peran} ${nama}, Kamu akan membantu temanmu yang terluka`);
    case "Penyihir":
        console.log(`halo ${peran} ${nama} , ciptakan keajaiban yang membantu kemenanganmu!`);
    default: console.log(`tapi kayaknya kamu jadi bot aja ya, peran yang kamu pilih ga ada`);
}