// Kamu diminta untuk memprogram suatu game sederhana, Proxytia namanya. 
// Untuk memulai game itu diperlukan 2 variabel (untuk sekarang), 
// yaitu nama dan peran. Variabel peran harus memiliki isi data, 
// bila nama kosong, pemain akan diberikan peringatan berupa "nama wajib diisi"
// bila kosong pemain akan diberikan peringatan berupa "Pilih Peranmu untuk memulai game". 
// Terdapat 3 peran berbeda yaitu Ksatria, Tabib, dan Penyihir. 
// Tugas Anda adalah untuk membuat program yang mengecek isi variabel 
// peran serta mengeluarkan respon sesuai isi variabel tersebut.
//ada 4 jenis respons sesuai dengan 3 jenis peran yaitu
//Halo Ksatria ${nama}, kamu dapat menyerang dengan senjatamu!
//halo Tabib ${nama} , kamu akan membantu temanmu yang terluka
//halo Penyihir ${nama} , ciptakan keajaiban yang membantu kemenanganmu!
//tapi kayaknya kamu jadi bot aja ya, peran yang kamu pilih ga ada
//tips belajar penggunaan `` (backtick) pada javascript agar
//mudah dalam memasukan variabel ke dalam string
//tapi tanpa backtick juga ga masalah sih yg penting output sesuai

// algoritma
//1. user disuruh buat ingame name / IGN (anjay)
//2. kalo user ga buat IGN dipaksa sama sistem buat masukin nama
//3. ketika user sudah buat IGN, user disuruh milih role yang sudah disediakan oleh sistem
//4. saat user memilih role yang benar maka game akan berjalan
//5. saat user tidak memilih role yang benar maka game akan user disuruh jadi bot:v 
//isi algoritma mu disini (AWAS KALO GA DI ISI!!!!)

let nama = prompt('masukan nama');

//jika nama kosong
if(nama === '') {
    nama = prompt('nama wajib di isi'); 
};

let peran = prompt('pilih peran mu! Ksatria, Tabib, dan Penyihir');

//Respons peran
if(peran === 'ksatria' || peran === 'Ksatria') {
    alert('Halo Ksatria ' + nama + ', kamu dapat menyerang dengan senjatamu!');
} else if (peran === 'tabib' || peran === 'Tabib') {
    alert('halo Tabib ' + nama + ', kamu akan membantu temanmu yang terluka');
} else if (peran === 'penyihir' || peran === 'Penyihir') {
    alert('halo Penyihir ' + nama + ', ciptakan keajaiban yang membantu kemenanganmu!');
} else {
    alert('tapi kayaknya kamu jadi bot aja ya, peran yang kamu pilih ga ada');
};

// let nama = "", peran = "";

//code disini gunakan console.log untuk outputnya



