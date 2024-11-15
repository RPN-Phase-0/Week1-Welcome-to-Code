for (let index = 1; index <= 100; index+=2) {
    // const element = array[index];
    if(index % 3 === 0) {
        console.log(`${index} kelipatan 3`)
    }
}
console.log('---')
for (let index = 1; index <= 100; index+=5) {
    // const element = array[index];
    if(index % 6 === 0) {
        console.log(`${index} kelipatan 6`)
    }
}
console.log('---')
for (let index = 1; index <= 100; index+=9) {
    if(index % 10 === 0) {
        console.log(`${index} kelipatan 10`)
    }
}