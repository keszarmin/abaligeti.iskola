import React from 'react'
import CalendarPNG from "./calendar.png"
import RightArrowPNG from "./right_arrow.png"
import {useState,useEffect} from "react"
import AktualitasokCsengetesirendCard from './AktualitasokCsengetesirendCard'

function Aktualitasok() {
  const [Url, setUrl] = useState([]);
  const [CalendarUrl, setCalendarUrl] = useState([]);

  const FetchURL = async () => {
      const response = await fetch("http://localhost:9001/get_path/csengetesi_rend/0");
      const res = await response.json();
    
      setUrl(res);
  }

  const FetchCalendarURL = async () => {
    const response = await fetch("http://localhost:9001/aktualitasok/calendar");
    const res = await response.json();

    setCalendarUrl(res);
  }

  useEffect(() => {
    FetchCalendarURL()
    FetchURL();
  },[])


  return (
    <div>
      <div className='w-screen h-screen justify-end items-center flex bg-white'>
        
        {/** FIXED CALENDAR */}

        <div onClick={() => document.getElementById("calendar_content").style.display = "flex"} className='fixed w-[7vh] h-[7vh] bg-red-300 bottom-[1%] right-[1%] rounded-full flex justify-center items-center hover:border-2 hover:border-sky-400'>
          <img src={CalendarPNG} className='w-[50%]' />
        </div>

        <div id='calendar_content' className='fixed justify-center items-center w-[30vh] h-[30vh] bg-red-300 hidden bottom-[1%] right-[1%] rounded-2xl'>
          {/** CALENDAR HEADER */}
          <div className='w-[20%] h-full flex justify-center items-center'>
            <img src={RightArrowPNG} className=' rotate-180 w-[40%] hover:w-[60%] duration-100' onClick={() => document.getElementById("calendar_content").style.display = "none"} /> 
          </div>
          {/** CALENDAR CONTENT */}
          <div className='w-[80%] block'>
          {
            CalendarUrl.map((data,index) => (

              <div key={index} className='w-full h-[15%] mr-auto ml-auto'>    
                <p>{data.datum}</p>
                <p>{data.description}</p>
              </div>
            ))  
          }
          </div>
        </div>

        {/** FIXED CALENDAR END */}

        <div className="w-[15%] bg-white h-[95%] mt-[2%] flex justify-center items-center fixed left-0">
          <div className="w-full h-[60%]">
            <div className="w-full h-1/5 flex justify-center items-center">
              <div className='w-max h-max block'>
                <a href={"#hireink"} className=' hover:border-b-2 hover:text-[110%] duration-100 hover:border-sky-600' >Hireink</a>
              </div>
            </div>
            <div className="w-full h-1/5 flex justify-center items-center">
              <a href={"#programok"} className=' hover:border-b-2 hover:text-[110%] duration-100 hover:border-sky-600'>Programok</a>
            </div>
            <div className="w-full h-1/5 flex justify-center items-center">
              <a href={"#csengetesi_rend"} className=' hover:border-b-2 hover:text-[110%] duration-100 hover:border-sky-600'>Csengetési rend</a>
            </div>
            <div className="w-full h-1/5 flex justify-center items-center">
              <a href={"#menetrend"} className=' hover:border-b-2 hover:text-[110%] duration-100 hover:border-sky-600'>Menetrend</a>
            </div>
            <div className="w-full h-1/5 flex justify-center items-center">
              <a href={"#etkezes"} className=' hover:border-b-2 hover:text-[110%] duration-100 hover:border-sky-600'>Étkezés</a>
            </div>
          </div>
        </div>
        <div className="w-[85%] bg-emerald-400 h-full ">
          <div id="hireink" className="w-full h-max   bg-violet-700">
            <div className="w-full justify-center items-center flex h-[15vh]">
              <div className="w-min h-min">
                <h1 className="text-[250%] text-white">Hireink</h1>
              </div>
            </div>
            <div className="w-full block h-max">
              {/** HIREK CONTENT */}
              
              {/** END HIREK CONTENT */}
            </div>
          </div>
          <div id="programok" className="w-full h-max bg-violet-700">
            <div className="w-full h-[15vh] flex justify-center items-center">
              <div className="w-min h-min">
                <h1 className="text-[250%] text-white">Programok</h1>
              </div>
            </div>
            <div className="w-full h-max block">
              {/** PROGRAMOK CONTENT */}
              <div className='ml-auto mr-auto w-[85%] h-max text-center'>
                <p className=' text-gray-300 text-[120%]'>Vestibulum molestie nunc risus, at consequat eros tristique vitae. Nullam faucibus venenatis dignissim. Pellentesque sed lectus ornare, volutpat lacus nec, consectetur lectus. Nulla auctor ipsum quis justo efficitur, ut rutrum lorem suscipit. Pellentesque pretium sapien diam, a pellentesque lorem varius ac</p>
              </div>
              <div className='ml-auto mt-[2%] mr-auto w-[85%] h-max text-center'>
                <p className='text-gray-300 text-[120%]'>Vestibulum molestie nunc risus, at consequat eros tristique vitae. Nullam faucibus venenatis dignissim. Pellentesque sed lectus ornare, volutpat lacus nec, consectetur lectus. Nulla auctor ipsum quis justo efficitur, ut rutrum lorem suscipit. Pellentesque pretium sapien diam, a pellentesque lorem varius ac</p>
              </div>
              {/** END PROGRAMOK CONTENT */}
            </div>
          </div>
          <div id="csengetesi_rend" className="w-full h-[80%] bg-violet-700 flex justify-center items-center">
            <div className="w-[60%] h-[80%] bg-gray-600 rounded-3xl border-2 border-gray-600">
              <div className="w-full h-[10%] justify-center items-center flex">
                <div className="w-max h-min">
                  <h1 className="text-[240%] text-white">Csengetési rend</h1> 
                </div>
              </div>
              <div className="h-[90%] w-full"> 
                <div className="w-[90%] h-full block">
                  
                </div>
              </div>
            </div>
          </div>
          <div id="iskola_tortenete" className="w-full h-[80%] bg-violet-700">
            <div className="w-full h-[20%] flex justify-center items-center">
              <div className="w-min h-min">
                <h1 className="text-[250%] text-white">Menetrend</h1>
              </div>
            </div>
            <div className="w-full h-[80%] block">
              <div className="w-[85%] text-justify text-white mr-auto ml-auto">
                 <p className="text-[120%]"> Vestibulum molestie nunc risus, at consequat eros tristique vitae. Nullam faucibus venenatis dignissim. Pellentesque sed lectus ornare, volutpat lacus nec, consectetur lectus. Nulla auctor ipsum quis justo efficitur, ut rutrum lorem suscipit. Pellentesque pretium sapien diam, a pellentesque lorem varius ac. Phasellus nec ullamcorper purus. Phasellus sollicitudin luctus blandit. Aliquam eget pharetra nulla. In sollicitudin sapien purus, sit amet ultrices tortor feugiat ac.</p>
              </div>
              <div className='w-[85%] h-[80%] ml-auto mr-auto'>
                <iframe className='rounded-3xl mt-[2%]' src='https://www.volanbusz.hu/hu/menetrendek/vonal-lista/vonal/?menetrend=5600' title='asd' width={"100%"} height={"100%"}></iframe>
              </div>
            </div>
          </div>
          <div id="pte_partner_intezmeny" className="w-full h-max  bg-violet-700">
            <div className="w-full h-[15vh] flex justify-center items-center">
                <div className="w-max h-min">
                  <h1 className="text-[250%] text-white">Étkezés</h1>
                </div>
              </div>
              <div className="w-full h-[80%] block">
                <div className="w-[85%] text-justify text-white ml-auto mr-auto">
                    <p className="text-[120%]"> Vestibulum molestie nunc risus, at consequat eros tristique vitae. Nullam faucibus venenatis dignissim. Pellentesque sed lectus ornare, volutpat lacus nec, consectetur lectus. Nulla auctor ipsum quis justo efficitur, ut rutrum lorem suscipit. Pellentesque pretium sapien diam, a pellentesque lorem varius ac. Phasellus nec ullamcorper purus. Phasellus sollicitudin luctus blandit. Aliquam eget pharetra nulla. In sollicitudin sapien purus, sit amet ultrices tortor feugiat ac.</p>
                </div>
                <div className='w-[85%] h-[10vh] ml-auto mr-auto flex justify-center items-center'>
                  <a href='https://www.abaliget.hu/onkormanyzat/' className='text-sky-600 text-[130%] underline hover:no-underline hover:border-b-2 hover:border-sky-400 hover:text-[150%] hover:text-sky-400'>Abaligeti Önkormányzat</a>
                </div>
              </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Aktualitasok;
