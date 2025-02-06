// NOMOR 1

function hitungMaju() {
  let i = 0
  while (i < 19) {
    console.log(i++)
  }
}
hitungMaju();

function hitungMundur() {
  let n = 10;
  
  while ( n !== 0) {
    console.log(n--)
  }
}
hitungMundur();

// SOAL NO 2

for (let x = 0; x < 5; x++ ) {
  console.log(x)
}

for (let i = 10; i !== 0; i--){
  console.log(i)
}

// soal no 3

for (let angka = 0; angka <= 100; angka++){
  if (angka % 2 == 0) {
    console.log(`${angka} adalah GENAP`);
  } else {
    console.log(`${angka} adalah GANJIL`)
  }
};

//soal no 4

for (let x = 1; x <= 100; x++) {
  if (!(x % 3 === 0)) {
    console.log(x)
  } else {
    let counter = x + 2;
    console.log(`${counter} kelipatan 3`)
    
  }
}

for (let y = 1; y <= 100; y++){
  if (!(y % 6 === 0)) {
    console.log(y)
  } else {
    let counter2 = y + 5;
    console.log(`${counter2} kelipatan 6`)
  }
}

for (let z = 1; z <= 100; z++){
  if (!(z % 10 === 0)) {
    console.log(z)
  } else {
    let counter2 = z + 9;
    console.log(`${counter2} kelipatan 10`)
  }
}


//soal no 5

let input = 7
let bintang = "";
for (let h = 1; h <= input; h++) {           // Loop baris
  for (let i = 1; i <= h; i++) {         // Loop kolom (bintang per baris)
    bintang += "*";
  }
  bintang += "\n";
}
console.log(bintang);