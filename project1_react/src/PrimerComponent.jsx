import { TodoCounter } from "./Components/TodoCounter";
import { TodoFilter } from "./Components/TodoFilter";
import { TodoForm } from "./Components/TodoForm";
import { TodoList } from "./Components/TodoList";
import './styles/TodoItem.css'
import React from 'react'

const defaultTodo = [
  {text: 'pelar cebolla', completed: true},
  {text: 'ver el curso de react js de platzi', completed: true},
  {text: 'ver el capitulo de one piece', completed: false},
  {text: 'jugar fornite', completed: false},
  {text: 'Usando estados derivados ', completed: true},
]



const PrimerComponent = () => {

  
const [todos,setTodos] = React.useState(defaultTodo)

const [filterValue,setFilter]= React.useState('')

//Descomposicion de estados 
const TodoCompleted= todos.filter(
  todo => !!todo.completed).length;
  
  const Totaltodo = todos.length;

  const SerachedTodo = todos.filter(
    (todo)=>{
     return todo.text.toLowerCase().includes(filterValue.toLocaleLowerCase())
    }
  )

const TodoComplete= (text)=>{
  const NewTodo =[...todos];
  const todoIndex= NewTodo.findIndex(
    (todo)=> todo.text == text
  );
    NewTodo[todoIndex].completed= true;
setTodos(NewTodo)
}

const TodoDelete= (text)=>{
  const NewTodo =[...todos];
  const todoIndex= NewTodo.findIndex(
    (todo)=> todo.text == text
  );
    NewTodo.splice(todoIndex,1);
    setTodos(NewTodo)
}


return (
    <React.Fragment>

      <div className="row">
        <div className="col-md-6">
          <TodoForm/>
          {/*<TodocreateButton/>*/}
        </div>


        <div className="col-md-6">
        <TodoCounter completed={TodoCompleted} total={Totaltodo}/>
    <TodoFilter
    filterValue= {filterValue}
    setFilter = {setFilter}/>

    <TodoList>
      {SerachedTodo.map(todo =>(
        <TodoItem
         key={todo.text}
         text={todo.text}
         completed= {todo.completed}
         onComplete={()=> TodoComplete(todo.text)}
         onDelete={()=> TodoDelete(todo.text)}
         />
      ))}
    </TodoList>
    
    
        </div>
      </div>
    
    </React.Fragment>
  )

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

}

export default PrimerComponent
