function processSentence(name, age, address, hobby){
  return(`Nama saya ${name}, umur saya ${age} tahun, alamat saya di ${address}, dan saya punya hobby yaitu ${hobby}!`)
}

let name = "Akmal";
let age = 999;
let address = "Jln. uiiai";
let hobby = "dance";


let fullSentence = processSentence(name, age, address, hobby)
console.log(fullSentence)

// Lebih pusing sama looping sialan