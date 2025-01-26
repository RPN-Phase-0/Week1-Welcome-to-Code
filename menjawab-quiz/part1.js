//PROXYTIA GAMES

let nama =" Dhaffa     ";
let peran = "Tabib"; //3 jenis peran: Ksatria, Tabib & Penyihir

nama = nama.trim();

if (nama === "") {
    console.warn("Namamu wajib diisi!!");
} else {
    console.log(`${nama}! Selamat Datang!!`);
}


if (peran === "") {
    console.warn("Pilih Peranmu untuk memulai game!");
} else if (peran === "Ksatria") {
    console.log(`Hallo ${peran} ${nama}! Kamu dapat menyerang menggunakan senjatamu!`);
}else if (peran === "Tabib") {
    console.log(`Hallo ${peran} ${nama}! Kamu akan membantu temanmu yang terluka!`);
} else if (peran === "Penyihir") {
    console.log(`Hallo ${peran} ${nama}! Ciptakanlah keajaiban yang membantu kemenganganmu!`);
} else {
    console.warn("Tapi kayaknya kamu gak cocok main deh, jadi bot aja yak... PERAN YANG KAMU PILIH TIDAK ADA!");
}


//SOAL KE 2

let hari = 17;
let bulan = 8;
let tahun = 2007;

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
}

let umur = new Date().getFullYear() - tahun;

console.log(`Tanggal lahir kamu : ${hari} ${bulan} ${tahun}, yang artinya umur kamu adalah ${umur} tahun.`);