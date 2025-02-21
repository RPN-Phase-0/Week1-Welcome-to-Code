// Problem buatlah bintang seperti berikut
//hasilnya
//*
//**
//***
//****
//*****

let input = 5;

let s = "";

for (let i = 0; i < input; i++) {
    for (let j = 0; j <= i; j++) {
        s += "*";
    } s += "\n"
}
console.log(s)