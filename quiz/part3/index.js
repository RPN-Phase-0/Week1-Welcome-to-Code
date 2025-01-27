
/**
 * SOAL 1
 */

console.log("LOOPING PERTAMA\n");

const loop = ["Belajar", "Looping", "JavaScript"];

let i = 0;

while(i < loop.length) {
  console.log(`${i + 1}.${loop[i]}`);
  i++;
};


console.log("\nLOOPING KEDUA");
let j = loop.length -1;

while(j >= 0) {
  console.log(`${j + 1}.${loop[j]}`);
  j--;
}



/**
 * SOAL 2
 */

console.log("LOOPING PERTAMA");

for(let i = 0; i < 6; i++){
  console.log(i)
};

console.log("\nLOOPING KEDUA");

for(let j = 5; j >= 0; j--){
  console.log(j);
};


/**
 * SOAL 3
 */

for(let i = 1; i <= 100; i++){
  if(i %2 == 0 ){
    console.log("Bilangan Genap:")
  }else{
    console.log("Bilangan Ganjil:")
  };

  console.log(i)
};


/**
 * SOAL 4
 */

// console.log("Looping dengan pertambahan 2");

for(let i = 1; i <= 100; i+=2){
  if(i %3 === 0){
    console.log(`${i} Kelipatan 3`);
  };
};

console.log("\nLooping Pertambahan 5");

for(let k = 1; k <= 100; k+=5){
  if(k %6 === 0){
    console.log(`${k} kelipatan 6`);
  };
};

console.log("\nLooping dengan pertambahan 9");

for(let j = 1; j <= 100; j+= 9){
  if(j %10 === 0){
    console.log(`${j} kelipatan 10`);
  };
};




/**
 * SOAL 5
 */

let bintang = "";

for(let i = 1; i <= 5; i++){
  for(let j = 0; j < i; j++){
    bintang +="*";
  };
  bintang +="\n";
};

console.log(bintang);