const mhs = ['wildan', 'iska', 'akhmad'];

// for(let i = 0; i < mhs.length; i++);
// console.log(mhs);
// atau
// mhs.forEach((m, i) => {
//     console.log(`mahasiswa ${m} adalah mahasiswa ke ${i + 1}`);
// });
// atau

for (const [i, m] of mhs.entries()){
    console.log(`mahsiswa ${m} adalah mahasiswa ke ${i + 1}`);
}


// String:

// const nama = 'akhmad';

// for (const n of nama) {
//     console.log(n);
// }





// NodeList


const liNama = document.querySelectorAll('.nama');

// liNama.forEach(n => console.log(n.innerHTML));

// for (const n of liNama) {
//     console.log(n.classList);
// }


//  Arguments

function jumlahkanAngka() {
    let jumlah = 0;
    for (a of arguments) {
        jumlah += a;
    };
    return jumlah;
}
console.log(jumlahkanAngka(1, 2, 3, 4, 5));




// For..in

const sis = {
    nama: 'akhmad',
    umur: 33,
    email: 'akhmadwildan30@yahoo.com'
};

for (a in sis) {
    console.log(sis[a]);
}

