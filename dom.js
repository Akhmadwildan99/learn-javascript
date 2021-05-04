// // DOM SELECTION
// //  1. doccument.getElementId()

// const judul = document.getElementById('judul');
// judul.style.color = 'salmon';
// judul.style.backgroundColor = 'lightGreen';
// judul.innerHTML = 'Akhmad Wildan';


// // 2. doccument.getElementsTagName
// //    mengemabalikan HTMLCollection, hasilnya akan mirip dengan array

// const p = document.getElementsByTagName('p');

// for(let i = 0; i < p.length; i++ ) {
//     p[i].style.backgroundColor = 'lightBLue';
// }


// // p[1].style.backgroundColor = 'lightBlue'; -> cara satu-satu/ cara sederhana


// const h1 = document.getElementsByTagName('h1')[0];
// h1.style.fontSize = '50px' ;


// // 3. document.getElementsClassName
// //    menghasilkan HTMLCollection

// const p2 = document.getElementsByClassName('p2');
// p2[0].innerHTML = 'Ini diubah dari javascript';


// 4. document.querySelector
//    menghasilkan element

// const p4 = document.querySelector('section#b p');

// p4.innerHTML = 'ini diubabah dari js';
// p4.style.backgroundColor = 'salmon';
// p4.style.fontSize = '4vw';

// 5. document.querySelectorAll
//    menghasilkan HTMLCollection

// const li = document.querySelectorAll('section#b ul li');

// for(let i = 0; i < li.length; i ++) {
//     li[i].style.fontSize = '5vw';
// }









