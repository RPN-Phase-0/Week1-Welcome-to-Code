// Problem buatlah bintang seperti berikut
let input = 5
//hasilnya
//*
//**
//***
//****
//*****
for (let index = 1; index <= input; index++) {
    let barisBintang = "";
    for (let bintang = 0; bintang < index; bintang++) {
        barisBintang += "*"
    }
    console.log(barisBintang)
}