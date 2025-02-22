
function konversiMenit(menit){
    let jam = Math.floor(menit / 60);
    let sisa = (menit % 60).toString().padStart(2, "0");

    return `${jam}:${sisa}`;
}
console.log(konversiMenit(63)); // 1:03
console.log(konversiMenit(124)); // 2:04
console.log(konversiMenit(53)); // 0:53
console.log(konversiMenit(88)); // 1:28
console.log(konversiMenit(120)); // 2:00