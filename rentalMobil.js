// // Jenis mobil yang tersedia
// // Sopir 
// // waktu rental
// // harga


// function RentalMobil(jenisMobil, sopir, waktuRental, harga) {
//     this.jenisMobil = jenisMobil;
//     this.sopir = sopir;
//     this.waktuRental = waktuRental;
//     this.harga = harga;



// }



// Peminjaman Buku

// Pada sebuah penywaan buku, setiap buku yang di pinjam selama satu hari maka akan dikrnakan biaya sebesar 500IDR, berlaku kelipatan.

function Perpus(hari, penjaga, pengunjung, kas) {
    this.hari = hari;
    this.penjaga = penjaga;
    this.pengunjung = pengunjung;
    this.kas = kas;
    

    this.pengunjungPinjam = function(namaBuku){
        this.pengunjung.push(namaBuku);
        return pengunjung;
    }
    this.pengunjungKembaliBuku = function(namaBuku, bayar){
        if(this.pengunjung.length == 0) {
            alert('buku belum ada yang pinjam');
            return false;
        }
        for(i = 0; i < pengunjung.length; i++) {
            if( this.pengunjung[i] == namaBuku) {
                this.pengunjung[i] = undefined;
                this.kas += bayar;
                return this.pengunjung;
            }

        }
    }
}

var perpus1 = new Perpus('Senin', 'Sukab', [], 0);
