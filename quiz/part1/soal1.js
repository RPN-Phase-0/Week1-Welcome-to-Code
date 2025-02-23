var nama = "Hahaha"
var peran = "Ksatria"

if (nama === "") {
    console.warn("Nama wajib diisi!")
} else {
    if (peran === "") {
        console.warn("Pilih peranmu untuk memulai game! (Ksatria, Tabib, Penyihir)")
    } else {
        switch (peran) {
            case "Ksatria":
                console.log("Halo Ksatria", nama, "kamu dapat menyerang dengan senjatamu!")
                break;
            case "Tabib":
                console.log("Halo Tabib", nama, "kamu akan membantu temanmu yang terluka!")
                break;
            case "Penyihir":
                console.log("Halo Penyihir", nama, "ciptakan keajaiban yang membantu kemenanganmu!")
                break;
            default:
                console.log("Kamu jadi bot aja ya! Peran yang kamu pilih gak ada")
        }
    }
}

