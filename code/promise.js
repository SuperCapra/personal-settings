const promise = new Promise((resolve, reject) => {
    console.log('bar')
    let rand = Math.random()
    setTimeout(() => {
        console.log('foo', rand)
        if(rand > 0.8) {
            reject('foo rejected') 
        } else {
            resolve('foo')
        }
        
      }, 500)
})

promise.then((value) => {
        console.log('then 1', value)}) //here returns foo and not valore ritornato
    .then((value) => {
        console.log('then 2', value)}) //here returns undefined
    .catch((value) => {
        console.log('catch', value)})
    .finally(() => {
        console.log('finally')})


//this is not a chained promise
const chainedPromise = new Promise((success, fail) => {
    let rand = Math.random()
    console.log('the random number from the first promise is: ', rand)
    if(rand > 0.8) {
        success(new Promise((resolve, reject) => {
            let rand = Math.random()
            console.log('the random number from the nested promise is: ', rand)
            if(rand > 0.3) {
                resolve({
                    name : 'nested promise',
                    type : 'resolve',
                    value : rand,
                    date : Date.now() 
                })
            } else {
                reject({
                    name : 'nested promise',
                    type : 'reject',
                    value : rand,
                    date : Date.now(),
                    message : 'message from reject'
                })
            }
        }))
    } else {
        fail({
            name : 'first level reject',
            type : 'TypeError',
            value : rand,
            date : Date.now(),
            message : 'message from reject',
            error : 'error?!'
        })
    }
})

chainedPromise
    .then((value) => {
        console.log('the value from the first promise is: ', value)
    })
    .then((value) => {
        console.log('the value from the second promise is: ', value)
    })
    .catch((err) => {
        console.log('the value from catcher is: ', JSON.parse(JSON.stringify(err)))
        console.log('the value from catcher is: ', err.message)
        console.log('the value from catcher is: ', err.error)
    })
    .finally((value) => {
        console.log('the value from finally is: ', value)
    })


