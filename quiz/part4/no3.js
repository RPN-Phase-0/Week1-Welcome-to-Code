//NO 3
function processSentence(name,age,addres,hobby){
    return `Nama saya ${name}, umur saya ${age}, alamat saya di ${addres}, dan saya punya hobby yaitu ${hobby}!`
}

let name = "Agus";
let age = 30;
let address = "Jln. Malioboro, Yogjakarta";
let hobby = "gaming";

let fullSentence = processSentence(name,age,address,hobby);
console.log(fullSentence);