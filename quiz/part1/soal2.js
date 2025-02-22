function numberToDate(date, month, year){
    if((date >= 1 && date <= 31) && (month >= 1 && month <= 12) && (year >= 1900 && year <= 2200)){
        const monthArr=['Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni', 'Juli', 'Agustus', 'September', 'Oktober', 'November', 'Desember'];
        let dateFormat = ''; 
        dateFormat += `${date} ${monthArr[month-1]} ${year}`;
        console.log(dateFormat);
    }else{
        console.log('Format Salah');
    }


}

numberToDate(12,2,2001);
numberToDate(12,13,2001);
numberToDate(-12,2,2001);
numberToDate(12,2,-2001);
