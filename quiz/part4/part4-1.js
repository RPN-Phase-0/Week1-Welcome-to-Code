// Soal 1

// Tugas 1
// Buatlah sebuah fungsi bernama shoutOut(), yang mengembalikan nilai berupa "Halo Function!", 
// yang kemudian akan ditampilkan di console.

//bikin fungsinya disini
console.log("============================ Jawaban Soal 1 ============================");
function shoutOut() {
    return "Halo Function!";
}

console.log(shoutOut());
console.log("========================================================================\n");

// Soal 2

// Buatlah sebuah fungsi bernama calculateMultiply(), yang mengembalikan nilai berupa hasil kali dari 
// dua parameter yang dikirim.

//bikin fungsinya disini
console.log("============================ Jawaban Soal 2 ============================");
function calculateMultiply(num1, num2) {
    return num1 * num2;
}

let num1 = 1;
let num2 = 2;

let hasilPerkalian = calculateMultiply(num1, num2);
console.log(hasilPerkalian);
console.log("========================================================================\n");

// Soal 3

// Buatlah sebuah fungsi bernama processSentence(), yang akan memproses seluruh parameter yang diinput menjadi 
// satu kalimat berikut: 
// "Nama saya [Name], umur saya [Age] tahun, alamat saya di [Address], dan saya punya hobby yaitu [hobby]!"

//bikin fungsinya disini
console.log("============================ Jawaban Soal 3 ============================");
function processSentence(name, age, address, hobby) {
    let result = `Nama saya ${name}, umur saya ${age} tahun, alamat saya di ${address}, dan saya punya hobby yaitu ${hobby}!`;
    return result;
}

let name = "Agus";
let age = 30;
let address = "Jln. Malioboro, Yogjakarta";
let hobby = "gaming";

let fullSentence = processSentence(name, age, address, hobby);
console.log(fullSentence); // Menampilkan "Nama saya Agus, umur saya 30 tahun, alamat saya di Jln. Malioboro, Yogjakarta, dan saya punya hobby yaitu gaming!"
("========================================================================\n");
