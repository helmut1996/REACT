import React from 'react'

const TodoList = ({children}) => {
  return (
    <div className="card">
 <ul className='list-group list-group-flush'>
       {children}     
    </ul>
    </div>
   
  );
}

export {TodoList}; 