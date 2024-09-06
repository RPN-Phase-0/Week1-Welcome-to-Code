
// algoritma
/* let nama, peran
if (nama = null)
    then 
        print("nama wajib diisi") 
        return

switch (peran)
    case Ksatria: 
        "respon ksatria"
        break
    case Tabib: 
        "respon tabib"
        break
    case Penyihir:
        "respon penyihir"
        break
    deafult : 
        "respon jadi bot"
        break
*/



let nama = "", peran = "";

if (nama == "" || nama == null){
    console.log("nama wajib diisi");
    return
}

let welcomeSpeech = "Halo " + peran + " " + nama;
let secondSpeech;
switch (peran){
    case "Ksatria":
        secondSpeech = ", kamu dapat menyerang dengan senjatamu!"
        console.log(welcomeSpeech + secondSpeech);
        break;
    case "Tabib":
        secondSpeech = ", kamu akan membantu temanmu yang terluka"
        console.log(welcomeSpeech + secondSpeech);
        break;
    case "Penyihir":
        secondSpeech = ", ciptakan keajaiban yang membantu kemenanganmu!"
        console.log(welcomeSpeech + secondSpeech);
        break;
    default:
        secondSpeech = ", tapi kayaknya kamu jadi bot aja ya, peran yang kamu pilih ga ada"
        console.log(welcomeSpeech + secondSpeech);
        break;
}

return