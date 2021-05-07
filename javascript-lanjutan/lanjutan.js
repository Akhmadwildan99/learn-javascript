// Cara membuat Object
    // dengan menggunakan objek litral
    // let siswa1 = {
    //     nama: "wildan",
    //     energy: 10,
    //     makan: function(porsi){
    //         this.energy += porsi;
    //         console.log(`Halo ${this.nama}, selamat makan`);
    //     }
    // }

    //  let siswa2 = {
    //     nama: "akhmad",
    //     energy: 10,
    //     makan: function(porsi){
    //         this.energy += porsi;
    //         console.log(`Halo ${this.nama}, selamat makan`);
    //     }
    // }

    // Function declaration
        // function Siswa(nama, energy){
        //     let siswa = {};
        //         siswa.nama = nama;
        //         siswa.energy = energy;

        //     siswa.makan = function(porsi){
        //         this.energy += porsi;
        //         console.log(`halo ${this.nama}, selamat makan`);
        //     } 

        //     return siswa;
        // }

        // let wildan = Siswa('wildan', 23);

        // function Angkot(sopir, tarif) {
        //     let angkot = {};
        //     angkot.sopir = sopir;
        //     angkot.tarif = tarif;
        
        //     angkot.setoran = function(penumpang) {
        //         this.tarif *= penumpang;
        //         console.log(`angkot ${this.sopir} sudah setor` )
        
        //     }
        //     return angkot

        // }

        // let dono = Angkot('dono', 2000);

    // contruction function

    // function Siswa(nama, energy){
            
    //             this.nama = nama;
    //             this.energy = energy;

    //         this.makan = function(porsi){
    //             this.energy += porsi;
    //             console.log(`halo ${this.nama}, selamat makan`);
    //         } 
    //         this.main = function(jam){
    //             this.energy -= jam;
    //             console.log(`halo ${this.nama} selamat bermain`);
    //         }
           
    //     }

    //     let wildan = new Siswa('wildan', 23);
   
   
    // objrct.create 

        // const methodSiswa = {
        //     makan : function(porsi){
        //     this.energy += porsi;
        //     console.log(`halo ${this.nama}, selamat makan`);
        //     },
        //     main : function(jam){
        //     this.energy -= jam;
        //     console.log(`halo ${this.nama} selamat bermain`);
        //     },
        //     tidur: function(jam){
        //         this.energy += jam*2;
        //         console.log(`halo ${this.nama} selamt tidur!`);
        //     }

        // }

        // function Siswa(nama, energy){
        //     let siswa = Object.create(methodSiswa);
        //         siswa.nama = nama;
        //         siswa.energy = energy;

        //     return siswa;
        // }

        // let wildan = Siswa('wildan', 23);


        // Contoh penggunaan Object React

        // const methodCharge = {
        //     isi: function(jam) {
        //         this.daya += jam;
        //         console.log(`Daya ${this.ponsel}, bertambah ${jam} bar `);
        //     },
        //     pakai : function(jam) {
        //         this.daya -= jam;
        //         console.log(`Daya ${this.ponsel}, berkurang ${jam} bar`);
        //     }
            
        // }

        // function Handphone(ponsel, daya) {
        //     let handphone = Object.create(methodCharge);
        //     handphone.ponsel = ponsel;
        //     handphone.daya = daya;
        //     return handphone;
        // }

        // let nokia = Handphone('nokia', 3);


        // Prototype

        // function Mahasiswa(nama, energy) {
        //     this.nama = nama;
        //     this.energy = energy;
        // }
        // Mahasiswa.prototype.makan = function(porsi) {
        //     this.energy += porsi;
        //     return  `Halo ${this.nama}, selamat makan!`;
        // }
        // Mahasiswa.prototype.main = function(jam) {
        //     this.energy -= jam;
        //     return `Halo ${this.nama}, selamat main!`;
        // }
        // Mahasiswa.prototype.tidur = function(jam) {
        //     this.energy += jam* 2;
        //     return `Halo ${this.nama}, selamat tidur`;
        // }


    
        // let wildan = new Mahasiswa('wildan', 5);


        // Versi Class

        // class Mahasiswa {
        //     constructor(nama, energy) {
        //         this.nama = nama;
        //         this.energy = energy;
        //     }
        

        //     makan(porsi) {
        //         this.energy += porsi;
        //         return `Halo ${this.nama}, selamat makan!`;
         
        //     }

        //     main(jam) {
        //         this.energy -= jam;
        //         return `Halo ${this.nama}, selamat main`;
        //     }

        //     tidur(jam){
        //         this.energy += jam* 2;
        //         return `Halo ${this.nama}, selamat tidur`;
        //     }

        // }

        // let ipul = new Mahasiswa('ipul', 12);


        // contoh kelas

        // class Perpus {
        //     constructor(pengunjung, jumlahBuku) {
        //         this.pengunjung = pengunjung;
        //         this.jumlahBuku = jumlahBuku;
        //     }

        //     pinjam(buku) {
        //         this.jumlahBuku -= buku;
        //         return (`${this.pengunjung} meminjam buku berjumlah ${buku}!`);
        //     }

        //     kembali(buku) {
        //         this.jumlahBuku += buku;
        //         return (`${this.pengunjung} menegembalikan buku berjunlah ${buku}!`);
        //     }
        // }

        // let iska = new Perpus('iska', 6);


        
    //closure

    // function init(){
    //     // var nama = 'wildan';
    //     return function(nama) {
    //         console.log(nama);
    //     }
    //     // return tampilNama;
    // }
    // let panggilNama = init();
    // panggilNama('ipul');
    // panggilNama('yuyu');


    // function ucapkanSalam(waktu) {
    //     return function(nama) {
    //         console.log(`Halo ${nama} selmat ${waktu} semoga harimu menyenangkan!`);

    //     }
    // }

    // let selamatPagi = ucapkanSalam('pagi');
    // let selamatSiang = ucapkanSalam('siang');
    // let selamtMalam = ucapkanSalam('malam');

    // selamatPagi('wildan')
    // selamatSiang('ruru');
    // selamtMalam('iska');



    // let add = function() {
    //     let counter = 0;
    //     return function() {
    //         return ++counter;
    //     }
    // }

    // let counter = 23;

    // let a = add();

    // console.log(a());
    // console.log(a());
    // console.log(a());
    // console.log(a());


    function shiftKerja(waktu) {
        return function(karu) {
            // console.log(`Hallo ${kariyawan} kamu masuk sift ${waktu}!`);
            return function(kariyawan) {
                console.log(`Hallo ${kariyawan} kamu masuk sift ${waktu} bersama kepala regu ${karu}!`);

            }
        }
    }

    let masukKerjaPagi = shiftKerja('pagi');
    let masukKerjaSiang = shiftKerja('siang');
    let masukKerjaMalam = shiftKerja('malam');

    let masukKerjaPagi1 = masukKerjaPagi('Lupin');
    let masukKerjaSiang1 = masukKerjaSiang('Ruli');
    let masukKerjaMalam1 = masukKerjaMalam('juned');

    masukKerjaPagi1('keenan');
    masukKerjaSiang1('Goku');
    masukKerjaMalam1('deku');



