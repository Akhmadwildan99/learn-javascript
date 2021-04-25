// Object 
// var mhs = {
//     nama : "Akhmad",
//     umur : 21,
//     ips : [3.00, 2.50, 3.20 ],
//     alamat : {
//         jalan : "Jl. abc No. 123",
//         kota : "Bandung",
//         provinsi : "Jawa Tengah",
//     }

// };


//Object Literal

// var mhs = {
//     nama : "Akhmad",
//     umur : 21,
//     ips : [3.00, 2.50, 3.20 ],
    
// };

// var mhs2 = {
//     nama : "Wildan",
//     umur : 21,
//     ips : [3.00, 2.50, 3.20 ],
    
// };

// // Function Declaration

// function buatObjectMahasiswa(nama, nrp, email, jurusan) {
//     var mhs = {};
//     mhs.nama = nama;
//     mhs.nrp = nrp;
//     mhs.email = email;
//     mhs.jurusan = jurusan;
//     return mhs;
// }

// var mhs3 = buatObjectMahasiswa("Akhmad", "089", "wildanakhmad3584@gmail.com", "Sastra hewan")


// // Constructor

// function Mahasiswa(nama, nrp, email, jurusan) {
//     //var this = {};
//     this.nama = nama;
//     this.nrp = nrp;
//     this.email = email;
//     this.jurusan = jurusan;
//     // return this;

// }

// var mhs4 = new Mahasiswa('Wildan', '08939', 'wildan@akhmad.com', 'permalingan syariah'); //hsrus pake new



//  This

    //cara function declaration

    // function halo(){
    //     console.log(this);
    //     console.log(halo);
    // }

    // this.halo();


    // objek literal
    // var obj = {a: 10, nama: 'wildan'};
    // obj.halo = function(){
    //     console.log(this);
    //     console.log('halo');
    // }

    // obj.halo();
    // this mengambalikan objek yang bersangkutan


    // constructor

    function Halo(){
        console.log(this);
        console.log('halo');
    }
    var obj1 = new Halo();
    var obj2 = new Halo();





 

