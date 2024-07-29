// Kamu akan diberikan sebuah tanggal dalam tiga variabel, yaitu hari, bulan, dan tahun.
// Disini kamu diminta untuk membuat format tanggal. Misal tanggal yang diberikan adalah hari 1, bulan 5, dan tahun 1945.
// Maka, output yang harus kamu proses adalah menjadi 1 Mei 1945.

// Gunakan switch case untuk kasus ini!

// Contoh:

// let hari = 21; let bulan = 1; let tahun = 1945;

// Maka hasil yang akan tampil di console adalah: '21 Januari 1945';

//tips gunakan keyword ini di google "conditional switch case javascript"
//dan mulailah membaca dan mencontek di stackoverflow xixixi

// algoritma
/**
 * * Membuat variabel hari, bulan, tahun sesuai data yang di tetapkan;
 * ! Logic start
 * * pengecekan tanggal harus antara 1 - 31, jika tidak akan muncul "Tanggal harus di input antara 1 - 31"
 * * pengecekan tahun harus antara 1900 - 2200, jika tidak akan muncul "Tahun harus di input antara 1990 - 2200"
 * * pengecekan bulan menggunakan switch-case akan melakukan convert menjadi string
 * * ada nilai default jika tidak antara 1 - 12, akan muncul "Bulan antara 1 - 12"
 * * selanjutnya jika variabel Bulan nya valid akan mencetak sesuai Format `${tanggal} ${bulan} ${tahun}`
 * ! Selesai
 */

let tanggal = 12; // assign nilai variabel tanggal disini! (dengan angka antara 1 - 31)
let bulan = 12; // assign nilai variabel bulan disini! (dengan angka antara 1 - 12)
let tahun = 2001; // assign nilai variabel tahun disini! (dengan angka antara 1900 - 2200)

if (tanggal < 1 || tanggal > 31)
  console.log("Tanggal harus di input antara 1 - 31");
else if (tahun < 1900 || tahun > 2200)
  console.log("Tahun harus di input antara 1990 - 2200");
else {
  switch (bulan) {
    case 1:
      bulan = "januari";
      break;
    case 2:
      bulan = "februari";
      break;
    case 3:
      bulan = "maret";
      break;
    case 4:
      bulan = "april";
      break;
    case 5:
      bulan = "mei";
      break;
    case 6:
      bulan = "juni";
      break;
    case 7:
      bulan = "juli";
      break;
    case 8:
      bulan = "agustus";
      break;
    case 9:
      bulan = "september";
      break;
    case 10:
      bulan = "october";
      break;
    case 11:
      bulan = "november";
      break;
    case 12:
      bulan = "december";
      break;
    default:
      bulan = null;
      console.log("Bulan antara 1 - 12");
      break;
  }

  if (bulan) console.log(`${tanggal} ${bulan} ${tahun}`);
}
