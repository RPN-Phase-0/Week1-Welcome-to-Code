// NO 1
let nama = "joanita";
let peran = "tabib";

    if (nama === "") {
        console.warn("Peringatan: Nama wajib diisi");

    } else if(peran === "") {
        console.warn("Peringatan: Pilih Peranmu untuk memulai game");
    } else{
        switch (peran) {
            case "Ksatria":
            case "ksatria":
                console.log(`Halo Ksatria ${nama}, kamu dapat menyerang dengan senjatamu!`);
                break;
            case "Tabib":
            case "tabib":
                console.log(`Halo Tabib ${nama}, kamu akan membantu temanmu yang terluka`);
                break;
            case "Penyihir":
            case "penyihir":
                console.log(`Halo Penyihir ${nama}, ciptakan keajaiban yang membantu kemenanganmu!`);
                break;
            default:
                peran = "tapi kayaknya kamu jadi bot aja ya, peran yang kamu pilih ga ada"; // Reset peran and prompt again
            
        }
    }            
