let i = 1;
let angka = "";
while (i <= 100) {
  if (i % 2 == 0) {
    angka = "Genap";
  } else {
    angka = "Ganjil";
  }
  console.log(i, angka);
  i++;
}
