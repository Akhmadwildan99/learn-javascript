// function penjumlahan(a, b) {
//     return a + b ;
// }
 
// // var a = parseInt(prompt('masukan nilai 1 : '));
// // var b = parseInt(prompt('masukan nilai 2 : '));
// // var hasil = penjumlahan(a*2, b*3);
// // console.log(hasil);

// function kali(a, b){
//     return a * b;
// }

// var hasil = kali(penjumlahan(1, 2), penjumlahan(2, 8));
// console.log(hasil);

// function jumlahVolumeDuaKubus(a, b) {
//     return a * a * a + b * b * b;
// }

// var hasil = jumlahVolumeDuaKubus(3, 9);
// console.log(hasil);

// Arguments

// function tambah() {
//     var hasil = 0;
//     for( var i = 0; i < arguments.length; i++){
//         hasil += arguments[i];
//     }
//     return hasil;
// }

// var coba = tambah(2, 7, 9);
// console.log(coba);



// function kali() {
//     var hasil  = 1;
//     for( var i = 0; i < arguments.length; i++){
//         hasil /= arguments[i];
//     }
//     return hasil;

// }

// var coba = kali( 5, 8, 8);
// console.log(coba);


// SCOPE

// var a = 1;

// function tes(a) {
//    a = 5;
//    return a;
// }
// var a = tes(7)
// console.log(a); 



//  REKURSIF

// for( i = 10; i > 0 ; i--) {
//     console.log(i);
// }

// function tes(n){
//     if (n === 0) return;
//     console.log(n);
//     return tes(n-1);
// }

// tes(5);

// function faktorial(n){
//     if ( n === 0) return 1;
//     return n * faktorial(n-1);
// }

// var a = faktorial(5);
// console.log(a);


// function faktorial(n) {
//     var hasil = 1;
//     for(i = n; i > 0; i--){
//         hasil *= i;
//     }
//     return hasil;
// }

// var a = faktorial(5);
// console.log(a);


var tampilNama = function(nama) {
    alert('halo ' + nama);
}

tampilNama('wildan');
console.log(tampilNama);









