function processSentence(name, age, addres, hobby) {
  return `Nama saya ${name},umur saya ${age} tahun,alamat saya di ${addres},dan saya punya hobby yaitu ${hobby}`;
}
let nama = "Sigra";
let umur = 24;
let alamat = "Medan";
let hobysaya = "Belajar Javascript dan ingin jago javascript";

let fullSentence = processSentence(nama, umur, alamat, hobysaya);

console.log(fullSentence);
