import React from 'react';

const Todo = props => {
    return (
        <div className={`item${props.item.finished ? ' finished' : ''}`}>
            <p onClick={() => props.toggleItem(props.item.id)}>{props.item.name}</p>
        </div>
    )
};

export default Todo;