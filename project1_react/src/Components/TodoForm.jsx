import React from 'react'
import '../styles/TodoForm.css'
const TodoForm = () => {
  return (
    <div className='container'>
<div class="mb-3">
  <textarea className='form-control' id="exampleFormControlTextarea1" rows="3"></textarea>
</div>

<div className='d-grid gap-2 d-md-flex justify-content-md-center mb-3 mt-3'>
  <button className='btn btn-primary me-md-2' 
  type="button"
  onClick={()=>{
    console.log("le a cabas de dar click ")
  }}
  >create tasks</button> 
  </div>

    <div className='d-flex justify-content-center'>
    <img src='src/img/task.png' className='img-fluid'/>
    </div>


    </div>
  )
}

export  {TodoForm}