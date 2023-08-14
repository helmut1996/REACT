import React, { useEffect, useRef } from 'react'
import lottie from 'lottie-web';
import anim from   "../../utils/loading.json";


 const LoadingTodo = () => {
    
    const container = useRef(null)
    useEffect(()=>{
        lottie.loadAnimation({
            container: container.current,
            renderer: 'svg',
            loop:true,
            autoplay:true,
            animationData: anim
        })
    }, [])

    return (
    <div className='container'>
        <div ref={container}></div>
    </div>
  )
}
export { LoadingTodo}