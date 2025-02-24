// Problem buatlah bintang seperti berikut
let input = 5
//hasilnya
//*
//**
//***
//****
//*****
let cetak = ""
for(let i = 0; i < input; i++) {
    for(let j = 0; j < i; j++) {
        cetak += "*"
    }
    cetak += "\n"
}
console.log(cetak)