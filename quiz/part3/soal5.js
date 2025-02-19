// Soal 5. Bintang asteriks

// Problem buatlah bintang seperti berikut
let input = 5
//hasilnya
//*
//**
//***
//****
//*****

let pattern = "*"

for (let i = 1; i <= input; i++) {
    
    console.log(pattern.repeat(i));
    
}