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

const p2 = document.querySelector('section#a p.p2');
p2.classList.toggle('p2');