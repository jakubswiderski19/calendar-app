import React, { useContext } from 'react'
import modalContext from '../contexts/modalContext'

const Modal = ({event}) => {
    console.log(event);
    const clickModal = useContext(modalContext)
  return (
    <div className='fixed h-screen w-screen flex justify-center items-center bg-gray-900/[0.2]'>
        <div className='shadow-xl rounded-lg p-8 bg-gray-300/[0.7] flex flex-col justify-center'>
            <button onClick={() => clickModal()} className='hadow-xl rounded-lg aspect-square p-3 bg-gray-300/[0.6] self-end justify-self-end flex justify-center items-center transition-transform hover:scale-[1.2]'>X </button>
            <div className='flex justify-center items-center flex-col'>
                <h1 className='font-black text-4xl'>{event.title}</h1>
                
                <h2 className='text-xl'>
                    {event.date.getDate()} {event.date.getMonth() + 1} {event.date.getFullYear()}
                </h2>

                <p className='font-thin'>
                {event.description}
                </p>
                
            </div>
        
        </div>
    </div>
  )
}

export default Modal