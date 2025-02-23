function processSentence(name, age,address, hoby){
    return `Nama saya ${name}, umur saya ${age} tahun, alamat saya di ${address}, dan saya punya hobby yaitu ${hoby} !  `
}

let name = "Agus";
let age = 30;
let address = "Jln. Malioboro, Yogjakarta";
let hoby = "gaming";

let fullSentence =  processSentence(name,age, address, hoby);
console.log(fullSentence)