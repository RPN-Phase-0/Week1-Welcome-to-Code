let nama = "Hoshi", peran = "Tabib";

if(!nama) {
  console.log("nama belum di isi")
  return
} else if(!peran) {
  console.log("peran belum di isi")
  return
}

switch (peran) {
  case "Ksatria":
    console.log(`halo Ksatria ${nama} , kamu dapat menyerang dengan senjatamu!`)
    break
    case "Tabib":
      console.log(`halo Tabib ${nama} , kamu akan membantu temanmu yang terluka`)
      break
      case "penyihir":
        console.log(`halo Penyihir ${nama} , ciptakan keajaiban yang membantu kemenanganmu!`)
        default:
        console.log(`tapi kayaknya kamu jadi bot aja ya, peran yang kamu pilih ga ada`)
}