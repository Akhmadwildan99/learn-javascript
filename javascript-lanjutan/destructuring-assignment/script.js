//  Distructuring variables/ assignments

// 1. pada array:

// const perkenalan = ['halo', 'nama', 'saya', 'akhmad wildan']; 

// const [halo, nama, saya, akhmadWildan] = perkenalan;

// skip items
// const [halo, , d , ] = perkenalan;

// console.log(d);




// swap items

// let a = 4;
// let b = 3;
// console.log(a);
// console.log(b);

// [a, b] = [b, a];

// console.log(a);
// console.log(b);




// Return valllue pada function:

// function coba() {
//     return [1,2];
// };

// const [a, b] = coba();
// console.log(a);
// console.log(b);



// Rest Parameter

// const [a, ...vallues] = [1, 1, 3, 4];

// console.log(a);
// console.log(vallues[2]);




// 2. Distructuring pada object:

// const sis = {
//     nama: 'elang',
//     semaster: 3
// };

// const {nama, semester} = sis;
// console.log(nama);


// distructuring tanpa assignment


// ({nama, semester} = sis= {nama: 'elang',
// semaster: 3});
// console.log(nama);


// Assign ke area baru:

// const sis = {
//     nama: 'elang',
//     semester: 3
// };

// const { nama: n, semester: s } = sis;
// console.log(s);




// Memberi nilai Default:


// const sis = {
//     nama: 'elang',
//     semaster: 3,
//     email: 'wildanakhmad3584@SpeechGrammarList.com'
// };

// const {nama, semester, email = 'akhmad@rumah.com'} = sis;
// console.log(email);




// memeberi nilai default + assign ke variabel baru:

// const sis = {
//     nama: 'elang',
//     semaster: 3,
//     email: 'wildanakhmad3584@SpeechGrammarList.com'
// };

// const {nama: n, semester: s, email: e = 'akhmad@rumah.com'} = sis;
// console.log(e);


// rest parameer:

// const sis = {
//     nama: 'elang',
//     semaster: 3,
//     email: 'wildanakhmad3584@SpeechGrammarList.com'
// };

// const {nama, ...vallue} = sis;
// console.log(vallue);


// distructuring pada functiion:

const sis = {
    id: 345,
    nama: 'elang',
    semaster: 3,
    email: 'wildanakhmad3584@SpeechGrammarList.com'
};

function getIdSis({ id }) {
    return id;
};

console.log(getIdSis(sis));






