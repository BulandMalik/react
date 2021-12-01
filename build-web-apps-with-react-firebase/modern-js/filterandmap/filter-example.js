const ninjas = [
    {name: 'Buland', belt:'black'},
    {name: 'Ali', belt:'Blue'},
    {name: 'Qasim', belt:'Red'},
    {name: 'Shahzad', belt:'black'},
]


const blackBelts1 = ninjas.filter( ninja => {
    return false;
}); //Output ==> [] //empty array as for every array item it returns false
console.log(blackBelts1);

const blackBelts2 = ninjas.filter( ninja => {
    return true;
}); //Output ==> same as ninjas // as for every array item it returns true
console.log(blackBelts2);

const blackBelt3 = ninjas.filter( ninja => {
    return (ninja.belt == 'black');
}); //Output [ { name: 'Buland', belt: 'black' },{ name: 'Shahzad', belt: 'black' } ]
console.log(blackBelt3);

//same as above
const blackBelt4 = ninjas.filter( ninja => (ninja.belt == 'black')); //Output [ { name: 'Buland', belt: 'black' },{ name: 'Shahzad', belt: 'black' } ]
console.log(blackBelt4);