function konversiMenit(menit) {
    if(menit < 60){
        return `0:${menit.toString().padStart(2, '0')}`
    } else if (menit >= 60){
        let jam = Math.floor(menit/60);
        menit %= 60;
        return `${jam}:${menit.toString().padStart(2, '0')}`
    } else{
        return "Menit tidak valid"
    }
}
  
// TEST CASES
console.log(konversiMenit(63)); // 1:03
console.log(konversiMenit(124)); // 2:04
console.log(konversiMenit(53)); // 0:53
console.log(konversiMenit(88)); // 1:28
console.log(konversiMenit(120)); // 2:00