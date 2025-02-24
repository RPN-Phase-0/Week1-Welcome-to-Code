// menggunakan while dengan nested 2 looping dengan alur maju dan mundur
// pertama kondisi nih adeuh
let i = 0
while(i < 10){
    console.log("1. LOOPING PERTAMA")
    i++
    j = 11
    while(j > 10){
        console.log("1. LOOPING KEDUA")
        j--
    }
} //

// looping for uy
// sama ya maju mundur
for(i=0;i<10 ; i++){
    console.log("2. LOOPING PERTAMA")
    for(j=10; j>9; j--){
        console.log("2. LOOPING KEDUA")
    }
}

for(i=0; i<100; i++){
    if(i % 2 === 0){
        console.log(i+ " genap")
    }else{
        console.log(i+ " ganjil")
    }
} //done

/**
Buat 3 Looping yang counternya bertambah
- 2
- 5 
- 9
jika kelipatan dario conter maka di print
rumus deret matika
Sn = a(a-1)+b
domngo ini modulus asu
 */

for(i=2; i < 100; i+=2){
    if(i % 2 === 0){
        console.log(`${i} Kelipatan 2`)
    }
}

for(i=5; i < 100; i+=5){
    if(i % 5 === 0){
        console.log(`${i} Kelipatan 5`)
    }
}

for(i=9; i < 100; i+=9){
    if(i % 9 === 0){
        console.log(`${i} Kelipatan 9`)
    }
}


// Bintang Bintang lagi

let input = 5
let hoshi = ""
for(i=0;i < input; i++){
    hoshi += "*".repeat(1)
    console.log(hoshi + "\n")
}