import React, { useState } from 'react'

const Counter = () => {
  const [count, setCount] = useState(0)

  function increaseCount() {
    const val = count + 1;
    setCount(val)
  }

  function decreaseCount() {
    const val = count - 1;
    setCount(val)
  }

  return (
    <div className='flex justify-center items-center'>
      <div className='h-[5vh] w-[10vw] border-solid border-2 flex justify-center items-center'>
        <button className='px-2 mr-5 bg-blue-500 ml-2' onClick={increaseCount}>+</button>
        <div className='px-2'>{count}</div>
        <button className='px-2 ml-5 bg-red-500 mr-2' onClick={decreaseCount}>-</button>
      </div>



      

    </div>
  )
}

export default Counter