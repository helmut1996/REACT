import React, { useState } from 'react'

const TodoFilter = ({
  filterValue,
  setFilter,
}) => {


  return (
    <>
    <div className="container">
    <input placeholder='Buscar Tarea'
     typ1e='text' 
     value={filterValue}
     className='form-control mt-3 mb-3'
     onChange={(event)=>{
      console.log(event.target.value)
      setFilter(event.target.value)
     }} />
    </div>
      
    </>
      
  )
}

export  {TodoFilter}