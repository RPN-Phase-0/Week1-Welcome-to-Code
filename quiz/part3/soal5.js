let input = 5;
let bintang = "";

for ( let i = 1; i <= input; i++){
for ( let j = 1; j <= i; j++){
bintang += "*";
}
bintang += "\n";
}
console.log(bintang);
