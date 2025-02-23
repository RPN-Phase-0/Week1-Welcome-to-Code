// ## Soal 3

// Buatlah sebuah fungsi bernama processSentence(), yang akan memproses seluruh parameter yang diinput menjadi 
// satu kalimat berikut: 
// "Nama saya [Name], umur saya [Age] tahun, alamat saya di [Address], dan saya punya hobby yaitu [hobby]!"

//bikin fungsinya disini


function processSentence(namaa,umur,addresss,hobbyy) {
    return `Nama saya ${namaa}, umur saya ${umur}, alamat saya ${addresss}, dan hobby saya ${hobbyy}`
}

let nama = "Agus";
let age = 30;
let address = "Jln. Malioboro - Yogjakarta";
let hobby = "gaming";

let fullSentence = processSentence(nama,age,address,hobby);
console.log(fullSentence); // Menampilkan "Nama saya Agus, umur saya 30 tahun, alamat saya di Jln. Malioboro, Yogjakarta, dan saya punya hobby yaitu gaming!"