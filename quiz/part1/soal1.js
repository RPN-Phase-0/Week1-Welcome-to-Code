let nama = "agus";
let peran = "Ksatria" ;

if ( nama == ""){
    console.log("nama wajib di isi")
}else if (peran == "") {
    console.log("pilih peranmu untuk memulai game")
}else if (peran == " "){
    console.log("pilih peranmu untuk memulai game")
}
    

if(peran == "Ksatria"){
    console.log(`halo Ksatria ${nama}, kamu dapat menyerang dengan senjatamu!` )
}else if(peran == "Tabib"){
    console.log(`halo Tabib ${nama}, kamu akan membantu temanmu yang terluka`)
}else if(peran =="Penyihir"){
    console.log(`halo penyihir ${nama}, ciptakan keajaiban yang membantu kemenanganmu!`)
}else if(peran ==""){
    false
}else if (peran == " "){
    false
}
else {
    console.log(`tapi kayanya kamu jadi bot aja ya, peran yang kamu pilih ga ada`)
}