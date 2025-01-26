//soal ke-1

let banyakHitungan = 5 ;
let i = 0;

console.log("LOOPING HITUNG MAJU");
while (i <= 5) {
    console.log(i);
    i++;
}

console.log("LOOPING HITUNG MUNDUR");
while (banyakHitungan >= 0) {
    console.log(banyakHitungan);
    banyakHitungan--;
}


//soal ke-2

console.log("for-Hitungan Maju");
for (let j = 0; j <= 5; j++ ) {
    console.log(j);
}


console.log("for-Hitungan Mundur");
for (let j = 5; j >= 0; j-- ) {
    console.log(j);
}

//soal ke-3

let keadaan;
console.log("looping cerdas");
for (let k = 1; k <= 100; k++ ) {
        if (k % 2 === 0) {
            keadaan = "Genap";
        } else {
            keadaan = "Ganjil";
        }
        console.log(k + " - " + keadaan);
}


//soal ke-4 -sorry sir, agak gak paham sama soalnya hehee

for (let i = 1; i <= 100; i++) {
    if (i % 2 === 0 && i % 5 === 0) {
        console.log(`${i} kel 2 & 5`);
    } else if (i % 2 === 0 && i % 9 === 0){
        console.log(`${i} kel 2 & 9`);
    } else if (i % 5 === 0 && i % 9 === 0) {
        console.log(`${i} kel 5 & 9`);
    }else if (i % 2 === 0 && i % 5 !== 0 && i % 9 !== 0) {
        console.log(`${i} fizz 222`);
    } else if (i % 5 === 0 && i % 2 !== 0 && i % 9 !== 0) {
        console.log(`${i} guzz 55`);
    } else if (i % 9 === 0 && i % 2 !== 0 && i % 5 !== 0) {
        console.log(`${i} hezz 9`);
    }else {
        console.log("--");
    }
}


//soal ke-5

let input = 5;
let bintang = "";

for (i = 0; i <= input; i++) {
    bintang += "*";
    console.log(bintang);
}