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