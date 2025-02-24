// buat semua variable di log dengan + dan spasi
let word = 'JavaScript';
let second = 'is';
let third = 'awesome';
let fourth = 'and';
let fifth = 'I';
let sixth = 'love';
let seventh = 'it!';

console.log(word + " " + second + " " + third + " " + fourth + " " + fifth + " " + sixth + " " + seventh) // Done

// Potong kata

let some = `${word} ${second} ${third} ${fourth} ${fifth} ${sixth} ${seventh}` // same but different

let sliceWord = some[0] + some[1] + some[2]+ some[3] + some[4] + some[5] + some[6] + some[7] + some[8] + some[9]
console.log("Word is : " + sliceWord) // Done manual sir

let word4 = some.substring(0,10)
let lenword4 = word4.length

console.log("Word is : " + word4 + ", length : " + lenword4) // done sir