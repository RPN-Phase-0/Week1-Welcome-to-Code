// Kamu akan diberikan sebuah tanggal dalam tiga variabel, yaitu hari, bulan, dan tahun. Disini kamu diminta untuk membuat format tanggal. Misal tanggal yang diberikan adalah hari 1, bulan 5, dan tahun 1945. Maka, output yang harus kamu proses adalah menjadi 1 Mei 1945.

// Gunakan switch case untuk kasus ini!

// Contoh:

// let hari = 21; let bulan = 1; let tahun = 1945;

// Maka hasil yang akan tampil di console adalah: '21 Januari 1945';

//tips gunakan keyword ini di google "conditional switch case javascript"
//dan mulailah membaca dan mencontek di stackoverflow xixixi

let tanggal = 12; // assign nilai variabel tanggal disini! (dengan angka antara 1 - 31)
let bulan = 1; // assign nilai variabel bulan disini! (dengan angka antara 1 - 12)
let tahun = 2001; // assign nilai variabel tahun disini! (dengan angka antara 1900 - 2200)

//code switch case kamu disini

switch(bulan) {
    case 1 :
        bulan = "januari";
        console.log(`${tanggal} ${bulan} ${tahun}`);
        break;
    case 2 :
        bulan = "februari";
        console.log(`${tanggal} ${bulan} ${tahun}`);
        break;
    case 3 :
        bulan = "maret";
        console.log(`${tanggal} ${bulan} ${tahun}`);
        break;
    case 4 :
        bulan = "april";
        console.log(`${tanggal} ${bulan} ${tahun}`);
        break;
    case 5 :
        bulan = "mei";
        console.log(`${tanggal} ${bulan} ${tahun}`);
        break;
    case 6 :
        bulan = "juni";
        console.log(`${tanggal} ${bulan} ${tahun}`);
        break;
    case 7 :
        bulan = "juli";
        console.log(`${tanggal} ${bulan} ${tahun}`);
        break;
    case 8 :
        bulan = "agustus";
        console.log(`${tanggal} ${bulan} ${tahun}`);
        break;
    case 9 :
        bulan = "september";
        console.log(`${tanggal} ${bulan} ${tahun}`);
        break;
    case 10 :
        bulan = "oktober";
        console.log(`${tanggal} ${bulan} ${tahun}`);
        break;
    case 11 :
        bulan = "november";
        console.log(`${tanggal} ${bulan} ${tahun}`);
        break;
    case 12 :
        bulan = "desember";
        console.log(`${tanggal} ${bulan} ${tahun}`);
        break;
    default :
    console.log("masukan bulan 1-12");
}