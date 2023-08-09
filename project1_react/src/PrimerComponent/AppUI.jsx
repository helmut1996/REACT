import React from 'react'
import { TodoCounter } from "../Components/TodoCounter";
import { TodoFilter } from "../Components/TodoFilter";
import { TodoForm } from "../Components/TodoForm";
import { TodoList } from "../Components/TodoList";
import { TodoItem } from "../Components/ToddItem";
import "../styles/TodoItem.css";

 const AppUI = (
    {
            TodoCompleted,
            Totaltodo,
            filterValue,
            setFilter,
            SerachedTodo,
            TodoComplete,
            TodoDelete,
    }
    ) => {
    return (
        <React.Fragment>
          <div className="row">
            <div className="col-md-6">
              <TodoForm />
              {/*<TodocreateButton/>*/}
            </div>
    
            <div className="col-md-6">
              <TodoCounter completed={TodoCompleted} total={Totaltodo} />

              <TodoFilter filterValue={filterValue} setFilter={setFilter} />
    
              <TodoList>
                {SerachedTodo.map((todo) => (
                  <TodoItem
                    key={todo.text}
                    text={todo.text}
                    completed={todo.completed}
                    onComplete={() => TodoComplete(todo.text)}
                    onDelete={() => TodoDelete(todo.text)}
                  />
                ))}
              </TodoList>
            </div>
          </div>
        </React.Fragment>
      );
}

export {AppUI}
