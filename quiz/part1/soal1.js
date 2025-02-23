function pemilihanPeran(nama, peran){
    let dialog;
    if(nama === ''){
        dialog = `nama wajib diisi`;
        console.log(dialog);
        return;
    }else if(peran === ''){
        dialog = `Pilih Peranmu untuk memulai game`;
        console.log(dialog);
        return;
    }

    if(peran === 'Ksatria'){
        dialog = `halo Ksatria ${nama} , kamu dapat menyerang dengan senjatamu!`;
    }else if(peran === 'Tabib'){
        dialog = `halo Tabib ${nama} , kamu akan membantu temanmu yang terluka`;
    }else if(peran === 'Penyihir'){
        dialog = `halo Penyihir ${nama} , ciptakan keajaiban yang membantu kemenanganmu!`;
    }else{
        dialog = `tapi kayaknya kamu jadi bot aja ya, peran yang kamu pilih ga ada`;
    }
    console.log(dialog);
}

const nama1 = 'Harkon';
const peran1 = 'Ksatria';
const nama2 = 'Budi';
const peran2 = 'Tabib';
const nama3 = 'Siti';
const peran3 = 'Penyihir';
const nama4 = 'Rudi';
const peran4 = 'Gtw';
const nama5 = '';
const peran5 = 'Ksatria';
const nama6 = 'Budi';
const peran6 = '';

pemilihanPeran(nama1, peran1);
pemilihanPeran(nama2, peran2);
pemilihanPeran(nama3, peran3);
pemilihanPeran(nama4, peran4);
pemilihanPeran(nama5, peran5);
pemilihanPeran(nama6, peran6);