let hari = 21; let bulan = 1; let tahun = 1945;

if(hari > 31) {
  console.log("tanggal/hari tidak valid")
  return
} else if(hari < 1) {
  console.log("tanggal/hari tidak valid")
} else if(bulan > 12) {
  console.log("bulan tidak valid")
  return
} else if(bulan < 1) {
  console.log("bulan tidak valid")
  return
} else if(tahun > 2200) {
   console.log("tahun tidak valid")
   return
 } else if(tahun < 1900) {
   console.log("tahun tidak valid")
   return
 }
switch (true) {
    case bulan == 1:
      bulan = "januari"
        break
        case bulan == 2:
          bulan = "febuari"
          break
          case bulan == 3:
            bulan = "maret"
            break
            case bulan == 4:
              bulan = "april"
              break
              case bulan == 5:
                bulan = "mei"
                break
                case bulan == 6:
                  bulan = "juni"
                  break
                  case bulan == 7:
                    bulan = "juli"
                    break
                    case bulan == 8:
                      bulan = "agustus"
                      break
                      case bulan == 9:
                        bulan = "september"
                        break
                        case bulan == 10:
                          bulan = "oktober"
                          break
                          case bulan == 11:
                            bulan = "november"
                            break
                            case bulan == 12:
                              bulan = "desember"
                              break
}

console.log(`tanggal: ${hari} ${bulan} ${tahun}`)