import React from 'react'
import { useState,useEffect } from "react"

export default function CalendarCard({data}) {
  
  const [Date, setDate] = useState("");

  useEffect(() => {
    setDate(data.src[0].date);
  }, [])
  

  return (
    <div className='w-full h-1/6 mt-[3%]'>
        <div className='w-full h-1/2'>
            <h1 className='text-[120%]'>{Date.replace(".txt","")}</h1>
        </div>
        <div className='w-full h-1/2'>
            <p>Esemény: {data.src[1].description}</p>
        </div>
    </div>
  )
}
