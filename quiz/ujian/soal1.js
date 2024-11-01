function bandingkanAngka(angka1, angka2) {
    if (angka2 > angka1){
        return true;
    }else if (angka2 < angka1){
        return false;
    }else if (angka1 === angka2){
        return -1;
    }
  }
    
    console.log(bandingkanAngka(5, 8)); 
    console.log(bandingkanAngka(5, 3)); 
    console.log(bandingkanAngka(4, 4)); 
    console.log(bandingkanAngka(3, 3)); 
    console.log(bandingkanAngka(17, 2)); 