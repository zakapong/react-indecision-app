// function square(x) {
//   return x * x;
// };

// console.log(square(3));

// // const squareArrow = (x) => {
// //   return x * x;
// // };

// const squareArrow = (x) => x * x;

// console.log(squareArrow(4));


// Challenge - Use arrow functions
// getFirstName('Mike Smith') -> "Mike"
// Create regular arrow function
// Create arrow function using shorthand syntax



const getFirstName = (name) => {
    
    return name.split(' ')[0];
    
     };

console.log(getFirstName('Zakaria Mahmud'));




const firstNameExpression = (nemo) => nemo.split(' ')[0];

console.log(firstNameExpression('Zakaria Mahmud'));