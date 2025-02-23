//soal4
var c1 = 2;
var c2 = 5;
var c3 = 9;
for(let i = 1; i<=100;i+=c1){
    //console.log("loop berhasil");
    if(i==1){console.log('Loop ke1')}
    if(i%3==0) {
        console.log(i + ' adalah kelipatan 3');
    }
}
for(let i = 1; i<=100;i+=c2){
    //console.log("loop berhasil");
    if(i == 1){console.log('Loop ke2')}
    if(i%6==0) {
        console.log(i + ' adalah kelipatan 6');
    }
}
for(let i = 1; i<=100;i+=c3){
    //console.log("loop berhasil");
    if(i == 1){console.log("Loop ke3")}
    if(i%10==0) {
        console.log(i + ' adalah kelipatan 10');
    }
}
console.log('run berhasil')