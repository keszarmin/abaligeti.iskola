import React,{useEffect,useState} from 'react'
import "../global.css"
import { Link } from 'react-router-dom'
import right_arrow from "./right_arrow.png"

function Home() {

  const [NewsUrl, setNewsUrl] = useState([]);
  const [CalendarUrl, setCalendarUrl] = useState([]);

  const FetchNewsURL = async () => {
    const response = await fetch("http://localhost:9001/get_path/home_news/0");
    const res = await response.json();

    setNewsUrl(res);
  }

  const FetchCalendarURL = async () => {
    const response = await fetch("http://localhost:9001/get_path/calendar/0");
    const res = await response.json();

    setCalendarUrl(res);
  }

  useEffect(() => {
    FetchNewsURL()
    FetchCalendarURL()

  },[])

  return (
    <div className='w-screen h-screen flex justify-center items-center text-white overflow-hidden'>
        {/* Background masking */}        
        <div id='home_main' className='w-full h-full'> 
            <div id='home_in' className='w-full h-full flex justify-center items-center bg-transparent'>
                
            </div>
        </div>
        {/* Background masking */}
        {/* HOME LEFT SIDE */}
          
        <div className='w-[70%] h-[80%]'>
          {/* H1 TITLE*/}
          <div id='MAIN_TEXT' className='w-full h-[20%] flex justify-center items-center text-[380%] text-center phone:h-[10%] phone:hidden tablet:text-[140%]'>
              <h1>Abaligeti Általános Iskola</h1>
          </div>
          {/* H1 TITLE END*/}
          {/* P TITLE */}
          <div className='w-full h-[60%] text-[115%] phone:text-[75%] phone:h-[100%]'>
            <div className='w-full h-full flex justify-center items-center'>
              <div className='w-[80%] h-min'>
                <p id='SCHOOL_DES_TEXT' className='text-justify'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec quis nisl faucibus, tempus mauris id, iaculis sem. Maecenas quis vehicula dui, vel malesuada tellus. Vivamus convallis libero nisi, at pellentesque nunc euismod sit amet. Maecenas nulla tellus, egestas at ligula non, dictum feugiat purus. Ut id tincidunt felis. Sed tempor est urna, in vulputate orci interdum eget. Etiam eu venenatis ligula. Nulla laoreet tincidunt convallis. Donec sem arcu, fringilla a placerat sit amet, mattis non lacus. Cras ornare velit arcu, et gravida lectus mollis et. Morbi id enim mattis, sollicitudin augue vel, elementum tellus. Nunc ligula ipsum, finibus sit amet nunc eu, pretium semper orci. Nulla ultricies lorem a sem tempor tincidunt.<a className='hidden tablet:block' href='/abaliegti.iskola/about'>  Több</a></p>
              </div>
            </div>
          </div>
          {/* P TITLE END */}
          {/* BUTTON */}
          <div className='w-full h-[20%] flex justify-center items-center phone:h-[10%] phone:hidden tablet:hidden'>  
            <Link id='home_button' to={"/abaligeti.iskola/about"} className='w-[30%] overflow-hidden text-[115%] border rounded-xl bg-lime-400 border-sky-200  inline-flex justify-center items-center hover:ease-in-out hover:delay-75 animate-bounce hover:animate-none duration-1000 hover:w-[35%] hover:border-2 hover:h-[20%] hover:text-[150%] hover:border-sky-900 hover:bg-sky-400'>
              Rólunk
            </Link>
          </div>
          {/* BUTTON END */}
        </div>      
        {/* HOME LEFT SIDE END */}  
        <div className='w-[30%] h-full'>
          <div className='w-full h-full grid place-items-center'>
                {/** Home News Child*/}
                <div className='w-[90%] h-[25vh] rounded-3xl bg-violet-700 mt-[5%] overflow-hidden'>
                  <div className='w-full h-[20%] flex justify-center items-center'>
                      <div className='w-min h-max'>
                          <h1 className='text-[150%]'>Hireink</h1>
                      </div>
                  </div>         
                  <div className='w-full h-[80%] block overflow-hidden'>
                      <div className='w-full h-[80%] flex justify-center items-center'>
                        <div className='w-1/2 h-full flex justify-center items-center'>   
                            <img className='max-w-[70%] h-auto rounded-3xl' src={NewsUrl[0]?.src[0].img_src.toString()} alt={""} />
                        </div>
                        <div className='w-1/2 h-full flex justify-center items-center'>
                            <p>{NewsUrl[0]?.src[1].description.toString()}</p>
                        </div>
                      </div>
                      <div className='w-full h-[20%] flex justify-center items-center'>
                        <a href='/abaligeti.iskola/aktualitasok' className='hover:text-[120%] duration-100 text-black hover:text-sky-400' >Több</a>
                      </div>
                  </div>
                </div>
                {/** Home News Child END*/}
                <div className='w-[90%] h-[25vh] rounded-3xl bg-red-300 mt-[5%] overflow-hidden'>
                  <div className='w-full h-[20%] flex justify-center items-center'>
                    <div className='w-min h-max'>
                          <h1 className='text-[150%]'>Naptár</h1>
                    </div>
                  </div>     
                  {/** Home Calendar Contents */}    
                  <div className='w-full h-[60%] flex justify-center items-center'>
                    <div className='block w-[90%] h-full'>
                      {/** Home Calendar Childs */}
                      <div className='w-full h-1/4 inline-flex justify-center items-center'>
                        <div className='w-1/2 h-full flex justify-center items-center'>
                          <div className='w-min h-min'>
                            <h1>{CalendarUrl[0]?.src[0].date.toString().replace(".txt","")}</h1>
                          </div>
                        </div>
                        <div className='w-1/2 h-full flex justify-center items-center'>
                          <div className='w-max h-max'>
                            <p>{CalendarUrl[0]?.src[1].description.toString()}</p>
                          </div>
                        </div>
                      </div>

                      <div className='w-full h-1/4 inline-flex justify-center items-center mt-[3%]'>
                        <div className='w-1/2 h-full flex justify-center items-center'>
                          <div className='w-min h-min'>
                            <h1>{CalendarUrl[1]?.src[0].date.toString().replace(".txt","")}</h1>
                          </div>
                        </div>
                        <div className='w-1/2 h-full flex justify-center items-center'>
                          <div className='w-max h-max'>
                            <p>{CalendarUrl[1]?.src[1].description.toString()}</p>
                          </div>
                        </div>
                      </div>
                      
                      <div className='w-full h-1/4 inline-flex justify-center items-center mt-[3%]'>
                        <div className='w-1/2 h-full flex justify-center items-center'>
                          <div className='w-min h-min'>
                            <h1>{CalendarUrl[2]?.src[0].date.toString().replace(".txt","")}</h1>
                          </div>
                        </div>
                        <div className='w-1/2 h-full flex justify-center items-center'>
                          <div className='w-max h-max'>
                            <p>{CalendarUrl[2]?.src[1].description.toString()}</p>
                          </div>
                        </div>
                      </div>
                      {/** Home Calendar Childs END */}
                    </div>
                  </div>

                  {/** Home Calendar Button */}
                  <div className='w-full h-[10%] flex justify-center items-center'>
                    <div className='w-min h-min'>
                      <a href='/abaligeti.iskola/aktualitasok' className='hover:text-[120%] duration-100 text-slate-600 hover:text-sky-400' >Több</a>
                    </div>
                  </div>
                  {/** Home Calendar Button END */}
                </div>      

                <div className='w-[90%] h-[25vh] rounded-3xl bg-green-400 mt-[5%] overflow-hidden'>
                  <div className='w-full h-[20%] flex justify-center items-center'>
                      <div className='w-min h-max'>
                          <h1 className='text-[150%]'>Elérhetőségeink</h1>
                      </div>
                  </div>         
                  <div className='w-full h-[80%] block overflow-hidden'>
                      <div className='w-full h-[80%] flex justify-center items-center'>
                        
                      </div>
                      <div className='w-full h-[20%] flex justify-center items-center'>
                        <a href='/abaligeti.iskola/aktualitasok' className='hover:text-[120%] duration-100 text-black hover:text-sky-400' >Több</a>
                      </div>
                  </div>
                </div>

          </div>
        </div>
    </div>
  )
}

export default Home;
