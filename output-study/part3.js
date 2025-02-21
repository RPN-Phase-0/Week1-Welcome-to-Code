const imut = "kawai" //Gak bisa di ubah coy

let nama = "samsul", sekolah = "goa" // Scope global

console.log(nama + " " + sekolah)

if (nama.length === 0) {
    let namaBaru = "Abdul" //Blok scope
    return namaBaru
} 

console.log(nama[5])
console.log(nama.toUpperCase())

let gabung = `Nama = ${nama}
Sekolah = ${sekolah}`;

console.log(gabung)
let Gender = "male"


let gender = ["male", "female"];

if (!gender.includes(Gender)){
    console.log("Pegikau gay")
}else{
    console.log("kaum lurus")
}