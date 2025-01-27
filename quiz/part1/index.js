
/**
 * SOAL 1
 */

let nama = "";
let peran = "Ksatria";

if(nama === ""){
  console.log("nama wajib diisi");
}else if(peran === ""){
  console.log("Pilih Peranmu untuk memulai game");
} else{

  // respon peran
  if(peran === "Ksatria"){
    console.log(`halo Ksatria ${nama} , kamu dapat menyerang dengan senjatamu!`);
  }else if(peran === "Tabib"){
    console.log(`halo Tabib ${nama} , kamu akan membantu temanmu yang terluka`);
  }else if(peran === "Penyihir"){
    console.log(`halo Penyihir ${nama} , ciptakan keajaiban yang membantu kemenanganmu!`);
  }else {
    console.log("tapi kayaknya kamu jadi bot aja ya, peran yang kamu pilih ga ada");
  };
};






/**
 * SOAL 2
 */

let hari = 22;
let bulan = 12;
let tahun = 2022;

switch(bulan){
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
    bulan= "Juli";
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
    console.log("Salah Input");  
    bulan = null; 
    break;
};

if (bulan !== null){
  console.log(`Alice in Borderlan rilis pada tanggal ${hari} ${bulan} ${tahun}`);
};

