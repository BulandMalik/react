const ninjas = [
    {name: 'Buland', belt:'black'},
    {name: 'Ali', belt:'Blue'},
    {name: 'Qasim', belt:'Red'},
    {name: 'Shahzad', belt:'black'},
]


const ninjaNames1 = ninjas.map( ninja => {
    return 'Buland';
}); //Output ==> ['Buland','Buland','Buland','Buland'] //it iterates over as there are 4 items so everytimes it returns 'Buland'
console.log(ninjaNames1);

const ninjaNames2 = ninjas.map( ninja => {
    return ninja.name;
}); //Output ==> ['Buland','Ali','Qasim','Shahzad']
console.log(ninjaNames2);