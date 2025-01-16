// Buatlah sebuah fungsi bernama processSentence(), yang akan memproses seluruh parameter yang diinput menjadi 
// satu kalimat berikut: 
// "Nama saya [Name], umur saya [Age] tahun, alamat saya di [Address], dan saya punya hobby yaitu [hobby]!"

//bikin fungsinya disini

function processSentence(name, age, address, hobby) {
    return `Nama saya ${name}, umur saya ${age}, alamat saya di ${address}, dan saya punya hobby yaitu ${hobby}!`;
  }
  
  let name = "Fitra";
  let age = 24;
  let address = "Jl. Raya";
  let hobby = "Main Rubik";
  
  let fullSentence = processSentence(name, age, address, hobby);
  console.log(fullSentence); 