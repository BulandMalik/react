import { useSortList, SORT_ASC, SORT_DESC } from "./useSortList";

export const useColorToolStore = (initialColors) => {

    const [ sortedColors, addColor, replaceColor, removeColor, 
            sortCol, setSortCol, sortDir, setSortDir ] = useSortList([ ...initialColors ], 'id', SORT_ASC);

    const sortColors = () => {
    if (sortCol === 'name' && sortDir === SORT_DESC) {
        setSortCol('id');
        setSortDir(SORT_ASC);
    } else if (sortCol === 'id') {
        setSortCol('name');
    } else {
        setSortDir(SORT_DESC);
    }
    };

/*    
    return [
        sortedColors,
        addColor,replaceColor,removeColor,
        sortCol, sortDir,
        sortColors
    ];
*/
    return {
        sortedColors,
        addColor,replaceColor,removeColor,
        sortCol, sortDir,
        sortColors
    };
};