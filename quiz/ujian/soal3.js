// Problem
// Diberikan sebuah function konversiMenit(menit) yang menerima satu parameter berupa angka yang merupakan ukuran waktu 
// dalam menit. Function akan me-return string waktu dalam format jam:menit berdasarkan menit tersebut. 
// Contoh, jika menit adalah 63, maka function akan me-return "1:03".

function konversiMenit(detik) {
    // you can only write your code here!
    let menit = 0;

    while(detik >= 60){
        menit+=1;
        detik-=60;
    }
    
    if(detik == 0){
        return `${menit}:00`;
    } else if(detik < 10){
        return `${menit}:0${detik}`;
    } else{
        return `${menit}:${detik}`;
    }
    
    // Atau:
    // return `${menit}:${String(detik).padStart(2, '0')}`;
}
  
// TEST CASES
console.log(konversiMenit(63)); // 1:03
console.log(konversiMenit(124)); // 2:04
console.log(konversiMenit(53)); // 0:53
console.log(konversiMenit(88)); // 1:28
console.log(konversiMenit(120)); // 2:00