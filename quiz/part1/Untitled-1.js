console.log("isi nama dan peran \nperan tersedia:")
console.log('1.Ksatria, 2.Tabib, dan 3.Penyihir')
let nama = "isal", peran = "tabib"

if (nama == ""){
    console.log("isi dulu kocak nama nya")
}else{
     console.log(`oke ${nama} itu nya kosong tuh`)
}
switch(peran){
    case "ksatria":
        console.log(`${nama} adalah Ksatria`)
        break;
    case "tabib":
        console.log(`${nama} adalah Tabib`)
        break;
    case "penyihir":
        console.log(`${nama} adalah Penyihir`)
        break;
}



//soal 2
let tanggal = 12
let bulan = 1
let tahun = 2004

const bulann = ['januari','febuari','maret','april','mei','juni','juli','agustus','september','oktobet','november','desember']

if(tanggal < 1 || tanggal > 31){
    console.log("tanggal kebanyakan")
}else if(bulan < 1 || bulan > 12){
    console.log("bulan gak ada bulan 0 sama 13+++")
}else{
    console.log(`tanggal ${tanggal} ${bulann[bulan - 1]} ${tahun}`)
}