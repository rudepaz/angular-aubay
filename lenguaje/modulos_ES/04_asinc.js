function asincOriginal(callback) {
    setTimeout ( () => {
        let data = 'Load datos'
        callback(data)
    }, 2000)
}

function asincPromise () {
    return new Promise((resolve, reject) => {
        setTimeout( () => {
            let i = Math.random()
            if(i < 0.7){
                //Todo ok
                resolve(i)
            } else {
                //error
                reject(new Error(i))
            }
        },2000)
    })
}

asincOriginal( (res) => {
    //Proceso los datos
    console.log(res)
})


// ES6 incorpora promesa nativa JS
asincPromise().then(
    (res) => {console.log(res)}
).catch(
    (error) => {console.log(error.message)}
);


//ES8 (ES2017)
(async () => {
    try{
       let res = await asincPromise()
       console.log('Datos 2017'+ res)
    }catch (error){
       console.log('Error 2017:'+ error.message)
    }
})()