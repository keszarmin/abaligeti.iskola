import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import "./global.css"
import iskola_pfp from "./iskola_pfp.jpg"

function Layout() {
  return (
    <>
    <nav className='w-full h-min inline-flex justify-center items-center fixed text-white text-lg bg-lime-400'>
        <div className='w-[15%] text-2xl flex justify-center items-center'>
            <img className=' w-[12%]' src={iskola_pfp} title='Abaligeti iskola pfp' />
        </div>
        <div className='w-[85%] inline-flex justify-around items-center'>
            <div className='w-1/2 flex justify-center items-center'>
                <Link className='hover:border-b-2 hover:border-sky-500 hover:text-xl duration-100' to={"/abaligeti.iskola"} >Home</Link>
            </div>
            <div className='w-1/2 flex justify-center items-center'>
                <Link className='hover:border-b-2 hover:border-sky-500 hover:text-xl duration-100' to={"/abaligeti.iskola/about"}>Rólunk</Link>
            </div>
            <div className='w-1/2 flex justify-center items-center'>
                <Link className='hover:border-b-2 hover:border-sky-500 hover:text-xl duration-100' to={"/abaligeti.iskola/document"}>Dokumentumok</Link>
            </div>
            <div className='w-1/2 flex justify-center items-center'>
                <Link className='hover:border-b-2 hover:border-sky-500 hover:text-xl duration-100' to={"/abaligeti.iskola/contact"}>Elérhetőségek</Link>
            </div>
            <div className='w-1/2 flex justify-center items-center'>
                <Link className='hover:border-b-2 hover:border-sky-500 hover:text-xl duration-100' to={"/abaligeti.iskola/aktualitasok"}>Aktualitások</Link>
            </div>
            <div className='w-1/2 flex justify-center items-center'>
                <Link className='hover:border-b-2 hover:border-sky-500 hover:text-xl duration-100' to={"/abaligeti.iskola/galeria"}>Galéria</Link>
            </div>
        </div>
    </nav>
    <Outlet />
    </>
  )
}

export default Layout
