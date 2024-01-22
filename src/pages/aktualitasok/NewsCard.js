import React from 'react'

export default function NewsCard({img,description}) {
    return (
    <div className='w-[80%] h-1/4 flex justify-center items-center mr-auto ml-auto mb-3 bg-white rounded-3xl'>
        <div className='w-[30%] min-h-[20vh] flex justify-center items-center'>
            <img className='w-[60%]  rounded-3xl' src={img.src[0]?.img_src} />
        </div>
        <div className='w-[70%] h-full flex justify-center items-center'>
            <p>{description.src[1]?.description}</p>
        </div>
    </div>
  )
}