let i = 1
while (i<=100){
function cekGanjilGenap(angka){
if (angka % 2 === 0){
return "Genap";
} else {
return "Ganjil";
}
}
console.log(i +  ":" + cekGanjilGenap(i));
i++;
}
