// arguments object - no longer bound with arrow functions

const add = (a, b) => {
    // console.log(arguments);
    return a + b;
  };
  console.log(add(55, 1, 1001));
  
  // this keyword - no longer bound
  
  const user = {
    name: 'Andrew',
    cities: ['Philadelphia', 'New York', 'Dublin'],
    printPlacesLived() {
      return this.cities.map((city) => this.name + ' has lived in ' + city);
    }
  };
  console.log(user.printPlacesLived());
  


  // Challenge area

  const multiplier = {
  //numbers --array of numbers
  numbers: [1, 2, 3, 4, 56, 7, 8, 9, 10],
  //multiplyBy -single number
  multiplyBy: 3,
  //multiply - return a new aray where the number have been multiplied
  multiply() {
    return this.numbers.map((number) => this.multiplyBy * number);
  }

  };

  console.log(multiplier.multiply());