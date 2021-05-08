// Distructuring

// function penjumlahanPerkalian(a, b) {
//     return [a + b, a * b];
// };

// // const jumlah = penjumlahanPerkalian(3, 4)[0];
// // const kali = penjumlahanPerkalian(3, 4)[1];


// const [jumlah, kali] = penjumlahanPerkalian(5, 8);
// console.log(kali);







// function kalkulasi(a,b) {
//     return {
//         tambah: a + b,
//         kurang: a - b,
//         kali: a * b,
//         bagi: a / b
//     };
// };


// const {kurang, kali, bagi, tambah} = kalkulasi(59,78);

// console.log(kali)
// ;











// const mhs1 = {
//     nama: 'wildan',
//     umur: 33
// };

// function cetakMhs(nama, umur) {
//     return `halo nama saya ${nama}, umur ${umur} tahun.`;
// };

// console.log(cetakMhs(mhs1.nama, mhs1.umur));


const mhs1 = {
    nama: 'wildan',
    umur: 33,
    nilai: {
        uas: 45,
        uts: 67
    }
};

// function cetakMhs(mhs) {
//     return `halo nama saya ${mhs.nama}, umur ${mhs.umur} tahun.`;
// };

// console.log(cetakMhs(mhs1));


function cetakMhs({ nama, umur, nilai: { uas, uts} }) {
    return `halo nama saya ${nama}, umur ${umur} tahun. Dan nilai uas saya ${uas}.`;
};

console.log(cetakMhs(mhs1));


