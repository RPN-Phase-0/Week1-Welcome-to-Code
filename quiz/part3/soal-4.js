console.log('=========== Kelipatan 3 ==============')
for(i=0; i<=100; i+=2){
    if (i % 3 === 0) {
        console.log(`${i}: kelipatan 3`);
    } else {
        console.log(i);
    }
}

console.log('\n=========== Kelipatan 6 ==============')
for(i=1; i<=100; i+=5){
    if (i % 6 === 0) {
        console.log(`${i}: kelipatan 6`);
    } else {
        console.log(i);
    }
}

console.log('\n=========== Kelipatan 10 ==============')
for(i=1; i<=100; i+=9){
    if (i % 10 === 0) {
        console.log(`${i} kelipatan 10`);
    } else {
        console.log(i);
    }
}