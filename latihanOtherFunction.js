// ambil semua element video
const videos = Array.from(document.querySelectorAll('[data-duration]'));

// pilih hanya yang 'Anime'

let anime = videos.filter(video => video.textContent.includes('Anime'))


// ambil durasi menjadi float masing-masing video anime
 .map(item => item.dataset.duration)

// ubah durasi menjasi integer, ubah menit menjadi detik
 .map(waktu => {
    //  10:30 -> [10,30] split
    const parts = waktu.split(':').map(part => parseFloat(part));
    return (parts[0] * 60) + parts[1];
 })


// jumlahkan semua detik
 .reduce((total, detik) => total + detik)


// ubah formatnya menjadi jam : menit : detik.
const jam = Math.floor(anime / 3600);
anime = anime - jam * 3600;
const menit = Math.floor(anime/60);
const detik = anime - menit * 60;


// simpan di DOm
const pDurasi = document.querySelector('.total-durasi');
pDurasi.textContent = `${jam} jam, ${menit} menit, ${detik} detik.`;
const jmlVideo = videos.filter(video => video.textContent.includes('Anime')).length;
const pJmlVideo = document.querySelector('.jumlah-video');
pJmlVideo.textContent = `${jmlVideo} video.`

console.log(jmlVideo);