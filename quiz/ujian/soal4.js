//   Problem
//   Diberikan sebuah function xo(str) yang menerima satu parameter berupa string. 
//   Function akan me-return true jika jumlah karakter x sama dengan jumlah karakter o, dan false jika tidak.


/*
algoritma
1. siapkan variabel counter untuk x dan o dengan default 0
2. lakukan looping dari string array 0 hingga akhir
3. jika terdapat string bernilai x atau 0, counter x atau o bertambah 1
4. end looping
5. jika counter x dan counter o bernilai sama, maka hasil akan true, jika tidak bernilai false
6. tampilkan hasil
*/
function xo(str) {
    let xCounter = 0, oCounter = 0;
    for(let i = 0; i <= str.length-1 ; i++){
        if(str[i] === 'x'){
            xCounter += 1;
        }

        if(str[i] === 'o'){
            oCounter += 1;
        }
    }

    if(xCounter == oCounter){
        return true;
    } else {
        return false;
    }
}

// TEST CASES
console.log(xo('xoxoxo')); // true
console.log(xo('oxooxo')); // false
console.log(xo('oxo')); // false
console.log(xo('xxxooo')); // true
console.log(xo('xoxooxxo')); // true