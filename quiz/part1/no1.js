//NO 1
let nama = "Gilang", peran = "Ksatria";
if(nama === "" || nama === null){
    console.log("Nama wajib diisi!")
} else if (peran === "" || peran === null){
    console.log("Pilih peranmu untuk memulai game!")
} else {
    if (peran.toLowerCase() == "ksatria"){
        console.log(`Ksatria ${nama}, kamu dapat menyerang dengan senjatamu!`)
    } else if (peran.toLowerCase() == "tabib"){
        console.log(`halo Tabib ${nama} , kamu akan membantu temanmu yang terluka`)
    } else if (peran.toLowerCase() == "penyihir"){
        console.log(`halo Penyihir ${nama} , ciptakan keajaiban yang membantu kemenanganmu!`)
    } else {
        console.log("tapi kayaknya kamu jadi bot aja ya, peran yang kamu pilih ga ada")
    };
}