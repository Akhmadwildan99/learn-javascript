// //  DOM events : menangkap sebuah kejadian
// //  1. HTML Handler

// const p3 = document.querySelector('.p3');

// function ubahWarnaP3() {
//     p3.style.backgroundColor = 'bLue';
// }


// //  2. Handler Methode

// const p2 = document.querySelector('.p2');
// function ubahWarnaP2() {
//     p2.style.backgroundColor = 'salmon';
// }

// p2.onclick = ubahWarnaP2;

// // 3. MEnggunakan methode addEventListener

// const p4 = document.querySelector('section#b p');
// p4.addEventListener('click', function (){
//     const ul = document.querySelector('section#b ul');
//     const liBaru = document.createElement('li');
//     const teksLiBaru = document.createTextNode('ini baru');
//     liBaru.appendChild(teksLiBaru);
//     ul.appendChild(liBaru);
// });


const p3 = document.querySelector('.p3');
p3.addEventListener('mouseenter', function(){
    p3.style.color = 'red';
});
p3.addEventListener('mouseleave', function(){
    p3.style.color = 'salmon';
});











