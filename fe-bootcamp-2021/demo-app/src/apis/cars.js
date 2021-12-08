

/*
export const all = () => {
    return fetch("http://localhost:3060/colors")
    .then( res => res.json()) //res.json is an async vs JSON.parse is a sync process, res.json() not using main thread
};
*/

export const all = async () => {
    //await in front of calls retuning promises
    const res = await fetch("http://localhost:3060/cars");
    const colors = await res.json(); //res.json is an async vs JSON.parse is a sync process, res.json() not using main thread
    return colors;
};

export const one = async (carId) => {
    //await in front of calls retuning promises
    const res = await fetch(`http://localhost:3060/cars/${carId}`);
    const color = await res.json(); //res.json is an async vs JSON.parse is a sync process, res.json() not using main thread
    return color;
};

export const addCar = async (car) => {
    try {
        const res = await fetch("http://localhost:3060/cars", { //options obj
        method: 'POST',
        headers: { 'Content-Type': 'application/json'},
        body: JSON.stringify( car ),
      });
      const newCar = await res.json();
      return newCar;    
    }
    catch {
        //handle errors
    }
}

/*
export const editCar = async (carId) => {
    const res = await fetch(`http://localhost:3060/cars/${carId}`, { //options obj
        method: 'PUT',
        headers: { 'Content-Type': 'application/json'},
        body: JSON.stringify( {name: 'yellow'} ),
    });

    const updatedCar = await res.json();
    return updatedCar;
}
*/

export const replaceCar = async (car) => {
    const res = await fetch(`http://localhost:3060/cars/${car.id}`, { //options obj
        method: 'PUT',
        headers: { 'Content-Type': 'application/json'},
        body: JSON.stringify( car ),
    });

    const updatedCar = await res.json();
    return updatedCar;
}

export const deleteCar = async (carId) => {

    const res = await fetch(`http://localhost:3060/cars/${encodeURIComponent(carId)}`, { //options obj
        method: 'DELETE',
    });

    return await res.json();
}