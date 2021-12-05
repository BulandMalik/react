import { createContext , useContext } from 'react';
import { useCarToolStore  } from '../hooks/useCarToolStore';

const carToolStoreContext = createContext();

//children is ColorTaool
export const CarToolStoreProvider = ({cars, children}) => {
    return <carToolStoreContext.Provider
            value={useCarToolStore([...cars])}>
            {children}
    </carToolStoreContext.Provider>;
};

export const useCarToolStoreContext = () => {
    return useContext(carToolStoreContext);
};