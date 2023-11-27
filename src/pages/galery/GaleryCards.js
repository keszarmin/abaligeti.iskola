import React from 'react'
import { useEffect, useState } from 'react';

function GaleryCards({year}) {
    const [Url, setUrl] = useState([]);
  
    const FetchURL = async () => {
        const response = await fetch(`http://localhost:9001/get_path/galery/${year}`);
        const res = await response.json();
    
        setUrl(res);
    }

    useEffect(() => {
        FetchURL()
    }, [])
    
  return (
      <>
        <div className='w-[85%] h-max mt-[2%] bg-slate-500 rounded-2xl'>
            <div className='w-full text-center'>
                <h1 className='text-[150%]'>Év: {year}</h1>
            </div>  
            <div className='flex justify-center items-center gap-[1%] flex-wrap '>
                {
                    Url.map((Data,index) => (
                        <img key={index} alt={Data.src} className='max-w-[10%] rounded-2xl' src={Data.src} />
                    ))
                }
            </div>
        </div>        
      </>
  )
}

export default GaleryCards;
