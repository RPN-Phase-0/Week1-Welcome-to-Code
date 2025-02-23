/*
nama dan peran wajib di isi
peran adaq 3 yaitu
- ksatria
- tabib
- penyihir
*/

let nama = "Hansen", peran = "tabib"
if (peran == false && nama == false || peran == true && nama == false){
    console.log("Nama Dan Peran Wajib di isi")
} else if(peran == "ksatria"){
    console.log(`halo ksatria ${nama}, kamu dapat menyerang dengan senjatamu!`)
} else if(peran == "tabib"){
    console.log(`halo tabib ${nama}, kamu ada membantu temanmu yang terluka`)
} else if( peran == "penyihir"){
    console.log(`halo ${nama}, Ciptakan keajaiban yang membantu`)
} else{
    console.log("Tapi kayaknya kamu jadi bot aja deh, peran yang kamu pilih tidak tersedia!")
}
// Done sir

/*
Membuat format hari dari nomor ke bulan
contoh 
21 1 1999 // 21 Januari 1999
*/


let hari=2,bulan=9,tahun=2000

if(hari>=31 || bulan >= 12 || tahun > 2200 || hari == 0 || bulan == 0 || tahun < 1900){
    console.log(`Masukan hari, bulan, dan tahun dalam range`)
}else{
    switch(bulan){
        case 0:
            break
        case 1:
            console.log(`${hari} Januari ${tahun}`)
            break
        case 2:
            console.log(`${hari} Februari ${tahun}`)
            break
        case 3:
            console.log(`${hari} Maret ${tahun}`)
            break

        case 4:
            console.log(`${hari} April ${tahun}`)
            break
        case 5:
            console.log(`${hari} Mei ${tahun}`)
            break
        case 6:
            console.log(`${hari} Juni ${tahun}`)
            break
        case 7:
            console.log(`${hari} Juli ${tahun}`)
            break
        case 8:
            console.log(`${hari} Agustus ${tahun}`)
            break
        case 9:
            console.log(`${hari} September ${tahun}`)
            break
        case 10:
            console.log(`${hari} Oktober ${tahun}`)
            break
        case 11:
            console.log(`${hari} November ${tahun}`)
            break
        case 12:
            console.log(`${hari} Desember ${tahun}`)
            break
    }
} // Done