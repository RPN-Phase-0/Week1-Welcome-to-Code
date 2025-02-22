let nama = "Harry";
let roles = ["master php(pemberi harapan palsu)", "pemburu janda muda", "Pemikat Istri orang Lain"];
let peran = roles[Math.floor(Math.random() * roles.length)]; // Pilih peran secara acak
let tanggal = Math.floor(Math.random() * 31) + 1;
let bulan = Math.floor(Math.random() * 12) + 1;
let tahun = Math.floor(Math.random() * (2200 - 1900 + 1)) + 1900;

let namaBulan;

switch (bulan) {
    case 1: namaBulan = "Januari"; break;
    case 2: namaBulan = "Februari"; break;
    case 3: namaBulan = "Maret"; break;
    case 4: namaBulan = "April"; break;
    case 5: namaBulan = "Mei"; break;
    case 6: namaBulan = "Juni"; break;
    case 7: namaBulan = "Juli"; break;
    case 8: namaBulan = "Agustus"; break;
    case 9: namaBulan = "September"; break;
    case 10: namaBulan = "Oktober"; break;
    case 11: namaBulan = "November"; break;
    case 12: namaBulan = "Desember"; break;
}

console.log(`Nama: ${nama}`);
console.log(`Role: ${peran}`);
console.log(`Tanggal: ${tanggal} ${namaBulan} ${tahun}`);
