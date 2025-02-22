// proxytia start
let nama = "Naufal", peran = "Kesatria";

if (nama === "") {
    console.log("nama harus diisi!");
}
if (peran === "") {
    console.warn("Pilih Peranmu untuk memulai game");
}
function CekPeran() {
    if (peran === "Kesatria") {
        console.log(`halo Ksatria ${nama}, kamu dapat menyerang dengan senjatamu!`);
    }else if(peran === "Tabib"){
        console.log(`halo Tabib ${nama} , kamu akan membantu temanmu yang terluka`);
    }else if(peran === "Penyihir"){
        console.log(`halo Penyihir ${nama} , ciptakan keajaiban yang membantu kemenanganmu!`);
    }else{
        console.log(`lu jadi bot ajadah ${nama}, gak pilih peran soalnya`)
    }
    return peran;
}
CekPeran();