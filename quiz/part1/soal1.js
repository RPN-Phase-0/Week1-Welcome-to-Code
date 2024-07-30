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
1. Mengecek apakah nama nama ada, jika tidak memiliki nama maka akan muncul pesan "Nama Wajib diisi", dan program terhenti
    jika memiliki nama maka akan lanjut ke else.
2. Pada else dicek lagi apakah peran ada atau tidak, jika tidak akan muncul pesan "Pilih Peranmu untuk memulai game",  dan program terhenti
    jika peran memiliki isi, maka lanjut ke perkondisian
3. jika memilih ksatria maka pesannya akan menjadi "Halo Ksatria ${nama}, kamu dapat menyerang dengan senjatamu!"
dan seterusnya, jika peran yang diisi tidak ada dalam daftar kondisi maka akan pesannya "tapi kayaknya kamu jadi bot aja ya, peran yang kamu pilih ga ada"
*/


let nama = "Rudy", peran = "Ksatria";

//code disini gunakan console.log untuk outputnya
if (nama === ""){
    console.log("Nama Wajib diisi")
}else{
    if(peran === ""){
        console.log("Pilih Peranmu untuk memulai game")
    }else{
        if (peran === "Ksatria"){
            respon = (`Halo Ksatria ${nama}, kamu dapat menyerang dengan senjatamu!`);
        
        }else if(peran === "Tabib"){
            respon = (`Halo Tabib ${nama}, kamu akan membantu temanmu yang terluka`);
    
        }else if(peran === "Penyihir"){
            respon = (`Halo Penyihir ${nama}, ciptakan keajaiban yang membantu kemenanganmu`);
        }
        else{
            respon = (`tapi kayaknya kamu jadi bot aja ya, peran yang kamu pilih ga ada`)
        }
        console.log(respon);
    }
}




