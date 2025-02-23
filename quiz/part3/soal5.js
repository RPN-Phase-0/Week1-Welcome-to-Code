// Problem buatlah bintang seperti berikut

//hasilnya
//*
//**
//***
//****
//*****

let input = 5;
let output = '';
for (let i = 1; i <= input; i++){
    for(let j = 1; j <= i; j++){
        output += '*';
    }
    output += '\n';
}

console.log(output);