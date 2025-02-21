// Buatlah sebuah fungsi bernama processSentence(), yang akan memproses seluruh parameter yang diinput menjadi 
// satu kalimat berikut: 
// "Nama saya [Name], umur saya [Age] tahun, alamat saya di [Address], dan saya punya hobby yaitu [hobby]!"

//bikin fungsinya disini

function processSentence(name, age, address, hobby) {
    return `Nama saya ${name}, umur saya ${age}, alamat saya di ${address}, dan saya punya hobby yaitu ${hobby}`;
}

let name = "Agus";
let age = 30;
let address = "Jln. Malioboro, Yogyakarta";
let hobby = "gaming";

console.log(processSentence(name, age, address, hobby));