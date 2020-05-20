import React from 'react';

const TodoItem = (props) => {
        return (
            <div className="ItemDiv">
                <h2>{props.title}</h2>
            </div>
        );
}

export default TodoItem;