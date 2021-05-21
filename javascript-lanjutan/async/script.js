// Callback
// Synchronus Callback

// function halo(nama) {
//     alert(`Halo ${nama}`);
// }

function tampilkanPesan(callback) {
    const nama = prompt('masukan nama: ');
    callback(nama);
}

tampilkanPesan(nama => alert(`Halo ${nama}`));