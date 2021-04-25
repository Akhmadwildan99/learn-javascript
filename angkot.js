// var penumpang = [];
// var tambahPenumpang = function(namaPenumpang, penumpang) {
//     // Jika angkot kosong
//     if(penumpang.length == 0) {
//         //tambah penumpang di awal array
//         penumpang.push(namaPenumpang);
//         //Kembalilkan isi array & keluar dari function
//         return penumpang;
//     } else {
//     // telusuri seluruh kursi dari awal
//         for( var i = 0; i < penumpang.length; i++) {
//             // jika ada kursi kosong
//             if(penumpang[i] == undefined ) {
//                 // tambah penumpang di kersi tersebut
//                 penumpang[i] = namaPenumpang;
//                 // kembalikan isi array & keluar dari function
//                 return penumpang;
//             }
//             // jika sudah ada nama yang sama
//             else if(penumpang[i] == namaPenumpang) {
//                 // tampilkan pesan kesalahannya
//                 console.log(namaPenumpang + ' sudah ada di dalam angkot');
//                 // kemalikan isi array & keluar dari function
//                 return penumpang;
//             }
//             // jika seluruh kursi terisi
//             else if(i == penumpang.length - 1) {
//                 // tambah penumpang di akhir array
//                 penumpang.push(namaPenumpang);
//                 // kembalikan isi array dan keluar dari function
//                 return penumpang;
//             }
//         }
        
//     }

// }



// var hapusPenumpang = function( namaPenumpang, penumpang) {
//     if (penumpang.length == 0) {
//         console.log('Angkot masih kosong');
        
//     } else{
//         for(i = 0; i < penumpang.length; i++){
//             if(penumpang[i] == namaPenumpang) {
//                 penumpang[i] = undefined;
//             } else if (i == penumpang.length -1) {
//                 console.log(namaPenumpang + ' tidak ada di dalam angkot');
//             }
    
//         }    
    
//     }  
//     return penumpang;
// }











function Angkot(sopir, trayek, penumpang, kas) {
    this.sopir = sopir;
    this.trayek = trayek;
    this.penumpang = penumpang;
    this.kas = kas;

    this.penumpangNaik = function(namaPenumpang){
        this.penumpang.push(namaPenumpang);
        return penumpang;
    }

    this.penumpangTurun =  function(namaPenumpang, bayar){
        if(this.penumpang.length === 0){
            alert('angkot masih kosong')
            return false;
        }

        for(i = 0; i < this.penumpang.length; i++ ){
            if( this.penumpang[i] == namaPenumpang){
                this.penumpang[i] = undefined;
                this.kas += bayar;
                return this.penumpang;
            }
        }

    }

}

var angkot1 = new Angkot('wildan', ['Kalideres', 'Kuta Bumi'], [], 0);
var angkot2 = new Angkot('Brad Pit', ['Kalideres', 'Pasar Kemis'], [], 0);


