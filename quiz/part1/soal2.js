var tanggal = 9;
var bulan = 10;
var tahun = 2000;

if ((tanggal >= 1 && tanggal <= 31) && (bulan >= 1 && bulan <= 12) && (tahun >= 1900 && tahun <= 2200)) {
    switch(bulan) {
        case 1:
            bulan = "Januari"
            break;
        case 2:
            bulan = "Februari"
            break;
        case 3:
            bulan = "Maret"
            break;
        case 4:
            bulan = "April"
            break;
        case 5:
            bulan = "Mei"
            break;
        case 6:
            bulan = "Juni"
            break;
        case 7:
            bulan = "Juli"
            break;
        case 8:
            bulan = "Agustus"
            break;
        case 9:
            bulan = "September"
            break;
        case 10:
            bulan = "Oktober"
            break;
        case 11:
            bulan = "November"
            break;
        default:
            bulan = "Desember"
    }

    console.log(tanggal, bulan, tahun)
}
