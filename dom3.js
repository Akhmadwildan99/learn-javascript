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


const sMerah = document.querySelector('input[name="sMerah"]');
const sHijau = document.querySelector('input[name="sHijau"]');
const sBiru = document.querySelector('input[name="sBiru"]');


sMerah.addEventListener('input', function(){
    const r = sMerah.value;
    const g = sHijau.value;
    const b = sBiru.value;
    document.body.style.backgroundColor = 'rgb('+ r +','+g+','+ b +')';

});

sHijau.addEventListener('input', function(){
    const r = sMerah.value;
    const g = sHijau.value;
    const b = sBiru.value;
    document.body.style.backgroundColor = 'rgb('+ r +','+ g+','+ b +')';

});

sBiru.addEventListener('input', function(){
    const r = sMerah.value;
    const g = sHijau.value;
    const b = sBiru.value;
    document.body.style.backgroundColor = 'rgb('+ r +','+ g+','+ b +')';

});


document.body.addEventListener('mousemove', function(){

    // console.log(InputEvent.clientX);
    // console.log(window.innerheight);
    const xPos =Math.round(event.clientX / window.innerWidth) * 255;
    const yPos = Math.round(event.clientY / window.innerHeight) * 255;
    console.log(xPos);

    document.body.style.backgroundColor = 'rgb('+ xPos +', '+ yPos +', 100)';

});
