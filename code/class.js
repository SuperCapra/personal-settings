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
class MonsterA {
  rand = Math.random()
  growl = () => {
    console.log('grrrr ' + this.rand)
  }
}

class MonsterB {
  rando = Math.random()
}
//with the prororype function the fat arrow function the key word this does not work
MonsterB.prototype.growl = function() {
  const randGrowl = Math.random()
  console.log('grrrr ' + randGrowl + ' ' + this.rando)
}

const monsterA1 = new MonsterA()
const monsterA2 = new MonsterA()
const monsterB1 = new MonsterB()
const monsterB2 = new MonsterB()

// monsterA1.growl()
// monsterA2.growl()
// monsterB1.growl()
// monsterB2.growl()

let MONSTER = function() {
  this.growl = () => {
    console.log('grrrr ')
  }
}

MONSTER.prototype.upateGrowl = function(value) {
  this.growl = () => {
    console.log(value)
  }
}

let monster1 = new MONSTER()
let monster2 = new MONSTER()

monster1.growl()
monster2.growl()
monster2.upateGrowl('wof')
monster1.growl()
monster2.growl()

let DOG = function() {}
DOG.prototype.bark = function() {
    console.log('bark')
}

DOG.prototype.upateBark = function(value) {
  DOG.prototype.bark = () => {
    console.log(value)
  }
}

let dog1 = new DOG()
let dog2 = new DOG()

dog1.bark()
dog2.bark()
dog2.upateBark('wof')
dog1.bark()
dog2.bark()


// x is a method assigned to the object using "this"
var A = function () {
  this.x = function () { console.log('A'); };
};
A.prototype.updateX = function( value ) {
  this.x = function() { console.log( value ); }
};

var a1 = new A();
var a2 = new A();
a1.x();  // Displays 'A'
a2.x();  // Also displays 'A'
a1.updateX('Z');
a1.x();  // Displays 'Z'
a2.x();  // Still displays 'A'

// Here x is a method assigned to the object using "prototype"
var B = function () { };
B.prototype.x = function () { console.log('B'); };

B.prototype.updateX = function( value ) {
  B.prototype.x = function() { console.log( value ); }
}

var b1 = new B();
var b2 = new B();
b1.x();  // Displays 'B'
b2.x();  // Also displays 'B'
b1.updateX('Y');
b1.x();  // Displays 'Y'
b2.x();  // Also displays 'Y' because by using prototype we have changed it for all instances