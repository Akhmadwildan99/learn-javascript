// Arrow function: bentuk lain yang lebih ringkas dari function expretion. 

// let kariyawan = (nama, waktu) => {
//     return `Hallo ${nama} kamu berangkat ${waktu}!`
// }

// console.log(kariyawan('wildan', 'siang')); // setiap komponen dalam function harus memliki string sendiri ketika mau dipanggil.



// let namaKariyawan = ['wildan', 'ruli', 'koil'];
// let jumlahHuruf = namaKariyawan.map(function(nama){
//     return nama.length;
// });
// console.log(jumlahHuruf);

// pakai arrow function

// let jumlahHuruf = namaKariyawan.map(nama => nama.length); //tidak usah menuliskan function dan return serta kurung kurawal.

// console.log(jumlahHuruf);


// let jumlahHuruf = namaKariyawan.map(nama => ({nama: nama, jumlahHuruf: nama.length}));

// console.table(jumlahHuruf);







// this pada arrow function:
// const Kariyawan = function() {
//     this.nama = 'wildan';
//     this.umur = 23;
//     this.sayHello = function() {
//         console.log(`hallo nama saya ${this.nama}, dan umur ${this.umur} tahun.`);
//     }

// }

// let wildan = new Kariyawan();

// const Kariyawan = function(nama, shift) {
//     this.nama = nama;
//     this.shift = shift;
//     this.kerja = function() {
//         console.log(`hallo kariyawan yang bernama ${this.nama}, berangkat shift ${this.shift}!`);
        
//     }
// }

// let wildan = new Kariyawan('wildan', 'siang');





// arrow function:

// const Kariyawan =  function(nama, shift) {
//         this.nama = nama;
//         this.shift = shift;
//         this.kerja = ()=>{
//             console.log(`hallo kariyawan yang bernama ${this.nama}, berangkat shift ${this.shift}!`);}
//     }
    
//     let wildan = new Kariyawan('wildan', 'siang');


// Object literal

// const Kary1 = {
//     nama: 'wildan',
//     shift: 2,
//     kerja: () => {
//         // console.log(`hallo kariyawan yang bernama ${this.nama}, berangkat shift ${this.shift}!`);
        
//     }


// }







 const Siswa = function() {
    this.nama = 'wildan';
    this.umur = 21;
    this.kerja = function() {
        console.log(`hallo kariyawan yang bernama ${this.nama}, berangkat shift ${this.umur}!`);
        
    }

    setInterval(() => {
        console.log(this.umur);
    },2000);
}

let wildan = new Siswa();