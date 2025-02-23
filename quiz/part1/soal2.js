let hari = 27;
let bulan = 02;
let tahun = 2019;

let formatedBulan;

switch (bulan) {
  case 01:
    formatedBulan = "Januari";
    break;
  case 02:
    formatedBulan = "Februari";
    break;
  case 03:
    formatedBulan = "Maret";
    break;
  case 04:
    formatedBulan = "April";
    break;
  case 05:
    formatedBulan = "Mei";
    break;
  case 06:
    formatedBulan = "Juni";
    break;
  case 07:
    formatedBulan = "Juli";
    break;
  case 08:
    formatedBulan = "Agustus";
    break;
  case 09:
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
