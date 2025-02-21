/* Kamu akan diberikan sebuah tanggal dalam tiga variabel, yaitu hari, bulan, dan tahun. Disini kamu diminta untuk membuat format tanggal. 
Misal tanggal yang diberikan adalah hari 1, bulan 5, dan tahun 1945. Maka, output yang harus kamu proses adalah menjadi 1 Mei 1945. */

// Gunakan switch case untuk kasus ini!

// Contoh:

// let hari = 21; let bulan = 1; let tahun = 1945;

// Maka hasil yang akan tampil di console adalah: '21 Januari 1945';

//tips gunakan keyword ini di google "conditional switch case javascript"
//dan mulailah membaca dan mencontek di stackoverflow xixixi

//algoritma
/*
1. kita siapkan variabel tanggal, bulan, tahun
2. ketika variabel bulan diisi dengan angka 1-12 maka format akan diganti ke nama bulan tsb
3. jika tanggal diluar angka 1 - 31, maka tampilkan error
4. jika tahun diluar angka 1900 - 2200, maka tampilkan error
5. jika bulan diantara januari, maret, mei, juli, agustus, oktober, desember, maka maksimal tanggal adalah 31, jika diluar itu tampilkan error "tanggal tidak valid"
5. jika bulan diantara april, juni, september, november, maka maksimal tanggal adalah 30, jika diluar itu tampilkan error "tanggal tidak valid"
5. jika bulan adalah februari, maka maksimal tanggal adalah 29, jika diluar itu tampilkan error "tanggal tidak valid"
*/

let tanggal = 12; // assign nilai variabel tanggal disini! (dengan angka antara 1 - 31)
let bulan = 2; // assign nilai variabel bulan disini! (dengan angka antara 1 - 12)
let tahun = 2001; // assign nilai variabel tahun disini! (dengan angka antara 1900 - 2200)

//code switch case kamu disini
function formatBulan(tanggal, bulan, tahun) {
  if (tahun < 1900 || tahun > 2200) {
    return "Tahun tidak dapat didefinisikan";
  }

  let tanggalMax;
  switch (bulan) {
    case 1:
    case 3:
    case 5:
    case 7:
    case 8:
    case 10:
    case 12:
      tanggalMax = 31;
      break;
    case 4:
    case 6:
    case 8:
    case 10:
      tanggalMax = 30;
      break;
    case 2:
      tanggalMax = 29;
      break;
    default:
      bulan = "Bulan tidak ditemukan";
  }

  if (tanggal < 1 || tanggal > tanggalMax) {
    return "Tanggal tidak valid";
  }

  switch (bulan) {
    case 1:
      bulan = "Januari";
      break;
    case 2:
      bulan = "Februari";
      break;
    case 3:
      bulan = "Maret";
      break;
    case 4:
      bulan = "April";
      break;
    case 5:
      bulan = "Mei";
      break;
    case 6:
      bulan = "Juni";
      break;
    case 7:
      bulan = "Juli";
      break;
    case 8:
      bulan = "Agustus";
      break;
    case 9:
      bulan = "September";
      break;
    case 10:
      bulan = "Oktober";
      break;
    case 11:
      bulan = "November";
      break;
    case 12:
      bulan = "Desember";
      break;
    default:
      bulan = "Bulan tidak ditemukan";
  }
  return tanggal + " " + bulan + " " + tahun;
}

console.log(formatBulan(12, 2, 2001));
console.log(formatBulan(12, 2, 2201));
console.log(formatBulan(31, 2, 2001));
