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
let Gender = "nonbinary"


let gender = ["male", "female"];

if (!gender.includes(Gender)){ //if state operator NOT
    console.log("Pegikau gay") 
}else{
    console.log("kaum lurus")
}

console.log("gay" || gender.includes(Gender)) // Pakai operator OR daripada pake if state

{
    let pacaran = ["male","female"]
    // function pasangan (pasangan1, pasangan2) {
    //     if ([pasangan1,pasangan2] == (["male","female"] || ["female","male"])){
    //         return "Oke" 
    //     }
    //     if ([pasangan1,pasangan2] == ["male","male"]) {
    //         return "njir gay najis"
    //     } if ([pasangan1,pasangan2] ==["female","female"]) {
    //         return "Yaoi gila"
    //     } 
    // };
    function pasangan(pasangan1, pasangan2) {
        if ((pasangan1 === "male" && pasangan2 === "female") || (pasangan1 === "female" && pasangan2 === "male")) {
            return "Oke";
        } else if (pasangan1 === "male" && pasangan2 === "male") {
            return "njir gay najis";
        } else if (pasangan1 === "female" && pasangan2 === "female") {
            return "Yaoi gila";
        } else {
            return "Pasangan tidak dikenali";
        }
    }
    console.log(pasangan(pacaran[0],pacaran[1]));
} // gabut sir