// Problem
// Diberikan sebuah function bandingkanAngka(angka1, angka2) yang menerima dua parameter angka. 
// Function akan me-return nilai true jika angka2 lebih besar dari angka1, dan false jika sebaliknya. 
// Jika kedua angka bernilai sama, function akan me-return -1.

function bandingkanAngka(angka1, angka2) {
    //code disini
    if(angka2 > angka1) {
        return true;
    } else if (angka2 < angka1) {
        return false;
    } else {
        return -1;
    };
}
    
    // TEST CASES
    console.log(bandingkanAngka(8, 5));
    console.log(bandingkanAngka(3, 5));
    console.log(bandingkanAngka(4, 1));
    console.log(bandingkanAngka(3, 6));
    console.log(bandingkanAngka(17, 21));
    console.log(bandingkanAngka(10,10));