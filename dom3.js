const tUbahWarna = document.getElementById('tUbahWarna');

// karena kita akan mengubah warna body dengan mengklik tombol kita tidak harus menangkap body dengan DOM karena body sudah mempunyai document.body

tUbahWarna.onclick = function(){
    // document.body.style.backgroundColor = 'salmon';
    // document.body.setAttribute('class', 'salmon');
    document.body.classList.toggle('salmon');
}

const tAcakWarna = document.createElement('button');
const teksAcakWarna = document.createTextNode('Acak Warna');
tAcakWarna.appendChild(teksAcakWarna);
tAcakWarna.setAttribute('type', 'button');
tUbahWarna.after(tAcakWarna);

tAcakWarna.addEventListener('click', function(){
    const r = Math.floor(Math.random() * 255 + 1);
    const g = Math.floor(Math.random() * 255 + 1);
    const b = Math.floor(Math.random() * 255 + 1);
    console.log(r);
    document.body.style.backgroundColor = 'rgb('+r+', '+g+', '+b+')';
});

