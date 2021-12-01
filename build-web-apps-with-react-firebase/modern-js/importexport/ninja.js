const ninjas = ['Buland', 'Qasim', 'Ali'];

const formatNinjas = () => {
    let val = '';
    ninjas.forEach( ninja => val += ninja + ', ' )
};

const greet = () => {
    console.log(ninjas[0], 'says Hello!!!!')
};

//greet();

export { formatNinjas, greet }; 

export default ninjas;