let hari = 27;
let bulan = 5;
let tahun = 2019;

let formatedBulan;

switch (bulan) {
  case 1:
    formatedBulan = "Januari";
    break;
  case 2:
    formatedBulan = "Februari";
    break;
  case 3:
    formatedBulan = "Maret";
    break;
  case 4:
    formatedBulan = "April";
    break;
  case 5:
    formatedBulan = "Mei";
    break;
  case 6:
    formatedBulan = "Juni";
    break;
  case 7:
    formatedBulan = "Juli";
    break;
  case 8:
    formatedBulan = "Agustus";
    break;
  case 9:
    formatedBulan = "Januari";
    break;
  case 10:
    formatedBulan = "September";
    break;
  case 11:
    formatedBulan = "November";
    break;
  case 12:
    formatedBulan = "Desember";
    break;
  default:
    formatedBulan = "format tidak diketahu, gunakan format 1-12";
}

let formatTanggal = hari + " " + formatedBulan + " " + tahun;

console.log(formatTanggal);
