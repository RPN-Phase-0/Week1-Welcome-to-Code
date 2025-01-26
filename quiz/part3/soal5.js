// Problem buatlah bintang seperti berikut
let input = 5

for (let i = 1; i <= input; i++) {
    let row = '';
    for (let j = 1; j <= i; j++) {
        row += '*';
    }
    console.log(row);
}
//hasilnya
//*
//**
//***
//****
//*****