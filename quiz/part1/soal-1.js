// Proxytia

let nama = "andika", peran = "Tabib";

if(!nama) {
    return console.log('nama wajib diisi!');
} else if(!peran) {
    return console.log('Pilih Peranmu untuk memulai game');
}

if(peran === 'Ksatria') {
    return console.log(`halo Ksatria ${nama} , kamu dapat menyerang dengan senjatamu!`);
} else if(peran === 'Tabib') {
    return console.log(`halo Tabib ${nama} , kamu akan membantu temanmu yang terluka`);
} else if(peran === 'Penyihir') {
    return console.log(`halo Penyihir ${nama} , ciptakan keajaiban yang membantu kemenanganmu!`);
} else {
    return console.log("tapi kayaknya kamu jadi bot aja ya, peran yang kamu pilih ga ada")
}