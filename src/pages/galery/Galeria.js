import React from 'react'
import { useState, useEffect } from 'react';
import GaleryCards from './GaleryCards';

function Galeria() {
  const [Year, setYear] = useState([]);

  const FetchYear = async () => {
    const response = await fetch("http://localhost:9001/get_path/galery_path/0");
    const res = await response.json();

    setYear(res.links);
    
  }

  useEffect(() => {
    FetchYear()
  },[])

  return (
    <div className='w-full bg-white grid place-items-center overflow-auto'>
        {
        Year.map((Data,index) => (
          <GaleryCards key={index} year={Data} />      
        ))
        }
    </div>
  )
}

export default Galeria;