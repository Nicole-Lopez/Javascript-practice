// let laberintoExample = { // direccion = ""
//     N: 'pared',
//     S: { // direccion = "S"
//         N: 'pared',
//         S: 'pared',
//         E: { // direccion = "SE"
//             N: 'destino', // direccion = "SEN"
//             S: 'pared',
//             E: 'pared',
//             O: 'pared'
//         },
//         O: { // direccion = "SO"
//             N: 'pared',
//             S: 'pared',
//             E: 'pared',
//             O: 'pared'
//         }
//     },
//     E: 'pared',
//     O: 'pared'
// }

// direcciones(laberintoExample) ---> 'SEN'
// SUR->ESTE->NORTE


function direcciones(laberinto) {
    let res = ''

    if (laberinto) {        
        Object.entries(laberinto).forEach(([key, value]) => {
            if (value !== 'pared') {
                if (value === 'destino') {
                    res = res.concat(key)
                }
                if (typeof value === 'object' && !Object.values(value).every(e => e ==='pared')) {
                    res = res.concat(key).concat(direcciones(value))
                }
            }
        });    
    } 
    return res  
}

