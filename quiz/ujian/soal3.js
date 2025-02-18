function konversiMenit(detik = 60) {
    const menit = Math.floor(detik / 60); 
    const sisaDetik = detik % 60 ;        
    const detikFormat = sisaDetik < 10 ? `0${sisaDetik}` : sisaDetik;
    return `${menit}:${detikFormat}`;
  }

 

console.log(konversiMenit(63)); // 1:03
console.log(konversiMenit(124)); // 2:04
console.log(konversiMenit(53)); // 0:53
console.log(konversiMenit(88)); // 1:28
console.log(konversiMenit(120)); // 2:00
  