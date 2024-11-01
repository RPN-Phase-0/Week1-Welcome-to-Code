function konversiMenit(menit) {
    const jam = Math.floor(menit / 60);
    const menit1 = menit % 60;
    return `${jam}:${menit1.toString().padStart(2, 0)}`
}

console.log(konversiMenit(63)); 
console.log(konversiMenit(124)); 
console.log(konversiMenit(53)); 
console.log(konversiMenit(88)); 
console.log(konversiMenit(120)); 