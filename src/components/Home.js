import React from 'react'

import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment, incrementByAmount } from '../slices/counter/counterSlice'
const Home = () => {

  const count = useSelector((state) => state.counter.counter.value)
  const dispatch = useDispatch()
  return (


    <div>
      <div>
        <button
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
        >
          Increment
        </button>
        <span>{count}</span>
        <button
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
        >
          Decrement
        </button>

        <hr />
        <button
          aria-label="Increment value"
          onClick={() => dispatch(incrementByAmount(100))}
        >
          Increment by amount
        </button>
        <hr />
      </div>
    </div>


  )
}

export default Home
