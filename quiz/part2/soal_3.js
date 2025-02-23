// ## Soal 3. Breaking Sentence (Again) using Substring

// Problem
// Mirip seperti soal nomor 2, namun kali ini gunakan substring untuk mengambil potongan dari tiap kata!

let word = 'wow JavaScript is so cool';
let exampleFirstWord = word.substring(0, 3);
let wordtwo = word.substring(4, 14)
let threeword = word.substring(15, 17); 
let fourword = word.substring(18, 20) ;
let fiveword = word.substring(21, 25);


console.log(`
    First Word:  ${exampleFirstWord} 
    Two Word: ${wordtwo}
    three word: ${threeword}
    four word: ${fourword}
    five word: ${fiveword}
    `)