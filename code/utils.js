exports.randomDice = function(faces) {
    let rand = Math.random()
    rand *= (faces - 1)
    rand = (Number(rand.toFixed(0)) + 1)
    return rand
}

exports.sleep = function(times) {
    return new Promise(resolve => setTimeout(resolve, times))
}

exports.sleepWithCount = function(times) {
    if(times > 1000) {
        console.log('times total:', times)
        let decimal = Number((times / 1000).toFixed(0))
        let remainder = times % 1000
        let intervalledTiming = setInterval(() => {
            decimal -= 1
            console.log(decimal)
            if(decimal === 0) {
                clearInterval(intervalledTiming)
            }
        }, 1000)
        if(remainder > 0) {
            setTimeout(() => {
                return
            }, remainder)
        }
    } else {
        console.log('remainder:', times)
        setTimeout(() => {
            return
        }, times)
    }
    return new Promise(resolve => setTimeout(resolve, 0))
}