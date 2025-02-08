
// SOAL NOMOR 1 
console.log("--- Welcome to the Proxytia ---");


const nama = "Hanif";
const peran = "Penyihir";

function startGame() { 
  if (!(nama === "")) {
    console.log(`Halo ${nama} selamat datang di Proxytia`)
  } else {
    return console.log("Nama wajib diisi!")
  }
  if (!(peran === "")) {
    switch (peran) {
      case 'Ksatria':
        console.log(`Halo ${nama} , kamu dapat menyerang dengan pedang mu!`);
        break;
      case 'Tabib':
        console.log(`halo Tabib ${nama} , kamu akan membantu temanmu yang terluka`);
        break;
      case 'Penyihir':
        console.log(`halo Penyihir ${nama} , ciptakan keajaiban yang membantu kemenanganmu!`);
        break;
      default:
        console.log("tapi kayaknya kamu jadi bot aja ya, peran yang kamu pilih ga ada")
    }
  } else {
    console.log("Pilih Peranmu untuk memulai game")
  }
  
}
startGame()

// SOAL NOMOR 2

let tanggal = 11;
let bulan = 12;
let tahun = 2023;


switch (bulan) {
  case 1:
    console.log(`${tanggal} Januari ${tahun}`);
    break
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
    console.log("Masukkan input bulan yang sesuai!")
}


