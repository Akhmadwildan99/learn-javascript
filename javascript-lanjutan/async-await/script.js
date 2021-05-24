// const coba = new Promise(resolve => {
//     setTimeout(() => {
//         resolve('ok');
//     },2000);
// });

// console.log(coba);



function cobaPromise() {
    return  new Promise((resolve, reject) => {
        const waktu = 6000;
        if(waktu < 5000){
            setTimeout(() => {
                resolve('ok');
            },waktu);
        } else{
            reject('kelamaan');
        }
    });
}

async function cobaAsync() {
    try{
        const coba = await cobaPromise();
        console.log(coba);
    } catch(err){
        console.log(err);
    }
}

cobaAsync()