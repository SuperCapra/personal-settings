console.log('ciao')

let array = [1,2,3,4,4,5,4,4]
for(let i = 0; i < array.length; i++) {
    if(array[i] === 4) {
        array.splice(i,1);
        i--;
    }
}
console.log('array', array)

function Person(firstName, lastName, eyeColor) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.eyeColor = eyeColor;
}
Person.job = 'Developer'

const myFather = new Person('john', 'doe');
console.log(myFather.job);
console.log(Person.job);
    
function changevalue(p) {
    p = 5
}

let a = 10
let b = a

changevalue(b)
console.log('changing', a + ' - ' + b)

let ar = [1,2,3,4,5,6,7,8,9,10,11];
let output = 0;
 
for(let num of ar) {
    if(output > 10) {
        break;
    }
    if(num % 2 === 0) {
        continue;
    }
    output += num;
}
console.log('array', output) 

const objBook = {
    title: 'Javascript'
};
Object.preventExtensions(objBook);
const newObjBook = objBook;
newObjBook.author = 'Robert';
console.log('objBook',objBook)
console.log('newObjBook',newObjBook)

const objBook2 = {
    title: 'Javascript'
};
const newObjBook2 = objBook2;
newObjBook2.author = 'Robert';
console.log('objBook2',objBook2)
console.log('newObjBook2',newObjBook2)
    

const toNumber = (strOrNum) => +strOrNum
console.assert(toNumber('2') === 2, 'toNumber(\'2\') === 2')
console.assert(Number.isNaN(toNumber()), 'Number.isNaN(toNumber())');
console.assert(toNumber('-3') < 0, 'toNumber(\'-3\') < 0');
console.assert(toNumber() === NaN, 'toNumber() === NaN');


const searchText = 'Yay! Salesforce is amazing!';

let result1 = searchText.search(/sales/i);
let result2 = searchText.search(/sales/);

console.log(result1);
console.log(result2);

let value = NaN
console.log('value !== value',value !== value)
console.log('Number.isNaN(value)',Number.isNaN(value))
console.log('value == NaN',value == NaN)
console.log('value === Number.NaN',value === Number.NaN)
console.log('Object.is(value, NaN)',Object.is(value, NaN))

let arr1 = [1,2,3,4,5]
let arr2 = [1,2,3,4,5]
let arr3 = [1,2,3,4,5]
let arr4 = [1,2,3,4,5]
let arr5 = [1,2,3,4,5]
let x1 = arr1.filter((a) => (a < 2))
let x2 = arr2.splice(2,2)
let x3 = arr3.slice(2)
let x4 = arr4.filter((a) => { return a > 2})
let x5 = arr5.slice(2, 5)

console.log('x1', x1)
console.log('x2', x2)
console.log('x3', x3)
console.log('x4', x4)
console.log('x5', x5)

function Animal(size,type) {
    this.type = type || 'Animal';
    this.canTalk = false;
}

Animal.prototype.speak = function() {
    if(this.canTalk) {
        console.log('It spoke!')
    }
}

let Pet = function(size, type, name, owner) {
    Animal.call(this, size, type);
    this.size = size;
    this.name = name;
    this.owner = owner;
}

Pet.prototype = Object.create(Animal.prototype);
let pet1 = new Pet()
    
console.log('pet1.canTalk', pet1.canTalk)
console.log('pet1.name', pet1.name)
console.log('pet1.type', pet1.type)
console.log('pet1.owner', pet1.owner)
console.log('pet1.talk', pet1.talk)
console.log('pet1.speak', pet1.speak)
console.log('pet1.size', pet1.size)

let window = {
    location : {
        href : 'https://bups.com'
    }
}
setCurrentUrl();
console.log('the current URL is: ' + url);


function setCurrentUrl() {
    url = window.location.href;
}

function y() {
	if(y === undefined) {
			return 'y is undefined'
		}
	if(y === null) {
			return 'y is null'
		}
	return 'y is nor null nor undefined'

}
let y
y()

