//tugas 1
function shoutOut() {
    return "Hello Function";
}
console.log(shoutOut());
//tugas 2
function calculateMultiply(num1, num2){
    return num1 * num2
}
let num1 = 1
let num2 = 2

let hasilPerkalian = calculateMultiply(num1,num2);
console.log(hasilPerkalian);
//tugas 3
function processSentence(name,age,address,hobby){
    return `Nama Saya ${name},Umur Saya${age},Alamat Saya${address},Hobi Saya${hobby}`
}
let name = "Agus";
let age = 30;
let address = "Jln. Malioboro, Yogjakarta";
let hobby = "gaming";

let fullSentence = processSentence(name,age,address,hobby);
console.log(fullSentence); 