//soal no 1

function shoutOut() {
  console.log("Halo Function!! ^.^");
}

shoutOut();

//soal no 2

function calculateMultiply(num1, num2) {
  return num1 * num2;
}

let num1 = 6
let num2 = 9

let hasilPerkalian = calculateMultiply(num1,num2);
console.log(hasilPerkalian);


//soal no 3

function processSentence(name, age, address, hobby) {
  return `Nama saya ${name}, umur saya ${age} tahun, alamat saya di ${address}, dan saya punya hobby yaitu ${hobby}!`;
}

let name = "Agus";
let age = 30;
let address = "Jln. Malioboro, Yogjakarta";
let hobby = "gaming";

let fullSentence = processSentence(name,age,address,hobby);
console.log(fullSentence); 
