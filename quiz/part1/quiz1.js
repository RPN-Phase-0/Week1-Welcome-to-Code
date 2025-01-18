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

    // NO 2 
let tanggal = 18;
let bulan =  1;
let tahun = 2025;

switch (bulan) {
    case 1:
        console.log(`${tanggal} Januari ${tahun}`);
        break;
    case 2:
        console.log(`${tanggal} Februari ${tahun}`);
        break;
    case 3:
        console.log(`${tanggal} Maret ${tahun}`);
        break;
    case 4:
        console.log(`${tanggal} April ${tahun}`);
        break;
    case 5:
        console.log(`${tanggal} Mei ${tahun}`);
        break;
    case 6:
        console.log(`${tanggal} Juni ${tahun}`);
        break;
    case 7:
        console.log(`${tanggal} Juli ${tahun}`);
        break;
    case 8:
        console.log(`${tanggal} Agustus ${tahun}`);
        break;
    case 9:
        console.log(`${tanggal} September ${tahun}`);
        break;
    case 10:
        console.log(`${tanggal} Oktober ${tahun}`);
        break;
    case 11:
        console.log(`${tanggal} November ${tahun}`);
        break;
    case 12:
        console.log(`${tanggal} Desember ${tahun}`);
        break;
    default:
        console.log("Bulan tidak valid");
}
