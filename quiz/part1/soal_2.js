//  Soal 2

// Kamu akan diberikan sebuah tanggal dalam tiga variabel, yaitu hari, bulan, dan tahun. 
// Disini kamu diminta untuk membuat format tanggal. 
// Misal tanggal yang diberikan adalah hari 1, bulan 5, dan tahun 1945. Maka, 
// output yang harus kamu proses adalah menjadi 1 Mei 1945.

// Gunakan switch case untuk kasus ini!

// Contoh:

// let hari = 21; let bulan = 1; let tahun = 1945;

// Maka hasil yang akan tampil di console adalah: '21 Januari 1945';

//tips gunakan keyword ini di google "conditional switch case javascript"
//dan mulailah membaca dan mencontek di stackoverflow xixixi

let tanggal = 1; // assign nilai variabel tanggal disini! (dengan angka antara 1 - 31)
let bulan = 13; // assign nilai variabel bulan disini! (dengan angka antara 1 - 12)
let tahun = 2007; // assign nilai variabel tahun disini! (dengan angka antara 1900 - 2200)

switch (bulan) {
    case 1:
        console.log(`${tanggal} Jan ${tahun}`);
        break;
    case 2:
        console.log(`${tanggal} Feb ${tahun}`);
        break;
    case 3:
        console.log(`${tanggal} Mart ${tahun}`);
        break;
    case 4:
        console.log(`${tanggal} Apr ${tahun}`);
        break;
    case 5:
        console.log(`${tanggal} Mei ${tahun}`);
        break;
    case 6:
        console.log(`${tanggal} Jun ${tahun}`);
        break;
    case 7:
        console.log(`${tanggal} Jul ${tahun}`);
        break;
    case 8:
        console.log(`${tanggal} Agst ${tahun}`);
        break;
    case 9:
        console.log(`${tanggal} Sept ${tahun}`);
        break;
    case 10:
        console.log(`${tanggal} Okt ${tahun}`);
        break;
    case 11:
        console.log(`${tanggal} Nov ${tahun}`);
        break;
    case 12:
        console.log(`${tanggal} Des ${tahun}`);
        break;
        default: console.log('bulan apa itu hei')

    
        
}
//code switch case kamu disini
