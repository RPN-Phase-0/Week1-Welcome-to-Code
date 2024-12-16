// Problem buatlah bintang seperti berikut
let input = 5
//hasilnya
//*
//**
//***
//****
//*****
let asteriks = "";
for (let index = 1; index <= input; index++) {
    for (let index2 = 1; index2 <= index; index2++) {
        asteriks += "*";
    }
    asteriks += "\n";
}
console.log(asteriks)