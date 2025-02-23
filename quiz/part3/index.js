//tugas 1
console.log("Loop 1");

let i = 2;
while (i <= 20){
    console.log(i + ' Aku Programer PHP');
    i += 2;
}

console.log("Loop 2");

i = 20;
while(i >= 2){
    console.log(i + ' aku JSHT');
    i-= 2;
}
//tugas 2
console.log("loop 1");

for (let i = 2; i <= 20; i +=2){
    console.log(i + " mabuk framework js");
}
console.log("loop 2");
for (let i = 20; i >= 2; i -=2){
    console.log(i + " aku suka laravel");
}
//tugas 3
for (let i = 1; i <= 100; i++){
    if (i % 2 === 0) {
        console.log(i + "Genap");
    }
    else{
        console.log(i + "Ganjil")
    }
}
//tugas 4
for (let i = 1; i <= 100; i += 2){
    if (i % 3 === 0) {
        console.log(i + " kelipatan 3");
    }
}
for (let i = 1; i <= 100; i+= 5){
    if (i % 6 === 0) {
        console.log(i + " kelipatan 6");
    }
}
for (let i = 1; i <=100; i+= 9){
    if (i % 10 === 0) {
        console.log(i + " kelipatan 10");
    }
}
//tugas 5
let input = 5;

for (let i = 1; i <= input; i++) {
    let bintang = "";
    for (let j = 1; j <= i; j++) {
        bintang += "*";
    }
    console.log(bintang);
}
