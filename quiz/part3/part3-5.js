// Soal 5. Bintang asteriks

// Problem buatlah bintang seperti berikut
let input = 5;
//hasilnya
//*
//**
//***
//****
//*****

// berotak senku
// console.log("*");
// console.log("**");
// console.log("***");
// console.log("****");
// console.log("******");

// code
console.log("============================ Jawaban Soal 5 ============================");
let string = "";
for (let i = 1; i <= 5; i++) {
    for (let j = 0; j < i; j++) {
        string += "*";
    }
    string += "\n";
}
console.log(string);
console.log("========================================================================\n");