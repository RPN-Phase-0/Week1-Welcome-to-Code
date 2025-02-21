//soal ke-1

function shoutOut(){
    return "Halo Function!";
}

console.log(shoutOut())



//soal ke-2

function calculateMultiply(number1, number2) {
    return number1 * number2;
}

console.log(calculateMultiply(4, 6));

let nomer1 = 9;
let nomer2 = 10;
let hasilPerkalian = calculateMultiply(nomer1, nomer2);

console.log(hasilPerkalian);



//soal ke-3

function processSentence(nama, umur, alamat, hobi) {
    return `Nama saya ${nama}, umur saya ${umur} tahun, alamat saya di ${alamat}, dan saya punya hobby yaitu ${hobi}!`;
}

let nama = "Dhaffa";
let umur = 17;
let alamat = "Jl.Kusuma, Kota Bekasi";
let hobi = "reading";
let fullSentence = processSentence(nama, umur, alamat, hobi)

console.log(fullSentence);