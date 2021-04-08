let year=+prompt('Nhap nam');

if (year % 4 ==0) {
    if (year%100){
        if (year%400) {
            alert(year+'la nam nhuan');
        } else {
            alert(year + 'khong la nam nhuan');
        }
    }else {
        alert(year + 'la nam nhuan');
    }
        }else{ alert(year+'khong la nam nhuan');
}





