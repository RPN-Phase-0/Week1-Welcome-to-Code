let tanggal = 12;
let bulan = 1;
let tahun = 2001;
let month = ''

switch (bulan) {
    case 1: month = 'Januari'; break;
    case 2: month = 'Februari'; break;
    case 3: month = 'Maret'; break;
    case 4: month = 'April'; break;
    case 5: month = 'Mei'; break;
    case 6: month = 'Juni'; break;
    case 7: month = 'Juli'; break;
    case 8: month = 'Agustus'; break;
    case 9: month = 'September'; break;
    case 10: month = 'Oktober'; break;
    case 11: month = 'November'; break;
    case 12: month = 'Desember'; break;
    default: console.log(`Bulan invalid`);
}

if (tanggal < 1 || tanggal > 31) {
    console.log('Tanggal invalid');
} else if (tahun < 1900 || tahun > 2200) {
    console.log('Tahun invalid');
} else {
    console.log(`${tanggal} ${month} ${tahun}`);
}

