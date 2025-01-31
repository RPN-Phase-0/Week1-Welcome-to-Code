// Problem buatlah bintang seperti berikut
// let input = 5;
//hasilnya
//*
//**
//***
//****
//*****

for(let i = 1; i <= 5; i++) {
  let result = "";
  for(let j = 0; j < i; j++) {
    result += "*";
  }
  console.log(result);
}



