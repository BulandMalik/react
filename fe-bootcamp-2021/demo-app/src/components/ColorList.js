
const isEmpty = arr => !Array.isArray(arr) || arr.length === 0

export const ColorList = props => {
/*
  const removeColor = (e) => {
    console.log(e.target);
    props.onDeleteColor(e.target.id);
  };
*/
  const removeColor = (id) => {
    console.log(id);
    props.onDeleteColor(id);
  };

  return (
    <ul>
      {isEmpty(props.colors)
        ? <li>No colors</li>
        : props.colors.map(color =>
        <li key={color.id}>
          {color.id} - {color.name} - {color.hexcode}
          {/*<button type="button" id={color.id} onClick={removeColor}>Delete</button>*/}
        <button type="button" onClick={() => removeColor(color.id)}>Delete</button>
        </li>
        )}
    </ul>
  );

};

ColorList.defaultProps = {
  colors: [],
};