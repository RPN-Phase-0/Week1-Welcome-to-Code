// NOMOR 1
console.log('=========== NO 1 ==============')
let word = 'JavaScript';
let second = 'is';
let third = 'awesome';
let fourth = 'and';
let fifth = 'I';
let sixth = 'love';
let seventh = 'it!';
console.log(word + " " + second + " " + third + " " + fourth + " " + sixth + " " + seventh, "\n");

// NOMOR 2 (indexing accessing)
console.log('=========== NO 2 ==============')
let kalimat = 'Mesin penyegel gelas plastik';
let kataketiga = kalimat[15]+ kalimat[16] + kalimat[17] + kalimat[18] + kalimat[19] + kalimat[20];
console.log('Kata ketiga: ' + kataketiga, "\n")

// NOMOR 3: Breaking Sentence (Again) using Substring
console.log('=========== NO 3 ==============')
let kalimat2 = 'Mesin penyegel gelas plastik';
let kataPertama = kalimat2.substring(5,14);
console.log('kata pertama: '+ kataPertama, "\n")

// NOMOR 4: Breaking Sentence (yet Again) and Count Each Length
console.log('=========== NO 4 ==============')
let kalimat3 = 'Mesin penyegel gelas plastik';
let kataPertamaLengh = kataPertama.length;
let kataKetigaLenght = kataketiga.length;

console.log ('Kata pertama: ' + kataPertama + ', panjang kata: ' + kataPertamaLengh);
console.log ('Kata ketiga: ' + kataketiga + ', panjang kata: ' + kataKetigaLenght);