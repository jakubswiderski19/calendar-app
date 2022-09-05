import React from 'react'
import { useContext } from 'react'
import modalContext from '../contexts/modalContext'

const Day = ({children, className, event, day}) => {

const modalClick = useContext(modalContext);

if(Object.keys(event).length === 0)
{
    return (
        <div className={`${className} shadow-xl rounded-lg p-4 m-2 font-medium bg-gray-300/[0.1] text-center aspect-square transition-transform  hover:scale-[1.2]`} onClick={() => modalClick({
            title: "No title",
            description: "No description",
            date: day
        })}>
            {children}
        </div>
      )
} else {
    return (
        <div className={`${className} shadow-xl rounded-lg p-4 m-2 font-medium bg-zinc-50/[0.5] text-center aspect-square transition-transform  hover:scale-[1.2]`} onClick={() => modalClick(event)}>
            {children}
        </div>
      )
}
  
}

export default Day