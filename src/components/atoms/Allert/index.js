import React, { useEffect, useRef } from 'react'
import { useSelector, useDispatch, shallowEqual } from "react-redux"
import { globalAllertAction, globalAllertSelectors } from '../../../redux'

const Allert = () => {
  const dispatch = useDispatch()
  const allert = useSelector(globalAllertSelectors, shallowEqual)
  const ref = useRef()

  useEffect(() => {
    if (allert.show) {
      setTimeout(() => {
        dispatch(globalAllertAction({ show: false, message: "" }))
      }, 3000);
    }
  }, [allert]);

  const clickOutside = (e) => {
    if (ref.current?.contains(e.target) === false) {
      dispatch(globalAllertAction({ show: false, message: "" }))
    }
  }

  useEffect(() => {
    window.addEventListener("mousedown", clickOutside)
    return () => {
      window.removeEventListener("mousedown", clickOutside)
    }
  }, [clickOutside])


  if (allert.show) {
    return (
      <div ref={ref} className='absolute bg-red-500 h-10 w-full top-0 left-0 right-0 flex justify-center items-center'>
        <p className='text-center font-bold text-white'>
          {typeof allert.message !== "string"
            ? allert.message[0].message
            : allert.message}
        </p>
      </div>
    )
  }
  return <div />

}

export default Allert