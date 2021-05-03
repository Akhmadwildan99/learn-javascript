// 1. latihan filter : menyaring data sesuai yang kita inginkan.

    const angka = [-1, 3, 4, 2 ,8, -9, -5, 4, 10];

    // jika menggunakan pengkodisian for
    // mencari angka yang => 3

    

    // for(let i = 0; i < angka.length; i++) {
    //     if(angka[i] >= 3) {
    //         newAngka.push(angka[i]);
    //     }

    //     console.log(newAngka);

    // }

    // console.log(newAngka);


    // menggunakan filter :
    

    // const newAngka = angka.filter(function(a) {
    //     return a >= 3;
    // });

    // console.log(newAngka);  // atau :

    // const newAngka = angka.filter(a => a >= 3);
    // console.log(newAngka);



    // map: memetakan tiap-tiap eleman kepada fungsi yang baru.
    // kslikan semua angka dengan 4.

    // const newAngka = angka.map(a => a * 4);

    // console.log(newAngka);



    // Reduce : melakukan sesuatu kepada seluruh elemen pada array.


    // const newAngka = angka.reduce((accumulator, cuurentValue) => accumulator + cuurentValue, 8);

    // console.log(newAngka);



    // Methode chaining : metode berantai

    // mencari angka yang lebih dari 4
    // mengalikan dengan 5
    // jumlahkan


    const newAngka = angka.filter(a => a > 5)
    .map(a => a * 5)
    .reduce((acc, cur) => acc + cur);

    console.log(newAngka);



    