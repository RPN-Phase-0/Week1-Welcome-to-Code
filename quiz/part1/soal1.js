let nama = "Albert", peran = "Penyihir"

if(nama == ""){
  console.log("Nama harus diisi diisi")
}else if(peran == ""){
  console.log("Peran harus diisi")
}else{
  if(peran == "Ksatria"){
    console.log(`halo Ksatria ${nama} , kamu dapat menyerang dengan senjatamu!`)
  }else if(peran == "Tabib"){
    console.log(`halo Tabib ${nama} , kamu akan membantu temanmu yang terluka`)
  }else if(peran == "Penyihir"){
    console.log(`halo Penyihir ${nama} , ciptakan keajaiban yang membantu kemenanganmu!`)
  }else{
    console.log(`tapi kayaknya kamu jadi bot aja ya, peran yang kamu pilih ga ada`)
  }
}

// Algoritma (Ribet banget mikir algoritma segala hehe)
// Nama dan peran harus diisi.
// jika tidak maka akan ada peringatan dan kode program dihentikan.
// Jika kondisi terpenuhi maka akan dinculkan 4 jenis respon yang
// berbeda tergantung dari pilihan peran yang dipilih.