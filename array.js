// Manipulasi array

// var arr = [1, 'aee', 'i'];
// console.log(arr[2]);

// Mengganti array
// var i = [1, 8, 9, 'r'];
// i[2] = ['undefined'];
// console.log(i);


// 3. menampilkan isi array

// var arr = ["Akhmad", "Wildan", "Iska", "Rahma"];

// for( var i = 0; i < arr.length ; i++) {
//     console.log('Mahasiswa ke ' + (i+1) + ' bernama ' +  arr[i]);
// }
 


// Method pada array
// 1. Join
// var arr = ["Akhmad", "Wildan", "Iska", "Rahma"];
// metod join
// push
// arr.push("iful", "arya");

// Pop : menghilankan dari belkang
// arr.pop()
// arr.pop()

// unsift: menambahkan dari depan, Sift : menghilangkan dari depan
// arr.unshift("Ronaldo");
// arr.shift()

// slice: memotong di tengah (awal, akhir)
// var arr2 = arr.slice(1,2);
// splice: menambal di tengah rumus(indexAwal, mauDihapusBerapa, elemenBaru2,......)
// arr.splice(2, 1, "Aliful", "Arya" );

// console.log(arr2.join(', '));


// forEach & map & sort

// var arr = [1,2,3,4,5,6,7,8];

// arr.forEach(function(e){
//     console.log(e);

// });

// var mahas = ['akhmad', 'wildan', 'nanu', 'rama'];

// mahas.forEach(function(e,i){
//     console.log('Mahasiswa No ' + (i+1) + ' Bernama ' + e);
// });

// var arr = [1,2,3,4,5,6,7,8];

// var arr2 = arr.map(function(e){
//     return e*2;
// });

// console.log(arr2.join('- '));

// var arr = [1,2,15,3,10,4,5,6,7,8];

// arr.sort(function(a,b){
//     return a-b;

// });

// console.log(arr.join('- '));


// var arr = [1,2,15,3,10,4,5,6,7,8];

// var arr2 = arr.filter(function(x){
//     return x > 3;
// });

// console.log(arr2);

var arr = [1,2,15,3,10,4,5,6,7,8];

var arr2 = arr.find(function(x){
    return x > 3;
});

console.log(arr2);

