//hasilnya
//*
//**
//***
//****
//****

let input = 5

for(let i = 1; i <= input; i++){
  let star = ""

  for(let j = 1; j <= i; j++){
    star += "*"
  }
  console.log(star)
}

// simple solution
for(let i = 1; i <= input; i++){
  console.log("*".repeat(i))
}