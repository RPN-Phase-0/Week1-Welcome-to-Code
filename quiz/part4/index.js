function shoutOut() {
    return "Halo Function!";
}

console.log(shoutOut());

console.log(''); // Separator

function calculateMultiply(num1, num2) {
    return num1 * num2;
}

let num1 = 1;
let num2 = 2;
let hasilPerkalian = calculateMultiply(num1, num2);
console.log(hasilPerkalian);

console.log(''); 


function processSentence(name, age, address, hobby) {
    return `Nama saya ${name}, umur saya ${age}, alamat saya di ${address}, dan saya punya hobby yaitu ${hobby}!`;
}

let name = "harry";
let age = "rahasia";
let address = "privasi";
let hobby = "tidur";

let fullSentence = processSentence(name, age, address, hobby);
console.log(fullSentence);
