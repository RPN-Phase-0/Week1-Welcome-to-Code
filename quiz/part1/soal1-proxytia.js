const nama = "John Doe";
const peran = " ";

if (nama === "") {
    console.log("Nama wajib diisi!");
} else {
    if (peran === "") {
        console.log("Pilih peranmu untuk memulai game!");
    } else if (peran === "Ksatria") {
        console.log(`Halo Ksatria ${nama}, kamu dapat menyerang dengan senjatamu!`);
    } else if (peran === "Tabib") {
        console.log(`Halo Tabib ${nama}, kamu akan membantu temanmu yang terluka!`);
    } else if (peran === "Penyihir") {
        console.log(`Halo Penyihir ${nama}, ciptakan keajaiban yang membantu kemenanganmu!`);
    } else {
        console.log("Halo NPC!");
    }
}
