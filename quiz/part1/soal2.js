let tanggal = 13;
let bulan = 6;
let tahun = 2002;  

// Logic here
let text;

switch (bulan) {
    case 1: 
        text = `${tanggal} Januari ${tahun}`;
        break;
    case 2: 
        text = `${tanggal} Februari ${tahun}`;
    break;
    case 3: 
        text = `${tanggal} Maret ${tahun}`;
    break;
    case 4: 
        text = `${tanggal} April ${tahun}`;
    break;
    case 5: 
        text = `${tanggal} Mei ${tahun}`;
    break;
    case 6: 
        text = `${tanggal} Juni ${tahun}`;
    break;
    case 7: 
        text = `${tanggal} July ${tahun}`;
    break;
    default:
        text = "Bulan yang kamu masukkan tidak ada.";
        break;
}

console.log(text);
