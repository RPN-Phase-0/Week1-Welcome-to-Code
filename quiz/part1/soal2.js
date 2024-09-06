let tanggal = 31; // assign nilai variabel tanggal disini! (dengan angka antara 1 - 31)
let bulan = 11; // assign nilai variabel bulan disini! (dengan angka antara 1 - 12)
let tahun = 2001; // assign nilai variabel tahun disini! (dengan angka antara 1900 - 2200)

let bulanName

switch(bulan){
    case 1:
        bulanName = "Januari";
        break;
    case 2: 
        bulanName = "Februari";
        break;
    case 3:
        bulanName = "Maret";
        break;
    case 4:
        bulanName = "April";
        break;
    case 5:
        bulanName = "Mei";
        break;
    case 6:
        bulanName = "Juni";
        break;
    case 7:
        bulanName = "Juli";
        break;
    case 8:
        bulanName = "Agustus";
        break;
    case 9:
        bulanName = "September";
        break;
    case 10:
        bulanName = "Oktober";
        break;
    case 11:
        bulanName = "November";
        break;
    case 12:
        bulanName = "Desember";
        break;
    default:
        bulanName = "Bulan tidak valid";
}

let output = tanggal + " " + bulanName + " " + tahun;

console.log(output);