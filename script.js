// alert('selamat datang..');
// var lagi = true;

// while( lagi === true ) {
//     var nama = prompt('masukan nama:');

//     lagi = confirm('coba lagi?');
// }

// alert('terima kasih..');

// var nilaiAwal = 1
// while( nilaiAwal <= 10) {
//     console.log('Angkot no.' + nilaiAwal + 'berjlan dengan baik')


// nilaiAwal++

// }

// var noAngkot = 1
// var berjalanBaik = 6
// var jumlahAngkot = 10

// while ( noAngkot <= berjalanBaik) {
//     console.log('Angkot No.' + noAngkot + 'Berjalan Baik');

//  noAngkot++
// }

// for(noAngkot = berjalanBaik + 1; noAngkot <= jumlahAngkot; noAngkot++ ) {
//     console.log('Angkot No.' + noAngkot + 'tidak beroprasi');
// }


// var angka =  prompt( 'masukan angka' )

// if( angka % 2 == 0){
//     alert(angka + 'bilangan Genap');
// } else if( angka % 2 === 1) {
//     alert( angka  + ' bilangan GANJIL ');
// }
// else {
//     alert( angka + ' bukan BILANGAN ');
// }


// var noAngkot = 1
// var angkotBeroprasi = 6
// var jumlahAngkot = 10

// for( noAngkot = 1 ; noAngkot <= jumlahAngkot ; noAngkot++) {
//     if( noAngkot <= 6 && noAngkot !== 5 ){
//         console.log( 'Angkot No. ' + noAngkot + ' beroprasi ');
//     } else if( noAngkot === 8 || noAngkot === 10 || noAngkot === 5 ){
//         console.log( ' Angkot No. ' + noAngkot + ' Sedang lembur ');
//     } else {
//         console.log( ' Angkot No. ' + noAngkot + ' sedang prbaikan ');
//     }
// }



// var makanan = prompt(' Masukan makanan / minuman:.. \n ( contoh makanan: nasi, daging, susu, hamburger, softdrink)')

// switch( makanan ) {
//     case 'nasi' :
//     case 'daging' :
//     case 'susu' :
//         alert(' Makanan / Minuman  Sehat');
//         break;
//     case 'hamburger' :
//     case 'softdrink' :
//         alert(' Makanan /Minuman Tidak Sehat');
//         break;
//     default :
//     alert(' Makanan / Minuman yang anda masukan salah');
//     break;
// }


// FUNCTION BERSARANG

var s = ''

for( var i = 0 ; i < 10 ; i++) {
    for( var j = 0 ; j <= i ; j++){
        s += '*';
    }
    s += '\n';
    
}
console.log(s);



