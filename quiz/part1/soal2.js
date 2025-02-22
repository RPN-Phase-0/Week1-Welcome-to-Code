// let hari = "Senin";
// switch (hari) {
//     case "Senin":
//         console.log("Awal minggu");
//         break;
//     case "Jumat":
//         console.log("Akhir minggu kerja");
//         break;
//     default:
//         console.log("Hari biasa");
// }

let tanggal = 12; // assign nilai variabel tanggal disini! (dengan angka antara 1 - 31)
let bulan = "februari"; // assign nilai variabel bulan disini! (dengan angka antara 1 - 12)
let tahun = 2001; // assign nilai variabel tahun disini! (dengan angka antara 1900 - 2200)

  switch (bulan) {
    case "januari": console.log(`'${tanggal} januari ${tahun}'`);
    case "februari": console.log(`'${tanggal} februari ${tahun}'`);break;
    case "maret": console.log(`'${tanggal} maret ${tahun}'`);break;
    case "april": console.log(`'${tanggal} april ${tahun}'`);break;
    case "mei": console.log(`'${tanggal} mei ${tahun}'`);break;
    case "juni": console.log(`'${tanggal} juni ${tahun}'`);break;
    case "juli": console.log(`'${tanggal} juli ${tahun}'`);break;
    case "agustus": console.log(`'${tanggal} agustus ${tahun}'`);break;
    case "september": console.log(`'${tanggal} september ${tahun}'`);break;
    case "oktober": console.log(`'${tanggal} okktober ${tahun}'`);break;
    case "november": console.log(`'${tanggal} november ${tahun}'`);break;
    case "desember": console.log(`'${tanggal} desember ${tahun}'`);break;
    default: console.log("bulan tidak diketahui");
  }


