class Student {
    constructor(passMark, id) {
      this.passMark = passMark
      this.id = id
      this.subjectsMark = []
    }
    //@logger
    getSubjectsMark() {
      console.log(this.subjectsMark)
    }

    get Id() {
        console.log(`The id of the student is: ${this.id}`)
    }

    hasPassed(mark) {
      return mark >= this.passMark
    }
    // here the method works beacuse the fat arrows function maintain the conytext given by this
    addSubjects(arraySubjects) {
      arraySubjects.forEach(subject => {
        let result = {...subject, isPassed : this.hasPassed(subject.mark)}
        this.subjectsMark.push(result)
      })
    }
    // if it was like this the method does not work beacuse the context is not the same in the forEach function
    // addSubjects(arraySubjects) {
    //   arraySubjects.forEach(function(subject) {
    //     let result = {...subject, isPassed : this.hasPassed(subject.mark)}
    //     this.subjectsMark.push(result)
    //   })
    // }
}

//i have tried but i am not able to cofigure the decorators...
function logger(target, name, descriptor) {
    const func = desxcriptor.value
    descriptor.value = function(...args) {
        console.log(`Arguments are ${JSON.stringify(args)}`)
        func(...args)
    }
    return descriptor
}

let student = new Student(18, 693)
let marksAndSubjects = [{subject : 'Math', mark : 28}, {subject : 'History', mark : 17}]

student.addSubjects(marksAndSubjects)
student.getSubjectsMark()
student.Id

student.id = 891
student.Id

class Vehicle {
  constructor(age, brand) {
    this.age = age,
    this.brand = brand
  }

  get Age() {
    return this.age
  }
  get Brand() {
    return this.brand
  }
}

class Bike extends Vehicle {
  constructor(age, brand, tyreWidth, size, maxRearGear, maxFrontGear, minRearGear, rearGear) {
    super(age, brand),
    this.tyreWidth = tyreWidth,
    this.size = size
    this.maxRearGear = maxRearGear
    this.maxFrontGear = maxFrontGear
    this.minRearGear = minRearGear
    this.rearGear = rearGear
  }

  get TyreWidth() {
    return this.tyreWidth
  }
  get Size() {
    return this.size
  }
  get RearGear() {
    return this.rearGear
  }

  calculateRollingResistence() {
    let randomWeatherInfo = getRandomWeatherInfo()
    let ratio = randomWeatherInfo.ratio * this.tyreWidth
    console.log(`The rolling resistance given by this day of ${randomWeatherInfo.wheater} is ${ratio.toFixed(2)}`)
  }

  changeRearGear() {
    if(this.rearGear === this.maxRearGear) {
      this.rearGear += 1
      console.log('gear changed down')
    } else {
      this.rearGear -= 1
      console.log('gear changed up')
    }
  }
}


getRandomWeatherInfo = function() {
  let ratio = Math.random().toFixed(2)
  let wheater = 'sunny'
  if(ratio >= 0.3 && ratio < 0.7) {
    wheater = 'cloudy'
  } else if(ratio >= 0.7) {
    wheater = 'rainy'
  }
  return {ratio : ratio, wheater : wheater}
}

let bike = new Bike(2, 'giant', 25, 54, 11, 53, 30, 15)
let bike2 = new Bike(2, 'bmc', 25, 54, 12, 52, 32, 9)
bike.calculateRollingResistence()
Bike.prototype.calculateWheelSpinLength = function() {
  console.log('this.maxRearGear', this.maxRearGear)
  let lengthSpinRatio = this.maxFrontGear / this.maxRearGear
  let lengthSpin = ((lengthSpinRatio) * Math.PI * 700).toFixed(2)
  console.log(`The length of a wheel spin is ${lengthSpin} in millimeters, hence spinned ${lengthSpinRatio.toFixed(2)} times. We are talking about the ${this.brand}`)
}
bike.calculateWheelSpinLength()
bike2.calculateWheelSpinLength()

bike.changeRearGear()
console.log('bike gear of the first bike, before protorype', bike.RearGear)
bike2.changeRearGear()
console.log('bike gear of the second bike, before protorype', bike2.RearGear)

Bike.prototype.changeRearGear = function() {
  if(this.rearGear === this.maxRearGear) {
    this.rearGear += 1
    console.log('gear changed down')
  } else if(this.rearGear === this.minRearGear) {
    this.rearGear -= 1
    console.log('gear changed up')
  } else if(this.rearGear > this.maxRearGear && this.rearGear < this.minRearGear ) {
    let ranomchoice = Math.random()
    if(ranomchoice < 0.5) {
      this.rearGear -= 1
      console.log('gear changed up')
    } else {
      this.rearGear += 1
      console.log('gear changed down')
    }
  } else {
    console.log('the gear is broken')
  }
}

bike.changeRearGear()
console.log('bike gear of the first bike, after protorype', bike.RearGear)
bike2.changeRearGear()
console.log('bike gear of the second bike, after protorype', bike2.RearGear)