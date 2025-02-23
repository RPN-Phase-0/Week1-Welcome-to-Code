let tanggal = 15;
let bulan = 1;
let tahun = 1;

let text;
if (tanggal > 31) {
  text = `Tanggal yang kamu masukan salah`;
} else if (tahun < 1900 || tahun > 2200) {
  text = `Tahun yang kamu masukan salah`;
} else {
  switch (bulan) {
    case 1:
      text = `${tanggal} Januari ${tahun}`;
      break;
    case 2:
      text = `${tanggal} Februari ${tahun}`;
      break;
    case 3:
      text = `${tanggal} Maret ${tahun}`;
      break;
    case 4:
      text = `${tanggal} April ${tahun}`;
      break;
    case 5:
      text = `${tanggal} Mei ${tahun}`;
      break;
    case 6:
      text = `${tanggal} Juni ${tahun}`;
      break;
    case 7:
      text = `${tanggal} July ${tahun}`;
      break;
    case 8:
      text = `${tanggal} Agustus ${tahun}`;
      break;
    case 9:
      text = `${tanggal} September ${tahun}`;
      break;
    case 10:
      text = `${tanggal} Oktober ${tahun}`;
      break;
    case 11:
      text = `${tanggal} November ${tahun}`;
      break;
    case 12:
      text = `${tanggal} Desember ${tahun}`;
      break;
    default:
      text = "Bulan yang kamu masukkan tidak ada.";
      break;
  }
}

console.log(text);
