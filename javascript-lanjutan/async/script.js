// Callback
// Synchronus Callback

// function halo(nama) {
//     alert(`Halo ${nama}`);
// }

// function tampilkanPesan(callback) {
//     const nama = prompt('masukan nama: ');
//     callback(nama);
// }

// tampilkanPesan(nama => alert(`Halo ${nama}`));



// Asynchronus Callback

function getDataKariyawan(url, success, error) {
    let xhr = new XMLHttpRequest();

    xhr.onreadystatechange = function() {
        if(xhr.readyState === 4) {
            if(xhr.status === 200) {
                success(xhr.response);
            } else if(xhr.status === 404) {
                error();
            }
        }
    }


    xhr.open('get', url);
    xhr.send();
}


getDataKariyawan('data/kariyawan.jeson', results => {
    console.log(results);

}, () => {

});

