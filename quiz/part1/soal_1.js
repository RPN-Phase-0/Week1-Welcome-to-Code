let nama = "jaka";
let peran = "Penyihir";

if(nama === ""){
    console.warn("Nama wajib diisi");
}

if(peran === "") {
    console.warn("Pilih peranmu untuk memulai");
    } else if(peran === "Ksatria"){
        console.log(`Halo Ksatria ${nama}, kamu dapat menyerang dengan senjatamu !`)
    }else if(peran === "Tabib"){
        console.log(`Halo Tabib ${nama}, kamu akan membantu temanmu yang terluka`)
    }else if(peran === "Penyihir"){
        console.log(`Halo Penyihir ${nama}, ciptakan keajaiban yang membantu kemnenanganmu`)
    }else{
        console.log(`Tapi kayaknya kamu jadi bot aja ya, peran yang kamu pilih aja gak ada`)
}