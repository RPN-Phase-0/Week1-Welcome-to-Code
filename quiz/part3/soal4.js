console.log('perulangan pertama')
for(let i = 1; i <= 100; i = i+2){
    if(i % 3 == 0){
        console.log(`${i} adalah kelipatan 3`)
    }
}

console.log('Perulangan kedua')
for(let i = 1; i <= 100; i = i +5){
    if(i % 6 == 0){
        console.log(`${i} adalah kelipatan 6`)
    }
}

console.log('Perulangan ketiga')
for(let i = 1; i <= 100; i = i + 9){
    if(i % 10 == 0){
        console.log(`${i} adalah kelipatan 10`)
    }
}