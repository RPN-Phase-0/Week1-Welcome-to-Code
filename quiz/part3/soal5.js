// Problem buatlah bintang seperti berikut
let input = 5
//hasilnya
//*
//**
//***
//****
//*****

for (let i = 0; i <= input - 1; i++){
    let asterisk = '';  
    for(let j = 0; j <= i ; j++) {
        asterisk += '*'
    }
    console.log(asterisk);
}