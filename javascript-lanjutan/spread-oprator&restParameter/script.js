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



const nama = document.querySelector('.nama');
const huruf = [...nama.textContent].map(h => `<span>${h}</span>`).join('');
nama.innerHTML = huruf;
