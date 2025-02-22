// Kamu akan diberikan sebuah tanggal dalam tiga variabel, yaitu hari, bulan, dan tahun. Disini kamu diminta untuk membuat format tanggal. Misal tanggal yang diberikan adalah hari 1, bulan 5, dan tahun 1945. Maka, output yang harus kamu proses adalah menjadi 1 Mei 1945.

// Gunakan switch case untuk kasus ini!

// Contoh:

// let hari = 21; let bulan = 1; let tahun = 1945;

// Maka hasil yang akan tampil di console adalah: '21 Januari 1945';

//tips gunakan keyword ini di google "conditional switch case javascript"
//dan mulailah membaca dan mencontek di stackoverflow xixixi

let hari = 20;
let bulan = 200;
let tahun = 2000;

switch(bulan) {
    case 1:
        console.log(`${hari} Januari ${tahun}`);
    break;
    case 2: 
        console.log(`${hari} Februari ${tahun}`);
    break;
    case 3: 
        console.log(`${hari} Maret ${tahun}`);
    break;
    case 4: 
        console.log(`${hari} April ${tahun}`);
    break;
    case 5: 
        console.log(`${hari} Mei ${tahun}`);
    break;
    case 6: 
        console.log(`${hari} Juni ${tahun}`);
    break;
    case 7: 
        console.log(`${hari} Juli ${tahun}`);
    break;
    case 8: 
        console.log(`${hari} Agustus ${tahun}`);
    break;
    case 9: 
        console.log(`${hari} September ${tahun}`);
    break;
    case 10: 
        console.log(`${hari} Oktober ${tahun}`);
    break;
    case 11: 
        console.log(`${hari} November ${tahun}`);
    break;
    case 12: 
        console.log(`${hari} Desember ${tahun}`);
    break;
    default :
        console.log("Bulan tidak valid");
    
}