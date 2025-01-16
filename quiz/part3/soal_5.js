// Problem buatlah bintang seperti berikut
let input = 5;
//hasilnya
//*
//**
//***
//****
//*****

let result = "";

for (let i = 1; i <= input; i++) {
  for (let j = 1; j <= i; j++) {
    result += "*";
  }
  result += "\n";
}

console.log(result);
