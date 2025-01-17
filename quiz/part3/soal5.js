// Problem buatlah bintang seperti berikut
let input = 5
//hasilnya
//*
//**
//***
//****
//*****
let empty = ''
for(let i = 1; i <= input; i++){
    for(let j = 0; j < i; j++){
        empty+="*"
    }
    empty+="\n"
}
console.log(empty)