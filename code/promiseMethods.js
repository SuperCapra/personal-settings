// the reject and resolve methos accept only one object
const prom1 = new Promise((resolve, reject) => {
    let rand = Math.random()
    // rand = 0.6
    console.log('the random number from prom1: ', rand)
    if(rand > 0.5) {
        resolve({
            type : 'search',
            result : [{
                type : 'people',
                name : 'abdullah',
                age : 67
            },{
                type : 'animal',
                name : 'jawary',
                age : 47
            }],
            message : 'retrieved succefully',
            error : ''
        })
    } else {
        reject({
            type : 'search',
            result : [],
            message : 'not retrieved succefully',
            error : 'oggi è lunedì'
        })
    }
})

const prom2 = new Promise((resolve, reject) => {
    let rand = Math.random()
    // rand = 0.6
    console.log('the random number from prom2: ', rand)
    setInterval(() => {
        if(rand > 0.5) {
            resolve({
                type : 'search',
                result : [{
                    type : 'people',
                    name : 'tjala',
                    age : 32
                },{
                    type : 'animal',
                    name : 'black panter',
                    age : 47
                }],
                message : 'retrieved succefully',
                error : ''
            })
        } else {
            reject({
                type : 'search',
                result : [],
                message : 'not retrieved succefully after 1000ms',
                error : 'oggi è lunedì anche se in ritardo di 1000ms'
            })
        }
    }, 1000)
})

const prom3 = new Promise((resolve, reject) => {
    let rand = Math.random()
    // rand = 0.6
    console.log('the random number from prom3: ', rand)
    // the reject and resolve methos accept only one object infact the sting 'minchia' will not be visualized
    setInterval(() => {
        if(rand > 0.5) {
            resolve({
                type : 'search',
                result : [{
                    type : 'people',
                    name : 'tjala senior',
                    age : 107
                },{
                    type : 'animal',
                    name : 'black coral snake',
                    age : 47
                }],
                message : 'retrieved succefully',
                error : ''
            }, 'minchia')
        } else {
            reject({
                type : 'search',
                result : [],
                message : 'not retrieved succefully after 1000ms',
                error : 'oggi è lunedì anche se in ritardo di 700ms'
            },{
                type : 'hidden error',
                result : [],
                message : 'you discovered the hidden error, boom!',
                error : 'actually there are no message :)'
            })
        }
    }, 700)
})

let arrayOfPromise = [prom1, prom2, prom3]

Promise.all(arrayOfPromise)
    .then((result) => {
        console.log('here the result', result)
        if(result[0]) {
            console.log('here the result[0]', result[0].result)
        }
        if(result[1]) {
            console.log('here the result[1]', result[1].result)
        }
        if(result[2]) {
            console.log('here the result[2]', result[2].result)
        }
    })
    .catch((err1, err2) => {
        console.log('err1', err1)
        console.log('err2', err2)
    })
    .finally(() => console.log('finally!!'))

// Promise.race(arrayOfPromise)
//     .then((result) => {
//         console.log('here the result', result)
//         if(result[0]) {
//             console.log('here the result[0]', result[0].result)
//         }
//         if(result[1]) {
//             console.log('here the result[1]', result[1].result)
//         }
//         if(result[2]) {
//             console.log('here the result[2]', result[2].result)
//         }
//     })
//     .catch((err1, err2) => {
//         console.log('err1', err1)
//         console.log('err2', err2)
//     })
//     .finally(() => console.log('finally!!'))

// Promise.reject(arrayOfPromise)
//     .then((result) => {
//         console.log('here the result', result)
//         if(result[0]) {
//             console.log('here the result[0]', result[0].result)
//         }
//         if(result[1]) {
//             console.log('here the result[1]', result[1].result)
//         }
//         if(result[2]) {
//             console.log('here the result[2]', result[2].result)
//         }
//     })
//     .catch((err1, err2) => {
//         console.log('err1', err1)
//         console.log('err2', err2)
//     })
//     .finally(() => console.log('finally!!'))