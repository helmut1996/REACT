import React from "react";

function TodoItem(props) {
    return ( 

        <li className="list-group-item">
            <div className="input-group mb-3">
              <span 
              className={`Icon Icon-check
               ${props.completed && 
                "Icon-check--active"}`}
                onClick={props.onComplete}

              >
                <i className="fa-solid fa-circle-check"></i>
                </span>
                   <p className={`elead ${props.completed && "TodoItem-p--complete"}`} >{props.text}</p>
            </div>

            <span 
            className="Icon Icon-delete"
            onClick={props.onDelete}
            >
              <i className="fa-solid fa-trash"></i>
              </span>
        </li>
     );
}

export {TodoItem}