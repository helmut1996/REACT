import React from "react";
import { useLocalStorage } from "../PrimerComponent/useLocalStorage";
import { AppUI } from "./AppUI";

/*const defaultTodo = [
  {text: 'pelar cebolla', completed: true},
  {text: 'ver el curso de react js de platzi', completed: true},
  {text: 'ver el capitulo de one piece', completed: false},
  {text: 'jugar fornite', completed: false},
  {text: 'Usando estados derivados ', completed: true},
]


localStorage.setItem('TODOS_V1',defaultTodo);
localStorage.removeItem('TODOS_V1');
*/

const PrimerComponent = () => {
  const {
   item: todos,
   SaveItemStorage: saveTodos,
  loading,
  error,
} = useLocalStorage("TODOS_V1", []);

  const [filterValue, setFilter] = React.useState("");

  //Descomposicion de estados
  const TodoCompleted = todos.filter((todo) => !!todo.completed).length;

  const Totaltodo = todos.length;

  const SerachedTodo = todos.filter((todo) => {
    return todo.text.toLowerCase().includes(filterValue.toLocaleLowerCase());
  });

  const TodoComplete = (text) => {
    const NewTodo = [...todos];
    const todoIndex = NewTodo.findIndex((todo) => todo.text === text);
    NewTodo[todoIndex].completed = true;
    saveTodos(NewTodo);
  };

  const TodoDelete = (text) => {
    const NewTodo = [...todos];
    const todoIndex = NewTodo.findIndex((todo) => todo.text === text);
    NewTodo.splice(todoIndex, 1);
    saveTodos(NewTodo);
  };

  return (
    <AppUI
    loading={loading}
    error={error}
      TodoCompleted={TodoCompleted}
      Totaltodo={Totaltodo}
      filterValue={filterValue}
      setFilter={setFilter}
      SerachedTodo={SerachedTodo}
      TodoComplete={TodoComplete}
      TodoDelete={TodoDelete}
    />
  );
};

export default PrimerComponent;
