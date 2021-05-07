// Tagged Tamplete

const nama = 'rulo';
const umur = 87;

function coba(strings, ...values) {
    // let result = '';
    // strings.forEach((str, i) => {
    //     result += `${str} ${values[i] || ''}`;
    // });
    // return result;

    return strings.reduce((result, str, i)=> `${result}${str} ${values[i] || ''}`, '');

}

const str =coba`Halo nama saya ${nama}, umur ${umur} tahun.`
console.log(str);

