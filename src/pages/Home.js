import React from 'react'
import "./global.css"
import { Link } from 'react-router-dom'
import RightArrowPNG from "./right_arrow.png"

function Home() {
  return (
    <div className='w-screen h-screen flex justify-center items-center text-white overflow-hidden'>
        {/* Background masking */}        
        <div id='home_main' className='w-full h-full'> 
            <div id='home_in' className='w-full h-full flex justify-center items-center bg-transparent'>
                
            </div>
        </div>
        {/* Background masking */}
        {/* HOME */}
        <div className='w-[70%] h-[80%]'>
          {/* H1 TITLE*/}
          <div className='w-full h-[20%] text-[380%] text-center phone:h-[10%] phone:hidden tablet:text-[140%]'>
            <h1>Abaligeti Általános Iskola</h1>
          </div>
          {/* H1 TITLE*/}
          {/* P TITLE */}
          <div className='w-full h-[60%] text-[115%] phone:text-[75%] phone:h-[100%]'>
            <div className='w-full h-full flex justify-center items-center'>
              <div className='w-[80%] h-min'>
                <p className='text-justify'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec quis nisl faucibus, tempus mauris id, iaculis sem. Maecenas quis vehicula dui, vel malesuada tellus. Vivamus convallis libero nisi, at pellentesque nunc euismod sit amet. Maecenas nulla tellus, egestas at ligula non, dictum feugiat purus. Ut id tincidunt felis. Sed tempor est urna, in vulputate orci interdum eget. Etiam eu venenatis ligula. Nulla laoreet tincidunt convallis. Donec sem arcu, fringilla a placerat sit amet, mattis non lacus. Cras ornare velit arcu, et gravida lectus mollis et. Morbi id enim mattis, sollicitudin augue vel, elementum tellus. Nunc ligula ipsum, finibus sit amet nunc eu, pretium semper orci. Nulla ultricies lorem a sem tempor tincidunt.<a className='hidden tablet:block' href='/about'>  Több</a></p>
              </div>
            </div>
          </div>
          {/* P TITLE */}
          {/* BUTTON */}
          <div className='w-full h-[20%] flex justify-center items-center phone:h-[10%] phone:hidden tablet:hidden'>  
            <button id='home_button' className='text-[115%] border rounded-xl bg-sky-200 border-sky-200 w-[30%] inline-flex justify-center items-center hover:ease-out duration-1000 hover:w-[35%] hover:border-2 hover:border-sky-900 hover:bg-sky-800'>
              <Link to={"/about"}>Rólunk</Link>
              <img src={RightArrowPNG} alt='right_arrow_png' className='h-auto w-0' />
            </button>
          </div>
          {/* BUTTON */}
        </div>      
        {/* HOME */}  
        <div className='w-[30%] h-full'>
          <div className='w-full h-full grid place-items-center'>
            <div className='w-[90%] h-[25%] mr-auto ml-auto mt-[2%] bg-black'>
             
            </div>
            <div className='w-[90%] h-[25%] mr-auto ml-auto mt-[2%] bg-blue-800'>
                
            </div>
            <div className='w-[90%] h-[25%] mr-auto ml-auto mt-[2%] bg-red-500'>
                
            </div>
          </div>
        </div>
    </div>
  )
}

export default Home;
