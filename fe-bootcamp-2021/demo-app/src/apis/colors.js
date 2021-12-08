

/*
export const all = () => {
    return fetch("http://localhost:3060/colors")
    .then( res => res.json()) //res.json is an async vs JSON.parse is a sync process, res.json() not using main thread
};
*/

export const all = async () => {
    //await in front of calls retuning promises
    const res = await fetch("http://localhost:3060/colors");
    const colors = await res.json(); //res.json is an async vs JSON.parse is a sync process, res.json() not using main thread
    return colors;
};

export const one = async (colorId) => {
    //await in front of calls retuning promises
    const res = await fetch(`http://localhost:3060/colors/${colorId}`);
    const color = await res.json(); //res.json is an async vs JSON.parse is a sync process, res.json() not using main thread
    return color;
};

export const addColor = async (color) => {
    try {
        const res = await fetch("http://localhost:3060/colors", { //options obj
        method: 'POST',
        headers: { 'Content-Type': 'application/json'},
        body: JSON.stringify( color ),
      });
      const newColor = await res.json();
      return newColor;    
    }
    catch {
        //handle errors
    }
}


export const editColor = async (colorId) => {
    const res = await fetch(`http://localhost:3060/cars/${colorId}`, { //options obj
        method: 'PUT',
        headers: { 'Content-Type': 'application/json'},
        body: JSON.stringify( {name: 'yellow'} ),
    });

    const updatedColor = await res.json();
    return updatedColor;
}

export const replaceColor = async (color) => {
    const res = await fetch(`http://localhost:3060/colors/${color.id}`, { //options obj
        method: 'PUT',
        headers: { 'Content-Type': 'application/json'},
        body: JSON.stringify( color ),
    });

    const updatedColor = await res.json();
    return updatedColor;
}

export const deleteColor = async (colorId) => {

    /*return fetch(`http://localhost:3060/cars/${encodecURIComponent(colorId)}`, { //options obj
        method: 'DELETE',
    });*/
    const res = await fetch(`http://localhost:3060/colors/${encodeURIComponent(colorId)}`, { //options obj
        method: 'DELETE',
    });

    return await res.json();
}