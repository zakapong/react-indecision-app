class Person{
constructor(name = 'Anonymous', age = 0){
  this.name = name;
  this.age = age;
}

getGretting(){
    return `Hi, i am ${this.name}`;
}


getDrescription(){
    return `${this.name} is ${this.age} years old`;
}
}

class Student extends Person {
    constructor(name, age, major) {
      super(name, age);
      this.major = major;
    }
    hasMajor() {
      return !!this.major;
    }
    getDrescription() {
      let description = super.getDrescription();
  
      if (this.hasMajor()) {
        description += ` Their major is ${this.major}.`;
      }
  
      return description;
    }
  }


  class Traver extends Person {
    constructor(name, age, homeLocation) {
      super(name, age);
      this.homeLocation = homeLocation;
    }
    hasHomeLocation() {
      return !!this.homeLocation;
    }
    getGretting() {
      let greeting = super.getGretting();
  
      if (this.hasHomeLocation()) {
        greeting += `. I am visiting from ${this.homeLocation}.`;
      }
  
      return greeting;
    }
  }

/*
const me = new Student('Zakaria Mahmud', 26, 'Malmo');
console.log(me.getDrescription());

const other = new Student();
console.log(other.getDrescription());

*/

const me = new Traver('Zakaria Mahmud', 26, 'Malmo');
console.log(me.getGretting());

const other = new Traver(undefined, undefined, 'Nowhere');
console.log(other.getGretting());