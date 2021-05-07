// const kariyawan = {
//     nama :'wildan',
//     bagian: 'ppic',
//     nik : '1414',
//     email : 'wildanakhamd3584@gmail.com'
// };

// const el = `<div class="kariyawan">
// <h2> ${kariyawan.nama}</h2>
// <span class="email">${kariyawan.email}</span>
// </div>`;


// Looping

// const kariyawan = [
//     {
//         nama : 'wildan',
//         nik : '2343'
//     },

//     {
//         nama : 'rudi',
//         nik : '3432'
//     },

//     {
//         nama : 'yuri',
//         nik : '6342'
//     }
// ];

// const el = `<div class="name">
// ${kariyawan.map(k => `<ul>
//     <li>${k.nama}</li>
//     <li>${k.nik}</li>
// </ul>`).join(' ')}
// </div>`





// Conditional

// const lagu = {
//     penyanyi : 'Ed shereen',
//     judul : 'perfect',
//     feat : 'Andrea Boceli'
// };

// const el = `<div class="lagu">
// <ul>
// <li>${lagu.penyanyi}</li>
// <li>${lagu.judul} ${lagu.feat ? `(feat.${lagu.feat})` : ''}</li>
// </ul>
// </div>`



// bersarang/ nested

const sis = {
    nama: 'ruli',
    semester: '3',
    pelajaran: [
        'matematik',
        'b.indonesia',
        'kimia',
        'biologi'
    ]
};

function cetakPelajaran (pelajaran) {
    return `<ol>
    ${pelajaran.map(p => `<li>${p}</li>`).join('')}
    </o;>`
}

const el = `
<div class="sis">
<h2>nama: ${sis.nama}</h2>
<span class="semester">semester: ${sis.semester}</span>
<h4 class="pelajaran">pelajaran: </h4>
${cetakPelajaran(sis.pelajaran)}


</div
`;




document.body.innerHTML = el;