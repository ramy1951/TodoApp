import React from 'react';
import TodoItem from '../todoItem/todoItem';

const ItemList = ({itemList}) => {
    // console.log("The incoming list looks like this: " + JSON.stringify(ItemList, undefined, 4))

    return (
        <div>
           {itemList.map( (item) => <TodoItem title={item} /> )}
        </div>
     );
};

export default ItemList;