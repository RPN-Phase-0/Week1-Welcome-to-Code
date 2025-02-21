// Problem buatlah bintang seperti berikut

//hasilnya
//*
//**
//***
//****
//*****

//Output
let input = 5;
for (let i = 1; i <= input; i++ ) {
    let starboy = '';
        for (let j = 1; j <= i; j++) {
            starboy += '*';
        }
        console.log(starboy);
}