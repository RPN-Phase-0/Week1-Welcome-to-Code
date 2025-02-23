// Problem buatlah bintang seperti berikut
let input = 5;
//hasilnya
//*
//**
//***
//****
//*****

let output = "";

for (let s = 1; s <= input; s++) {
  for (let t = 1; t <= s; t++) {
    output += "*";
  }
  output += `\n`;
}

console.log(output);
