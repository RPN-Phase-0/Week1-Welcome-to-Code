// Problem buatlah bintang seperti berikut
//hasilnya
//*
//**
//***
//****
//*****
let str = ''
for(i = 0; i <= 5; i++) {
    for(j = 0; j < i; j++) {
        str += '*';
    }
    str += '\n';
}
console.log(str);