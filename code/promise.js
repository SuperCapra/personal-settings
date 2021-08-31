const u = require('./utils.js')
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

promise.then(async function hey(value) {
        console.log('about to await 5000ms')
        await u.sleep(5000)
        console.log('awaited 5000ms')
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


// function determineFunction(resolve, reject) {
//     try {
//         setTimeout(() => {
//             const rand = u.randomDice(20)
//             const result = {
//                 message : 'resolved',
//                 result : rand,
//                 type : 'resolved'
//             }
//             console.log('rand: ', rand)
//             switch (rand) {
//                 case 7:
//                     result.message = 'rejected because number 7'
//                     result.type = 'rejected'
//                     result.error = 'Value not accepted'
//                     reject(result)
//                     break
//                 case 11:
//                     result.message = 'rejected because number 11'
//                     result.type = 'rejected'
//                     result.error = 'Value accepted but not wanted'
//                     reject(result)
//                     break
//                 case 20:
//                     throw new Error(`Too large: ${rand}`);
//                 default:
//                     resolve(result)
//                     break
//             }
//         }, 500)
//     } catch (error) {
//         console.log('error: ', error)
//         reject({
//             error : (error) ? error : 'Exception',
//             message : 'general exception',
//             type : 'rejected'
//         })
//     }
// }

// function determineEven(value) {
//     const isEven = (value.result % 2) ? false : true
//     const evenInfo = {
//         result : value.result,
//         isEven : isEven
//     } 
//     console.log('evenInfo: ', evenInfo)
//     return evenInfo
// }

// function troubleWithGetNumber(reason) {
//     console.error(`Trouble getting number: ${reason.message}`);
//     throw -999; // must "throw" something, to maintain error state down the chain
// }

// function promiseGetWord(parityInfo) {
//     // The "tetheredGetWord()" function gets "parityInfo" as closure variable.
//     const tetheredGetWord = function(resolve,reject) {
//     const theNumber = parityInfo.result
//     const threshold = u.randomDice(20)
//         console.log('threshold: ', threshold)
//     if(theNumber >= threshold) {
//         reject(`Is to large: ${theNumber}`)
//     } else {
//         parityInfo.wordEvenOdd = parityInfo.isEven ? 'even' : 'odd'
//         resolve(parityInfo)
//     }
//     return
//     }
//     return new Promise(tetheredGetWord)
// }

// (new Promise(determineFunction))
//   .then(determineEven,troubleWithGetNumber)
//   .then(promiseGetWord)
//   .then((info) => {
//     console.log('Got: ', info.result ,', that is ', info.wordEvenOdd);
//     return info;
//   })
//   .catch((reason) => {
//       console.log('reason: ', reason)
//     if(reason === -999) {
//       console.error("Had previously handled error");
//     }
//     else {
//       console.error(`Trouble with promiseGetWord(): ${reason}`);
//     }
//    })
//   .finally((info) => console.log("All done"));

// console.log('hey billy')

// function resolveAfter2Seconds(x) {
//     return new Promise(resolve => {
//       setTimeout(() => {
//         resolve(x);
//       }, 2000);
//     });
//   }
  
//   async function f1() {
//     var x = await resolveAfter2Seconds(10);
//     console.log(x); // 10
//   }
  
//   f1();


