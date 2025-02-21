let name = "Agus";
let age = 30;
let address = "Jln. Malioboro, Yogyakarta"
let hobby = "Gaming"; 


function processSetence(name, age, address, hobby) { 
 return`Nama saya ${name}, umur saya ${age}, alamat saya di ${address}, dan saya punya hobby yaitu ${hobby} `
}

let fullSentece = processSetence(name, age, address, hobby)
console.log(fullSentece);
