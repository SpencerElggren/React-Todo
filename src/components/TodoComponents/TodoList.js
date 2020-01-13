import React from "react";
import Todo from "./Todo";

const TodoList = props => {
    return (
        <div>
            {props.items.map(item => (
                <Todo key={item.id} item={item} toggleItem={props.toggleItem}/>
            ))}
            <button onClick={props.clearItems}>Clear Completed</button>
        </div>
    )
}

export default TodoList;
