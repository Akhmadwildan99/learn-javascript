// Spread Oprator
// memecah iterables menjdi single


// console.log(...mhs[1]);

// const mhs = ['wildan', 'roni', 'ronal'];
// const dosen =['euln', 'romnga', 'danilo'];
// const orang = [...mhs,'fuli', ...dosen];
// // const orang = mhs.concat(dosen);
// console.log(orang);




// untuk mengkopi data:
// const mhs = ['wildan', 'roni', 'ronal'];
// const mhs1 = [...mhs];
// mhs1[0] = 'tunam';
// console.log(mhs1);

// const liMhs = document.querySelectorAll('li');
// // const mhs= [];
// // for(let i = 0; i < liMhs.length; i++) {
// //     mhs.push(liMhs[i].textContent);
// // }
// // console.log(mhs);

// const mhs = [...liMhs].map(m => m.textContent);
// console.log(mhs);



// const nama = document.querySelector('.nama');
// const huruf = [...nama.textContent].map(h => `<span>${h}</span>`).join('');
// nama.innerHTML = huruf;
 

// function myFunc(a, b, ...myArgs) {
//     return `a = ${a}, b = ${b}, myArgs = ${myArgs}`
// }

// console.log(myFunc(1,2,3,4,5,6));


// Cara menghasilkan value array:


// function func(...myArgs) {
//     return myArgs;
// }

// console.log(func(1,3,4,5,6));


// function func() {
//     return Array.from(arguments);
// }

// console.log(func(1,3,4,5,6));



// function func() {
//     return [...arguments];
// }

// console.log(func(1,3,4,5,6));



function jumlahkanAngka(...angka) {
    let total = 0;
    for(n of angka) {
        total += n;
    }

    return total;

}

console.log(jumlahkanAngka(1,2,3,4,5,6,7));