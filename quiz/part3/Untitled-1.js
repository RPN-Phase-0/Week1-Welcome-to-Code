// let nol = 0
// while(nol<=100){
//     console.log("looping pertama majuu",nol)
//     nol+=1
// }
// while(nol>100){
//     console.log("looping ke dua mundurr",nol)
//     nol-=1
// }

// for(let x=0;x<10;x++){
//     console.log("looping ke pertama",x)
// }

// for(let y=10;y>=0;y--){
//     console.log("looping ke kedua",y)
// }


// for(let i=0;i<100;i++){
//     if(i%2 == 0){
//         console.log('genap', i)
//     }else{
//         console.log('ganjil')
//     }
// }

// let kelipatan = 3;
// for (let i = 0; i < 100; i += kelipatan) {
//     console.log(i, "tambah 3");
// }

let input = 5
for (let i = 1;i<=input;i++){
    baris = ""
    for(let j=1;j<=i;j++){
        baris += "*"
    }
    console.log(baris)
}