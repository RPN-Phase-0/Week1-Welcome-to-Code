// Problem
// Diberikan sebuah function balikKata(kata) yang menerima satu parameter berupa string. 
// Function akan me-return kata yang dibalik. Contoh, jika kata adalah "John Doe", function akan me-return "eoD nhoJ".

/*
algoritma
1. siapkan variabel kata dan variabel temporary
2. lakukan looping dari akhir kata ke awal
3. masukan kata ke dalam temporary
4. cetak hasil setelah selesai looping
*/

function balikKata(kata) {
    let temp = "";
    for(let i = kata.length-1; i >= 0; i--){
        temp += kata[i];
    }
    return temp;
}

// TEST CASES
console.log(balikKata('Hello World and Coders')); // sredoC dna dlroW olleH
console.log(balikKata('John Doe')); // eoD nhoJ
console.log(balikKata('I am a bookworm')); // mrowkoob a ma I
console.log(balikKata('Coding is my hobby')); // ybboh ym si gnidoC
console.log(balikKata('Super')); // repuS