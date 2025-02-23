//tes 1
function bandingkanAngka(angka1, angka2){
    if(angka2 > angka1){
        return true;
    }else if(angka2 < angka1){
        return false;
    }else{
        return -1;
    }
}
console.log(bandingkanAngka(5, 8)); 
console.log(bandingkanAngka(5, 3)); 
console.log(bandingkanAngka(4, 4)); 
console.log(bandingkanAngka(3, 3)); 
console.log(bandingkanAngka(17, 2));
//tes 2
function balikKata(kata) {
    return kata.split('').reverse().join('');
}
  
// TEST CASES
console.log(balikKata('Hello World and Coders')); 
console.log(balikKata('John Doe')); 
console.log(balikKata('I am a bookworm')); 
console.log(balikKata('Coding is my hobby')); 
console.log(balikKata('Super')); 
//ujian 3
function konversiMenit(menit) {
   let jam = Math.floor(menit/60);
   let sisaMenit = menit % 60;
   return jam + ":" + (sisaMenit < 10 ? "0" : "") + sisaMenit;
}
console.log(konversiMenit(63)); 
console.log(konversiMenit(124));
console.log(konversiMenit(53)); 
console.log(konversiMenit(88)); 
console.log(konversiMenit(120)); 
//tes 4
function xo(str) {
    let jumlahX = 0;
    let jumlahO = 0;
    
    for (let i = 0; i < str.length; i++){
        if(str[i] === 'x'){
            jumlahX++;
        }else if(str[i] ===  'o'){
            jumlahO++;
        }
    }
    return jumlahX === jumlahO;
}
  
// TEST CASES
console.log(xo('xoxoxo')); // true
console.log(xo('oxooxo')); // false
console.log(xo('oxo')); // false
console.log(xo('xxxooo')); // true
console.log(xo('xoxooxxo')); // true