// Algoritma
function cekAngka(angka=0){
    if (angka % 2 === 0){
        return "Genap"
    }else{ return "Ganjil"}
}
console.log(cekAngka()) // Genap
console.log(cekAngka(9)) // Ganjil
console.log(cekAngka(20)) //Genap


if(cekAngka(28) == "Genap"){
    console.log("yap ini genap") // Ini output dari cekAngka(28)
}else{return "Ini Ganjil"}

console.log(1 - '1')