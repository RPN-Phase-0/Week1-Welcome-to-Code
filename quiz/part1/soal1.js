let nama = 'arifin';
let peran = 'Penyihir';

if (!nama) { // jika nama kosong maka akan menampilkan "nama wajib diisi"
    console.log("nama wajib diisi");
} else if (!peran) { // jika peran kosong maka akan menampilkan "Pilih Peranmu untuk memulai game"
    console.log("Pilih Peranmu untuk memulai game");
} else {
    if (peran === 'Ksatria') { // jika peran = Ksatria maka akan menampilkan output yang sesuai dengan yang ada di soal
        console.log(`halo Ksatria ${nama} , kamu dapat menyerang dengan senjatamu!`);
    } else if (peran === 'Tabib') { // jika peran = Tabib maka akan menampilkan output yang sesuai dengan yang ada di soal
        console.log(`halo Tabib ${nama} , kamu akan membantu temanmu yang terluka`);
    } else if (peran === 'Penyihir') { // jika peran = Penyihir maka akan menampilkan output yang sesuai dengan yang ada di soal
        console.log(`halo Penyihir ${nama} , ciptakan keajaiban yang membantu kemenanganmu!`);
    } else { // jika peran tidak ada yang sama dengan di soal maka akan menampilkan output yang sesuai dengan yang ada di soal
        console.log('tapi kayaknya kamu jadi bot aja ya, peran yang kamu pilih ga ada');
    }
}