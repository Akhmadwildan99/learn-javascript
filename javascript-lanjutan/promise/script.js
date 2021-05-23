// $.ajax({
//     url: 'http://www.omdbapi.com/?apikey=fe8609c8&s=avengers',
//     success: movies => console.log(movies)
// });



// Menggunakan Fetch

// fetch('http://www.omdbapi.com/?apikey=fe8609c8&s=avengers')
//     .then(response => response.json())
//     .then(response => console.log(response));




// Promise
// Object yang akan mempresentasikan keberhasilan/ kegagalan sebuah event yang asynchronous di masa yang akan datang
// janji(terpenuhi / ingkar)
// states(fullfilled / rejected / pending)
// callback(resolve / reject / finally)
// aksi(then / catch)




// contoh 1
// let diTepati = false;
// const janji1 = new Promise((resolve, reject) => {
//     if(diTepati) {
//         resolve('janji telah ditepati!');
//     } else{
//         reject('ingkar janji!')

//     }
// });

// janji1
//     .then(response => console.log('OK: ' + response))
//     .catch(response => console.log('NOT OK: ' + response));



// contoh 2

// let diTepati = false;
// const janji2 = new Promise((resolve, reject) => {
//    if(diTepati) {
//        setTimeout(() => {
//         resolve('ditepeti setelah beberapa waktu ');
//        },2000);
//    } else {
//        setTimeout(() => {
//         reject('ingkar setelah beberapa waktu');
//        },2000);
//    }
// });


// console.log('mulai');
// // console.log(janji2.then(() => console.log(janji2)));
// janji2
//     .then(response => console.log('OK: ' + response))
//     .catch(response => console.log('NOT OK : ' + response));
// console.log('selesai');




const film = new Promise(resolve => {
    setTimeout(() => {
        resolve([{
            judul: 'Avengers',
            director: 'wildan',
            pemeran: 'iska'
        }]);
    },1000)
});


const cuaca = new Promise(resolve => {
    setTimeout(() => {
        resolve([{
            kota: 'Kalideres',
            suhu: '20 derajat',
        }]);
    },500)
});


// film.then(response => console.log(response));
// cuaca.then(response => console.log(response));


Promise.all([film, cuaca])
//     .then(response => console.log(response));
    .then(response => {
        const [film, cuaca] = response;
        console.log(film);
        console.log(cuaca);
    });





