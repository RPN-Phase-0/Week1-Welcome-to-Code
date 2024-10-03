// Problem buatlah bintang seperti berikut
let input = 5
//hasilnya
//*
//**
//***
//****
//*****
for (let i = 0; i < input; i++) {
  let s = ""
  for (let j = 0; j <= i; j++) {
    s += "*"
  }
  console.log(s)
}