// algoritma
//inilah caraku untuk membuat game Proxytia untuk pertama
// kalinya
//pertama aku buat variabel nama dengan srting "0wnerz"
// dan ku buat variabel peran dengan string"Ksatria"
//lalu aku menggunakan if (variabel ==="")
//untuk menandai jika string di varriabel tidak ada
// maka, console.warn akan menyampaikan "nama wajib diisi"
//begitupun juga dengan variabel peran
//jika string di variabel peran tidak di isi
// akan menampilkan "peran wajib diisi"
// namun apabila string variabel peran adalah Ksatria
//maka yang ditampilkan adalah
//halo Ksatria 0wnerz , kamu dapat menyerang dengan senjatamu!
//sekian terima pusing-_-
//isi algoritma mu disini (AWAS KALO GA DI ISI!!!!)
let nama ="0wnerz"
let peran = "Ksatria"
if (nama === ""){
  console.warn("nama wajib diisi")
} else if (peran === ""){
  console.warn ("peran wajib diisi")
}
if (peran === "Ksatria") {
console.log(`halo Ksatria ${nama} , kamu dapat menyerang dengan senjatamu!`);
} else if( peran === "Tabib") {
console.log (`halo Tabib ${nama} , kamu akan membantu temanmu yang terluka`);
} else if (peran === "Penyihir") {
  console.log (`halo Penyihir ${nama} , ciptakan keajaiban yang membantu kemenanganmu!`);
} else {
  console.log (`tapi kayaknya kamu jadi bot aja ya, peran yang kamu pilih ga ada`);
}
