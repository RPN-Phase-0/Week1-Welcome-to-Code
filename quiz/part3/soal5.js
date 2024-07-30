//Bintang asteriks
//Problem buatlah bintang seperti berikut
//let input = 5
//hasilnya
//*
//**
//***
//****
//*****

let bintang = ''
    for(let i=0; i < 5; i++){
        for( j = 0; j <= i; j++ ){
            bintang +='*'
        }
        bintang += '\n'
    }
    console.log(bintang);
