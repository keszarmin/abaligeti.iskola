import React from 'react'

function DocumentCard({src,name}) {
  return (
    <div className='w-[90%] h-[10%] inline-flex justify-center items-center' id='document_element_5'>
                <div className='flex justify-center items-center w-1/2' id='document_element_1'>
                    <div className='w-max h-min'>
                        <p>Dokumentum Neve: {name}</p>
                    </div>
                </div>
                <div className='flex justify-center items-center w-1/2' id='document_element_2'>
                        <button onClick={() => {
                            document.getElementById("document_element_1").style.display = "none";
                            document.getElementById("document_element_2").style.display = "none";
                            document.getElementById("document_element_4").style.display = "block";
                            document.getElementById("document_element_5").style.height = "100%"
                        }} className='border-2 border-sky-200 bg-sky-200 rounded-3xl w-[30%] hover:border-sky-600 hover:border-2'
                        >Megnyitás</button>
                </div>
                <div id='document_element_4' className='w-full h-[95%] hidden'>
                    <div className='w-full h-[95%] block'>
                        <embed src={src} className='w-full h-[100vh] mr-auto ml-auto'></embed>
                    </div>
                    <div className='w-full h-[5%] flex justify-center items-center'>
                        <button className='text-sky-600 hover:text-sky-800 hover:text-xl' onClick={() => {
                            document.getElementById("document_element_1").style.display = "flex";
                            document.getElementById("document_element_2").style.display = "flex";
                            document.getElementById("document_element_4").style.display = "none";
                            document.getElementById("document_element_5").style.height = "10%"
                        }}>Visza</button>
                    </div>
                </div>
            </div>
  )
}

export default DocumentCard;
