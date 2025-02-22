//## Soal 5. Bintang asteriks

// Problem buatlah bintang seperti berikut
let input = 5
//hasilnya
//*
//**
//***
//****
//*****
for(let i = 1;i<=input;i++){
    let st = "";
    for(let j = 0;j<i;j++){
        st+="*";
    }
    console.log(st);
}