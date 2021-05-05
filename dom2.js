// Manipulasi Element : 

// 1. element.innerHTML

// const judul = document.getElementById('judul');
// judul.innerHTML = 'ini diubah dari js';


// 2. element.style.<property> :

// const sectionA = document.querySelector('section#a a');

// sectionA.style.backgroundColor = 'lightGreen';

// element.setAtribute :

// const judul = document.getElementsByTagName('h1')[0];

// judul.setAttribute("name", "wildan");

// element.classList :

// const p2 = document.querySelector('section#a p.p2');
// p2.classList.toggle('p2');



// Part 2

// Manipulasi Node : menambahkan element atau menghapus element baru.

// Buat Element baru

const pBaru = document.createElement('p');
const teksPBaru = document.createTextNode('Ini baru loh..!');

// Simpan tulisan ke dalam paragraf

pBaru.appendChild(teksPBaru);

// Smpan pBaru ke dalam akhir section A

sectionA = document.getElementById('a');
sectionA.appendChild(pBaru);



// belajar insertBefore : menambahkan element di tempat sesuai yang kita inginkan

const liBaru = document.createElement('li');
const teksLiBaru = document.createTextNode('Lagi-lagi ini baru loh..!');

// simpan tulissan ke dalam li

liBaru.appendChild(teksLiBaru);

// simpan element ke tempat yang kita inginkan yaitu sebelum li ke 2

const ul = document.querySelector('section#b ul');
const li2 = document.querySelector('section#b ul li:nth-child(2)');

ul.insertBefore(liBaru, li2);


// removeChild: menghapus element

const link = document.getElementsByTagName('a')[0];

sectionA.removeChild(link);

// replaceChild : menggantikan tempat

const sectionB = document.querySelector('section#b');
const p4 = sectionB.querySelector('p');

const h2 = document.createElement('h2');
const teksH2Baru = document.createTextNode('Judul baru');

h2.appendChild(teksH2Baru);

sectionB.replaceChild(h2, p4);
















