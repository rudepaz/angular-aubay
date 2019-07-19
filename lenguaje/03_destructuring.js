function algo() {
    let codigo = 23
    let user = 'Pepe'
    let error = false
    
    return [codigo,user,error]
}


let x = algo()
if (!x[2]) {
    console.log(`El codigo es ${x.0} y el usuario es ${x.1}`)
}

let [codigo, user, error] = algo ()
if (!error) {
    console.log(`El codigo es ${codigo} y el usuario es ${user}`)
}