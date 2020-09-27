import React from "react"

const ToDoList = () => {
    return (
        <div>
            <h1>To Do List</h1>
            <ul>
                <li>Do the laundry</li> <input type="checkbox" />
                <li>Feed the animals</li> <input type="checkbox" />
                <li>Buy groceries</li> <input type="checkbox" />
                <li>Call insurance</li> <input type="checkbox" />
                <li>Apply for new job</li> <input type="checkbox" />
            </ul>
        </div>
    )
};

export default ToDoList