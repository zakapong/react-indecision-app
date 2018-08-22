
/*
export const isAdult =(age)=> {
   if(age >= 18 ){
    console.log('You are adult');
   }else{
  console.log('not adult');
}

}

export const canDrink = (age)=>{
if(age >= 18){
console.log('You are adult and can drink alco');
}else{
    console.log('cant drink alco boy!')
}
}

*/

const isAdult = (age) => age >= 18;
const canDrink = (age) => age >= 21;
const isSeniorCitizen = (age) => age >= 65;

export { isAdult, canDrink, isSeniorCitizen as default };