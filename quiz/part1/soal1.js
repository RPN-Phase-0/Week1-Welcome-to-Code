// Kamu diminta untuk memprogram suatu game sederhana, Proxytia namanya. 
// Untuk memulai game itu diperlukan 2 variabel (untuk sekarang), 
// yaitu nama dan peran. Variabel peran harus memiliki isi data, 
// bila nama kosong, pemain akan diberikan peringatan berupa "nama wajib diisi"
// bila kosong pemain akan diberikan peringatan berupa "Pilih Peranmu untuk memulai game". 
// Terdapat 3 peran berbeda yaitu Ksatria, Tabib, dan Penyihir. 
// Tugas Anda adalah untuk membuat program yang mengecek isi variabel 
// peran serta mengeluarkan respon sesuai isi variabel tersebut.
//ada 4 jenis respons sesuai dengan 3 jenis peran yaitu
//halo Ksatria ${nama} , kamu dapat menyerang dengan senjatamu!
//halo Tabib ${nama} , kamu akan membantu temanmu yang terluka
//halo Penyihir ${nama} , ciptakan keajaiban yang membantu kemenanganmu!
//tapi kayaknya kamu jadi bot aja ya, peran yang kamu pilih ga ada
//tips belajar penggunaan `` (backtick) pada javascript agar
//mudah dalam memasukan variabel ke dalam string
//tapi tanpa backtick juga ga masalah sih yg penting output sesuai

// algoritma
//isi algoritma mu disini (AWAS KALO GA DI ISI!!!!)

//ini algo na berupa apa yaa?? wkwkw, saya isi gini aja deh ya:
//jika variable nama tidak diisi -> maka muncul peringatan "nama wajib diisi"
//jika nama terisi DAN peran tidak terisi -> maka muncul peringatan "Pilih Peranmu untuk memulai game"
//jika nama DAN peran terisi -> maka akan muncul output terakhir yang dimana :
    //jika peran diisi "Ksatria" -> maka outputnya "halo Ksatria reifan kamu dapat menyerang dengan senjatamu!"
    //jika peran diisi "Ksatria" -> maka outputnya "halo Tabib", nama, ", kamu akan membantu temanmu yang terluka"
    //jika peran diisi "Ksatria" -> maka outputnya "halo Penyihir", nama, ", ciptakan keajaiban yang membantu kemenanganmu!"
    //jika peran yang diisi tidak ada dalam pilihan -> maka outputnya "tapi kayaknya kamu jadi bot aja ya, peran yang kamu pilih ga ada"
    
let nama = "reifan", peran = "ksatria";

//code disini gunakan console.log untuk outputnya

if (nama == "") {
    console.log("nama wajib diisi");
}else if (peran == "") {
    console.log("Pilih Peranmu untuk memulai game");
}else {
    if (peran == "Ksatria" || peran == "ksatria") {
        console.log("halo Ksatria", nama, ", kamu dapat menyerang dengan senjatamu!");
    }else if (peran == "Tabib" || peran == "tabib") {
        console.log("halo Tabib", nama, ", kamu akan membantu temanmu yang terluka");
    }else if (peran == "Penyihir" || peran == "penyihir") {
        console.log("halo Penyihir", nama, ", ciptakan keajaiban yang membantu kemenanganmu!");
    }else {
        console.log("tapi kayaknya kamu jadi bot aja ya, peran yang kamu pilih ga ada");
    }
}