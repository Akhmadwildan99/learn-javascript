var tanya = true
while ( tanya ) {
    // menangkap pilihan player
    var p = prompt('pilih: gajah, semut, orang')
    // menangkap pilihan computer
    // membangkitkan bilangan random
    var comp = Math.random();

    if( comp < 0.34 ) {
        comp = 'gajah';
    } else if( comp > 0.34 && comp < 0.67 ) {
        comp = 'orang';
    } else {
        comp = 'semut';
    }

    var hasil = ''
    // menentukan rules
    if( p == comp) {
        hasil = 'SERI!';  
    } else if( p == 'gajah'){
    //     if( comp == 'orang') {
    //         hasil = 'MENANG!';
    //     } else {
    //         hasil = 'KALAH!';
    //     }
    // } else if( p == 'orang') {
    //     if( comp == 'gajah') {
    //         hasil = 'KALAH!';
    //     } else {
    //         hasil = 'MENANG!';
    //     }
    // } else if( p == 'semut') {
    //     if( comp == 'gajah'){
    //         hasil = 'MENANG!';
    //     }else {
    //         hasil = 'KALAH!';
    //     }
    hasil = ( comp == 'orang') ? 'MENANG!' : 'KALAH!';
    } else if( p == 'orang') {
        hasil = ( comp == 'gajah') ? 'KALAH!' : 'MENANG';
    } else if( p == 'semut') {
        hasil = ( comp == 'orang') ? 'KALAH!' : 'MENANG';
    } else {
        hasil = 'Memasukan pilihan yang salah';
    }

    // tampilkan hasilnya
   
     alert( 'Kamu memilih: ' + p + ' dan Computer memilih: ' + comp + '\nMaka hasilnya adalah: Kamau ' + hasil);


    tanya = confirm('lagi?');
}

alert('Terima kasih sudah bermain.')