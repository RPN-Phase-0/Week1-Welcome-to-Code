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
/*
1. Pemain memasukan namanya
2. Jika pemain tidak memasukan namanya, maka akan muncul tulisan "nama wajib diisi"
3. Jika pemain sudah memasukan namanya, maka pemain juga harus memasukan peran yang mau dipilih, disini kita memiliki 3 peran, yaitu: Ksatria, Tabib, dan Penyihir.
4. Jika pemain tidak memasukan perannya, maka akan ada muncul tulisan "Pilih Peranmu untuk memulai game"
5. Jika pemain memilih Ksatria maka, outputnya: "halo Ksatria ${nama} , kamu dapat menyerang dengan senjatamu!"
6. Jika pemain memilih Tabib maka, outputnya: "halo Tabib ${nama} , kamu akan membantu temanmu yang terluka"
8. Jika pemain memilih Penyihir maka, outputnya: "halo Penyihir ${nama} , ciptakan keajaiban yang membantu kemenanganmu!"
9. Jika pemain memasukan peran selain Ksatria, Tabib, atau Penyihir maka, outputnya: "tapi kayaknya kamu jadi bot aja ya, peran yang kamu pilih ga ada"
*/

let nama = "Alfian"
let peran = ""
if(nama == null){
    console.log(`nama wajib diisi`)
}else if(peran == '' && nama != ''){
    console.log(`Pilih Peranmu untuk memulai game`)
}else if(peran == 'Ksatria'){
    console.log(`halo Ksatria ${nama} , kamu dapat menyerang dengan senjatamu!`)
}else if(peran == 'Tabib'){
    console.log(`halo Tabib ${nama} , kamu akan membantu temanmu yang terluka`)
}else if(peran == 'Penyihir'){
    console.log(`halo Penyihir ${nama} , ciptakan keajaiban yang membantu kemenanganmu!`)
}else if(peran != 'Ksatria' || 'Tabib' || 'Penyihir' && peran != ""){
    console.log(`tapi kayaknya kamu jadi bot aja ya, peran yang kamu pilih ga ada`)
}