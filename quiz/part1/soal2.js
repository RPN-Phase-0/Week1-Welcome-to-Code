// Kamu akan diberikan sebuah tanggal dalam tiga variabel, yaitu hari, bulan, dan tahun. Disini kamu diminta untuk membuat format tanggal. Misal tanggal yang diberikan adalah hari 1, bulan 5, dan tahun 1945. Maka, output yang harus kamu proses adalah menjadi 1 Mei 1945.

// Gunakan switch case untuk kasus ini!

// Contoh:

// let hari = 21; let bulan = 1; let tahun = 1945;

// Maka hasil yang akan tampil di console adalah: '21 Januari 1945';

//tips gunakan keyword ini di google "conditional switch case javascript"
//dan mulailah membaca dan mencontek di stackoverflow xixixi

let tanggal = parseInt(prompt('masukan tanggal')); // assign nilai variabel tanggal disini! (dengan angka antara 1 - 31)
let bulan = prompt('masukan angka bulan'); // assign nilai variabel bulan disini! (dengan angka antara 1 - 12)
let tahun = parseInt(prompt('masukan tahun')); // assign nilai variabel tahun disini! (dengan angka antara 1900 - 2200)


//code switch case kamu disini
switch (bulan) {
    case '1':
        alert(tanggal + ' Januari ' + tahun);
        break;
    case '2':
        alert(tanggal + ' Februari ' + tahun);
        break;
    case '3':
        alert(tanggal + ' Maret ' + tahun);
        break;
    case '4':
        alert(tanggal + ' April ' + tahun);
        break;
    case '5':
        alert(tanggal + ' Mei ' + tahun);
        break;
    case '6':
        alert(tanggal + ' Juni ' + tahun);
        break;
    case '7':
        alert(tanggal + ' Juli ' + tahun);
        break;
    case '8':
        alert(tanggal + ' Agustus ' + tahun);
        break;
    case '9':
        alert(tanggal + ' September ' + tahun);
        break;
    case '10':
        alert(tanggal + ' Oktober ' + tahun);
        break;
    case '11':
        alert(tanggal + ' November ' + tahun);
        break;
    case '12':
        alert(tanggal + ' Desember ' + tahun);
        break;
    default:
        alert('tidak ada bulan ke yang kebih dari 12!');
}