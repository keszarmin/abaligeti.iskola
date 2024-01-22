import React from 'react'

export default function HomeCard({name,description,img}) {
  return (
    <>
        <div className='w-[90%] h-[25vh] rounded-3xl bg-violet-700 mt-[5%] overflow-hidden'>
            <div className='w-full h-[20%] flex justify-center items-center'>
                <div className='w-min h-max'>
                    <h1 className='text-[150%]'>{name}</h1>
                </div>
            </div>         
            <div className='w-full h-[80%]'>
                <div className='w-1/2 h-full flex justify-center items-center'>   
                    <img className='max-w-[70%] h-auto' src={img} alt={img} />
                </div>
                <div>
                    <p>{description}</p>
                </div>
            </div>
        </div>
    </>
  )
}
