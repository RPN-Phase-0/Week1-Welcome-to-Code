let nama = "jk", peran = "Ksatria", nama1 = "haha", peran1 = "Tabib", nama2 = "hihi", peran2 = "Penyihir";

if (!nama) {
    console.log("Nama wajib diisi");
} else if (!peran) {
    console.log("Pilih Peranmu untuk memulai game");
} else {
    if (peran === "Ksatria") {
        console.log("Halo Ksatria " + nama + ", kamu dapat menyerang dengan senjatamu!");
    } else if (peran === "Tabib") {
        console.log("Halo Tabib " + nama + ", kamu akan membantu temanmu yang terluka");
    } else if (peran === "Penyihir") {
        console.log("Halo Penyihir " + nama + ", ciptakan keajaiban yang membantu kemenanganmu!");
    } else {
        console.log("Tapi kayaknya kamu jadi bot aja ya, peran yang kamu pilih ga ada");
    }
}

if (!nama1) {
    console.log("Nama wajib diisi");
} else if (!peran1) {
    console.log("Pilih Peranmu untuk memulai game");
} else {
    if (peran1 === "Ksatria") {
        console.log("Halo Ksatria " + nama1 + ", kamu dapat menyerang dengan senjatamu!");
    } else if (peran1 === "Tabib") {
        console.log("Halo Tabib " + nama1 + ", kamu akan membantu temanmu yang terluka");
    } else if (peran1 === "Penyihir") {
        console.log("Halo Penyihir " + nama1 + ", ciptakan keajaiban yang membantu kemenanganmu!");
    } else {
        console.log("Tapi kayaknya kamu jadi bot aja ya, peran yang kamu pilih ga ada");
    }
}

if (!nama2) {
    console.log("Nama wajib diisi");
} else if (!peran2) {
    console.log("Pilih Peranmu untuk memulai game");
} else {
    if (peran2 === "Ksatria") {
        console.log("Halo Ksatria " + nama2 + ", kamu dapat menyerang dengan senjatamu!");
    } else if (peran2 === "Tabib") {
        console.log("Halo Tabib " + nama2 + ", kamu akan membantu temanmu yang terluka");
    } else if (peran2 === "Penyihir") {
        console.log("Halo Penyihir " + nama2 + ", ciptakan keajaiban yang membantu kemenanganmu!");
    } else {
        console.log("Tapi kayaknya kamu jadi bot aja ya, peran yang kamu pilih ga ada");
    }
}
