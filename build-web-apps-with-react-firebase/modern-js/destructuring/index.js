const person = {
    firstName: 'Buland',
    lastName: 'Malik',
    age: 41
};

//const firstName = person.firstName;
//const lastName = person.lastName;

//--------------------- Object Destructuring
//ordering does not matter while retriving as we grab them using object properties
const {lastName, firstName} = person;

//create custom vars as ln & fn
const {lastName:ln, firstName:fn} = person;

console.log(ln, fn);

//--------------------- Array Destructuring
 const nums = [1,3,7,5,9]

 const [a,b,c] = nums;

 console.log(a,b,c);

 
 //--------------------- Function returning Object
 const getCalculations = (a,b) => {
    return ({
        sum: a+b,
        diff: Math.abs(a-b),
        product: a* b,
    });
 };

 //order does not matter while destructuring
 const {sum, product, diff} = getCalculations(5,3);
 console.log("getCalculations(5,3) Sum=", sum, "diff=",diff, "product=",product);

  
 //--------------------- Function returning Array
 const getCalculationsWithArray = (a,b) => {
    return ([
        a+b,
        Math.abs(a-b),
        a* b,
    ]);
 };

 //order does matter while destructuring
 const [sum1, diff1, product1] = getCalculationsWithArray(5,3);
 console.log("getCalculationsWithArray(5,3) Sum=", sum1, "diff=",diff1, "product=",product1);

 
 //--------------------- Function Params with Destructuring
 const doSomething = ({name}) => {
    console.log("Name:",name);
 };
 doSomething({name: 'Buland Malik', age:55})