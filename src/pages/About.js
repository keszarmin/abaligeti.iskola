import { Link } from "react-router-dom";

function About() {
  return (
    <div>
    {/* Background masking */}        
      <div id='home_main' className='w-full h-full'> 
          <div id='home_in' className='w-full h-full flex justify-center items-center bg-transparent'>
                
          </div>
      </div>
      <div className='w-screen h-screen justify-end items-center flex bg-white'>
        <div className="w-[15%] bg-white h-[95%] mt-[2%] flex justify-center items-center fixed left-0">
          <div className="w-full h-[60%]">
            <div className="w-full h-1/6 flex justify-center items-center">
              <a href={"#koszonto"} className=' hover:border-b-2 hover:text-[110%] duration-100 hover:border-sky-600'>Köszöntő</a>
            </div>
            <div className="w-full h-1/6 flex justify-center items-center">
              <a href={"#bemutatkozas"} className=' hover:border-b-2 hover:text-[110%] duration-100 hover:border-sky-600'>Bemutatkozás</a>
            </div>
            <div className="w-full h-1/6 flex justify-center items-center">
              <a href={"#tantestulet"} className=' hover:border-b-2 hover:text-[110%] duration-100 hover:border-sky-600'>Tantestület</a>
            </div>
            <div className="w-full h-1/6 flex justify-center items-center">
              <a href={"#iskola_tortenete"} className=' hover:border-b-2 hover:text-[110%] duration-100 hover:border-sky-600'>Iskola története</a>
            </div>
            <div className="w-full h-1/6 flex justify-center items-center">
              <a href={"#pte_partner_intezmeny"} className=' hover:border-b-2 hover:text-[110%] duration-100 hover:border-sky-600'>PTE partner intézmény</a>
            </div>
            <div className="w-full h-1/6 flex justify-center items-center">
              <a href={"#allasajanlat"} className=' hover:border-b-2 hover:text-[110%] duration-100 hover:border-sky-600'>Állás ajánlat</a>
            </div>
          </div>
        </div>
        <div className="w-[85%] bg-fuchsia-700 h-full ">
          <div id="koszonto" className="w-full h-[80%]">
            <div className="w-full justify-center items-center flex h-[20%]">
              <div className="w-min h-min">
                <h1 className="text-[250%] text-white">Köszöntő</h1>
              </div>
            </div>
            <div className="flex w-full justify-center items-center h-[80%]">
              <div className="w-[85%] text-justify text-white">
                <p className="text-[120%]"> Vestibulum molestie nunc risus, at consequat eros tristique vitae. Nullam faucibus venenatis dignissim. Pellentesque sed lectus ornare, volutpat lacus nec, consectetur lectus. Nulla auctor ipsum quis justo efficitur, ut rutrum lorem suscipit. Pellentesque pretium sapien diam, a pellentesque lorem varius ac. Phasellus nec ullamcorper purus. Phasellus sollicitudin luctus blandit. Aliquam eget pharetra nulla. In sollicitudin sapien purus, sit amet ultrices tortor feugiat ac. Donec suscipit sem tortor, non placerat sem luctus eu. Vestibulum euismod turpis ac nisi convallis, in euismod turpis hendrerit. Donec elit libero, dapibus id vehicula in, egestas quis nisi. Cras dignissim suscipit velit, sit amet consectetur enim ultricies at. Proin tristique velit sed erat sollicitudin egestas. Morbi venenatis ante.  Vestibulum molestie nunc risus, at consequat eros tristique vitae. Nullam faucibus venenatis dignissim. Pellentesque sed lectus ornare, volutpat lacus nec, consectetur lectus. Nulla auctor ipsum quis justo efficitur, ut rutrum lorem suscipit. Pellentesque pretium sapien diam, a pellentesque lorem varius ac. Phasellus nec ullamcorper purus. Phasellus sollicitudin luctus blandit. Aliquam eget pharetra nulla. In sollicitudin sapien purus, sit amet ultrices tortor feugiat ac. Donec suscipit sem tortor, non placerat sem luctus eu. Vestibulum euismod turpis ac nisi convallis, in euismod turpis hendrerit. Donec elit libero, dapibus id vehicula in, egestas quis nisi. Cras dignissim suscipit velit, sit amet consectetur enim ultricies at. Proin tristique velit sed erat sollicitudin egestas. Morbi venenatis ante.  Vestibulum molestie nunc risus, at consequat eros tristique vitae. Nullam faucibus venenatis dignissim. Pellentesque sed lectus ornare, volutpat lacus nec, consectetur lectus. Nulla auctor ipsum quis justo efficitur, ut rutrum lorem suscipit. Pellentesque pretium sapien diam, a pellentesque lorem varius ac. Phasellus nec ullamcorper purus. Phasellus sollicitudin luctus blandit. Aliquam eget pharetra nulla. In sollicitudin sapien purus, sit amet ultrices tortor feugiat ac. Donec suscipit sem tortor, non placerat sem luctus eu. Vestibulum euismod turpis ac nisi convallis, in euismod turpis hendrerit. Donec elit libero, dapibus id vehicula in, egestas quis nisi. Cras dignissim suscipit velit, sit amet consectetur enim ultricies at. Proin tristique velit sed erat sollicitudin egestas. Morbi venenatis ante.</p>
              </div>
            </div>
          </div>
          <hr></hr>
          <div id="bemutatkozas" className="w-full h-[80%] bg-fuchsia-700">
            <div className="w-full h-[20%] flex justify-center items-center">
              <div className="w-min h-min">
                <h1 className="text-[250%] text-white">Bemutatkozás</h1>
              </div>
            </div>
            <div className="w-full h-[80%] flex justify-center items-center">
            <div className="w-[85%] text-justify text-white">
                <p className="text-[120%]"> Vestibulum molestie nunc risus, at consequat eros tristique vitae. Nullam faucibus venenatis dignissim. Pellentesque sed lectus ornare, volutpat lacus nec, consectetur lectus. Nulla auctor ipsum quis justo efficitur, ut rutrum lorem suscipit. Pellentesque pretium sapien diam, a pellentesque lorem varius ac. Phasellus nec ullamcorper purus. Phasellus sollicitudin luctus blandit. Aliquam eget pharetra nulla. In sollicitudin sapien purus, sit amet ultrices tortor feugiat ac. Donec suscipit sem tortor, non placerat sem luctus eu. Vestibulum euismod turpis ac nisi convallis, in euismod turpis hendrerit. Donec elit libero, dapibus id vehicula in, egestas quis nisi. Cras dignissim suscipit velit, sit amet consectetur enim ultricies at. Proin tristique velit sed erat sollicitudin egestas. Morbi venenatis ante.  Vestibulum molestie nunc risus, at consequat eros tristique vitae. Nullam faucibus venenatis dignissim. Pellentesque sed lectus ornare, volutpat lacus nec, consectetur lectus. Nulla auctor ipsum quis justo efficitur, ut rutrum lorem suscipit. Pellentesque pretium sapien diam, a pellentesque lorem varius ac. Phasellus nec ullamcorper purus. Phasellus sollicitudin luctus blandit. Aliquam eget pharetra nulla. In sollicitudin sapien purus, sit amet ultrices tortor feugiat ac. Donec suscipit sem tortor, non placerat sem luctus eu. Vestibulum euismod turpis ac nisi convallis, in euismod turpis hendrerit. Donec elit libero, dapibus id vehicula in, egestas quis nisi. Cras dignissim suscipit velit, sit amet consectetur enim ultricies at. Proin tristique velit sed erat sollicitudin egestas. Morbi venenatis ante.  Vestibulum molestie nunc risus, at consequat eros tristique vitae. Nullam faucibus venenatis dignissim. Pellentesque sed lectus ornare, volutpat lacus nec, consectetur lectus. Nulla auctor ipsum quis justo efficitur, ut rutrum lorem suscipit. Pellentesque pretium sapien diam, a pellentesque lorem varius ac. Phasellus nec ullamcorper purus. Phasellus sollicitudin luctus blandit. Aliquam eget pharetra nulla. In sollicitudin sapien purus, sit amet ultrices tortor feugiat ac. Donec suscipit sem tortor, non placerat sem luctus eu. Vestibulum euismod turpis ac nisi convallis, in euismod turpis hendrerit. Donec elit libero, dapibus id vehicula in, egestas quis nisi. Cras dignissim suscipit velit, sit amet consectetur enim ultricies at. Proin tristique velit sed erat sollicitudin egestas. Morbi venenatis ante.</p>
              </div>
            </div>
          </div>
          <hr></hr>
          <div id="tantestulet" className="w-full h-[80%] flex justify-center bg-fuchsia-700 items-center">
            <div className="w-[60%] h-[80%] bg-gray-600 rounded-3xl border-2 border-gray-600">
              <div className="w-full h-[10%] justify-center items-center flex">
                <div className="w-max h-min">
                  <h1 className="text-[240%] text-white">Fogadó órák</h1>
                </div>
              </div>
              <div className="h-[90%] w-full"> 
                <div className="w-[90%] h-full block">
                  <div className="w-[80%] mr-auto ml-auto h-1/4 justify-start items-center flex">
                    <div className="w-max h-min">
                      <p className="text-[130%] text-white">1.Fogadó óra: {"xyz"}</p>
                    </div>
                  </div>
                  <div className="w-[80%] mr-auto ml-auto h-1/4 justify-start items-center flex">
                    <div className="w-max h-min">
                      <p className="text-[130%] text-white">2.Fogadó óra: {"xyz"}</p>
                    </div>
                  </div>
                  <div className="w-[80%] mr-auto ml-auto h-1/4 justify-start items-center flex">
                    <div className="w-max h-min">
                      <p className="text-[130%] text-white">3.Fogadó óra: {"xyz"}</p>
                    </div>
                  </div>
                  <div className="w-[80%] mr-auto ml-auto h-1/4 justify-start items-center flex">
                    <div className="w-max h-min">
                      <p className="text-[130%] text-white">4.Fogadó óra: {"xyz"}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <hr></hr>
          <div id="iskola_tortenete" className="w-full h-[80%] bg-fuchsia-700">
            <div className="w-full h-[20%] flex justify-center items-center">
              <div className="w-min h-min">
                <h1 className="text-[250%] text-white">Bemutatkozás</h1>
              </div>
            </div>
            <div className="w-full h-[80%] flex justify-center items-center">
            <div className="w-[85%] text-justify text-white">
                <p className="text-[120%]"> Vestibulum molestie nunc risus, at consequat eros tristique vitae. Nullam faucibus venenatis dignissim. Pellentesque sed lectus ornare, volutpat lacus nec, consectetur lectus. Nulla auctor ipsum quis justo efficitur, ut rutrum lorem suscipit. Pellentesque pretium sapien diam, a pellentesque lorem varius ac. Phasellus nec ullamcorper purus. Phasellus sollicitudin luctus blandit. Aliquam eget pharetra nulla. In sollicitudin sapien purus, sit amet ultrices tortor feugiat ac. Donec suscipit sem tortor, non placerat sem luctus eu. Vestibulum euismod turpis ac nisi convallis, in euismod turpis hendrerit. Donec elit libero, dapibus id vehicula in, egestas quis nisi. Cras dignissim suscipit velit, sit amet consectetur enim ultricies at. Proin tristique velit sed erat sollicitudin egestas. Morbi venenatis ante.  Vestibulum molestie nunc risus, at consequat eros tristique vitae. Nullam faucibus venenatis dignissim. Pellentesque sed lectus ornare, volutpat lacus nec, consectetur lectus. Nulla auctor ipsum quis justo efficitur, ut rutrum lorem suscipit. Pellentesque pretium sapien diam, a pellentesque lorem varius ac. Phasellus nec ullamcorper purus. Phasellus sollicitudin luctus blandit. Aliquam eget pharetra nulla. In sollicitudin sapien purus, sit amet ultrices tortor feugiat ac. Donec suscipit sem tortor, non placerat sem luctus eu. Vestibulum euismod turpis ac nisi convallis, in euismod turpis hendrerit. Donec elit libero, dapibus id vehicula in, egestas quis nisi. Cras dignissim suscipit velit, sit amet consectetur enim ultricies at. Proin tristique velit sed erat sollicitudin egestas. Morbi venenatis ante.  Vestibulum molestie nunc risus, at consequat eros tristique vitae. Nullam faucibus venenatis dignissim. Pellentesque sed lectus ornare, volutpat lacus nec, consectetur lectus. Nulla auctor ipsum quis justo efficitur, ut rutrum lorem suscipit. Pellentesque pretium sapien diam, a pellentesque lorem varius ac. Phasellus nec ullamcorper purus. Phasellus sollicitudin luctus blandit. Aliquam eget pharetra nulla. In sollicitudin sapien purus, sit amet ultrices tortor feugiat ac. Donec suscipit sem tortor, non placerat sem luctus eu. Vestibulum euismod turpis ac nisi convallis, in euismod turpis hendrerit. Donec elit libero, dapibus id vehicula in, egestas quis nisi. Cras dignissim suscipit velit, sit amet consectetur enim ultricies at. Proin tristique velit sed erat sollicitudin egestas. Morbi venenatis ante.</p>
              </div>
            </div>
          </div>
          <hr></hr>
          <div id="pte_partner_intezmeny" className="w-full h-[80%] bg-fuchsia-700">
            <div className="w-full h-[20%] flex justify-center items-center">
                <div className="w-max h-min">
                  <h1 className="text-[250%] text-white">PTE Partner Intézmény</h1>
                </div>
              </div>
              <div className="w-full h-[80%] flex justify-center items-center">
              <div className="w-[85%] text-justify text-white">
                  <p className="text-[120%]"> Vestibulum molestie nunc risus, at consequat eros tristique vitae. Nullam faucibus venenatis dignissim. Pellentesque sed lectus ornare, volutpat lacus nec, consectetur lectus. Nulla auctor ipsum quis justo efficitur, ut rutrum lorem suscipit. Pellentesque pretium sapien diam, a pellentesque lorem varius ac. Phasellus nec ullamcorper purus. Phasellus sollicitudin luctus blandit. Aliquam eget pharetra nulla. In sollicitudin sapien purus, sit amet ultrices tortor feugiat ac. Donec suscipit sem tortor, non placerat sem luctus eu. Vestibulum euismod turpis ac nisi convallis, in euismod turpis hendrerit. Donec elit libero, dapibus id vehicula in, egestas quis nisi. Cras dignissim suscipit velit, sit amet consectetur enim ultricies at. Proin tristique velit sed erat sollicitudin egestas. Morbi venenatis ante.  Vestibulum molestie nunc risus, at consequat eros tristique vitae. Nullam faucibus venenatis dignissim. Pellentesque sed lectus ornare, volutpat lacus nec, consectetur lectus. Nulla auctor ipsum quis justo efficitur, ut rutrum lorem suscipit. Pellentesque pretium sapien diam, a pellentesque lorem varius ac. Phasellus nec ullamcorper purus. Phasellus sollicitudin luctus blandit. Aliquam eget pharetra nulla. In sollicitudin sapien purus, sit amet ultrices tortor feugiat ac. Donec suscipit sem tortor, non placerat sem luctus eu. Vestibulum euismod turpis ac nisi convallis, in euismod turpis hendrerit. Donec elit libero, dapibus id vehicula in, egestas quis nisi. Cras dignissim suscipit velit, sit amet consectetur enim ultricies at. Proin tristique velit sed erat sollicitudin egestas. Morbi venenatis ante.  Vestibulum molestie nunc risus, at consequat eros tristique vitae. Nullam faucibus venenatis dignissim. Pellentesque sed lectus ornare, volutpat lacus nec, consectetur lectus. Nulla auctor ipsum quis justo efficitur, ut rutrum lorem suscipit. Pellentesque pretium sapien diam, a pellentesque lorem varius ac. Phasellus nec ullamcorper purus. Phasellus sollicitudin luctus blandit. Aliquam eget pharetra nulla. In sollicitudin sapien purus, sit amet ultrices tortor feugiat ac. Donec suscipit sem tortor, non placerat sem luctus eu. Vestibulum euismod turpis ac nisi convallis, in euismod turpis hendrerit. Donec elit libero, dapibus id vehicula in, egestas quis nisi. Cras dignissim suscipit velit, sit amet consectetur enim ultricies at. Proin tristique velit sed erat sollicitudin egestas. Morbi venenatis ante.</p>
                </div>
              </div>
          </div>
          <hr></hr>
          <div id="allasajanlat" className="w-full h-[50%] bg-fuchsia-700">
              {/** MAIN TEXT */}
              <div className="w-full h-[20%] flex justify-center items-center">
                <div className="w-max h-min">
                  <h1 className="text-[250%] text-white">Állás ajánlat</h1>
                </div>
              </div>
              {/** MAIN CONTENT */}
              <div className="w-full h-[80%] flex justify-center items-center">
                <div className="w-[85%] block mr-auto ml-auto text-white">
                  {/** CONTENT 1 */}
                    <div className="w-full h-[50%] flex justify-center items-center">
                      <div className="w-max h-min">
                        <p className="text-justify">Vestibulum molestie nunc risus, at consequat eros tristique vitae. Nullam faucibus venenatis dignissim. Pellentesque sed lectus ornare, volutpat lacus nec, consectetur lectus. Nulla auctor ipsum quis justo efficitur, ut rutrum lorem suscipit. Pellentesque pretium sapien diam, a pellentesque lorem varius ac. Phasellus nec ullamcorper purus. Phasellus sollicitudin luctus blandit. Aliquam eget pharetra nulla. In sollicitudin sapien purus, sit amet ultrices tortor feugiat ac. Donec suscipit sem tortor, non placerat sem luctus eu. Vestibulum euismod turpis ac nisi convallis, in euismod turpis hendrerit. Donec elit libero, dapibus id vehicula in, egestas quis nisi. Cras dignissim suscipit velit, sit amet consectetur enim ultricies at.  Proin tristique velit sed erat sollicitudin egestas. Morbi venenatis ante.</p>
                      </div>
                    </div>
                  {/** CONTENT 2 */}
                  <div className="w-full h-[50%] mt-5 flex justify-center items-end">
                    <div className="w-[20%] h-min flex justify-center items-center bg-sky-600 rounded-3xl hover:bg-sky-800 border-2 border-sky-600 hover:border-sky-800">
                      <Link className="text-[150%]" to={"/contact"}>Elérhetőségek</Link>
                    </div>  
                  </div>
                </div>
              </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About;
