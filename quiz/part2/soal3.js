// Problem
// Mirip seperti soal nomor 2, namun kali ini gunakan substring untuk mengambil potongan dari tiap kata!

let word3 = "wow JavaScript is so cool";
let exampleFirstWord3 = word3.substring(0, 3);
let completeWord = "";
for (let i = 0; i < word3.length; i++) {
  completeWord += word3[(0, i)];
}

console.log("Complete Word Is: " + completeWord);
