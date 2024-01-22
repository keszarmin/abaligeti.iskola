import React from 'react';
import "./global.css";

function Contact() {
  return (
    <div>
      <div>
      <div className='w-screen h-screen justify-end items-center flex bg-white'>
        <div className="w-[15%] bg-white h-[95%] mt-[2%] flex justify-center items-center fixed left-0">
          <div className="w-full h-[60%]">
            <div className="w-full h-1/5 flex justify-center items-center">
                <a href={"#pp"} className=' hover:border-b-2 hover:text-[110%] duration-100 hover:border-sky-600' >Titkárság</a>
            </div>
            <div className="w-full h-1/5 flex justify-center items-center">
              <a href={"#szmsz"} className=' hover:border-b-2 hover:text-[110%] duration-100 hover:border-sky-600'>Étkezés</a>
            </div>
            <div className="w-full h-1/5 flex justify-center items-center">
              <a href={"#hazirend"} className=' hover:border-b-2 hover:text-[110%] duration-100 hover:border-sky-600'>Alapitvány</a>
            </div>
            <div className="w-full h-1/5 flex justify-center items-center">
              <a href={"#munkaterv"} className=' hover:border-b-2 hover:text-[110%] duration-100 hover:border-sky-600'>Művészeti iskoláink</a>
            </div>
            <div className="w-full h-1/5 flex justify-center items-center">
              <a href={"#gdpr"} className=' hover:border-b-2 hover:text-[110%] duration-100 hover:border-sky-600'>Anya intézmény</a>
            </div>
          </div>
        </div>
        <div id='pp' className="w-[85%] bg-emerald-400 h-full ">
          <div id="hireink" className="w-full h-max bg-emerald-400">
            <div className="w-full justify-center items-center flex h-[15vh]">
              <div className="w-min h-min">
                <h1 className="text-[250%] text-sky-600">Titkárság</h1>
              </div>
            </div>
            <div className="w-full h-max flex justify-center items-center">
              {/** PP CONTENT */}
                <div className='w-[85%] h-max'>
                    <p className='text-sky-600' >Vestibulum molestie nunc risus, at consequat eros tristique vitae. Nullam faucibus venenatis dignissim. Pellentesque sed lectus ornare, volutpat lacus nec, consectetur lectus. Nulla auctor ipsum quis justo efficitur, ut rutrum lorem suscipit. Pellentesque pretium sapien diam, a pellentesque lorem varius ac. Phasellus nec ullamcorper purus. Phasellus sollicitudin luctus blandit. Aliquam eget pharetra nulla. In sollicitudin sapien purus, sit amet ultrices tortor feugiat ac. Donec suscipit sem tortor, non placerat sem luctus eu. Vestibulum euismod turpis ac nisi convallis, in euismod turpis hendrerit. Donec elit libero, dapibus id vehicula in, egestas quis nisi. Cras dignissim suscipit velit, sit amet consectetur enim ultricies at. Proin tristique velit sed erat sollicitudin egestas. Morbi venenatis ante.  Vestibulum molestie nunc risus, at consequat eros tristique vitae. Nullam faucibus venenatis dignissim. Pellentesque sed lectus ornare, volutpat lacus nec, consectetur lectus. Nulla auctor ipsum quis justo efficitur, ut rutrum lorem suscipit. Pellentesque pretium sapien diam, a pellentesque lorem varius ac. Phasellus nec ullamcorper purus. Phasellus sollicitudin luctus blandit. Aliquam eget pharetra nulla. In sollicitudin sapien purus, sit amet ultrices tortor feugiat ac. Donec suscipit sem tortor, non placerat sem luctus eu. Vestibulum euismod turpis ac nisi convallis, in euismod turpis hendrerit. Donec elit libero, dapibus id vehicula in, egestas quis nisi. Cras dignissim suscipit velit, sit amet consectetur enim ultricies at. Proin tristique velit sed erat sollicitudin egestas. Morbi venenatis ante.  Vestibulum molestie nunc risus, at consequat eros tristique vitae. Nullam faucibus venenatis dignissim. Pellentesque sed lectus ornare, volutpat lacus nec, consectetur lectus. Nulla auctor ipsum quis justo efficitur, ut rutrum lorem suscipit. Pellentesque pretium sapien diam, a pellentesque lorem varius ac. Phasellus nec ullamcorper purus. Phasellus sollicitudin luctus blandit. Aliquam eget pharetra nulla. In sollicitudin sapien purus, sit amet ultrices tortor feugiat ac. Donec suscipit sem tortor, non placerat sem luctus eu. Vestibulum euismod turpis ac nisi convallis, in euismod turpis hendrerit. Donec elit libero, dapibus id vehicula in, egestas quis nisi. Cras dignissim suscipit velit, sit amet consectetur enim ultricies at. Proin tristique velit sed erat sollicitudin egestas. Morbi venenatis ante.</p>
                </div>
              {/** END PP CONTENT */}
            </div>
          </div>
          <hr></hr>
          <div id="szmsz" className="w-full h-max bg-emerald-400">
            <div className="w-full h-[15vh] flex justify-center items-center">
              <div className="w-min h-min">
                <h1 className="text-[250%] text-sky-600">Étkezés</h1>
              </div>
            </div>
            <div className="w-full h-max block">
              {/** PROGRAMOK CONTENT */}
              <div className='ml-auto mr-auto w-[85%] h-max text-center'>
                <p className='text-sky-600 text-[120%]'>Vestibulum molestie nunc risus, at consequat eros tristique vitae. Nullam faucibus venenatis dignissim. Pellentesque sed lectus ornare, volutpat lacus nec, consectetur lectus. Nulla auctor ipsum quis justo efficitur, ut rutrum lorem suscipit. Pellentesque pretium sapien diam, a pellentesque lorem varius ac. Phasellus nec ullamcorper purus. Phasellus sollicitudin luctus blandit. Aliquam eget pharetra nulla. In sollicitudin sapien purus, sit amet ultrices tortor feugiat ac. Donec suscipit sem tortor, non placerat sem luctus eu. Vestibulum euismod turpis ac nisi convallis, in euismod turpis hendrerit. Donec elit libero, dapibus id vehicula in, egestas quis nisi. Cras dignissim suscipit velit, sit amet consectetur enim ultricies at. Proin tristique velit sed erat sollicitudin egestas. Morbi venenatis ante.  Vestibulum molestie nunc risus, at consequat eros tristique vitae. Nullam faucibus venenatis dignissim. Pellentesque sed lectus ornare, volutpat lacus nec, consectetur lectus. Nulla auctor ipsum quis justo efficitur, ut rutrum lorem suscipit. Pellentesque pretium sapien diam, a pellentesque lorem varius ac. Phasellus nec ullamcorper purus. Phasellus sollicitudin luctus blandit. Aliquam eget pharetra nulla. In sollicitudin sapien purus, sit amet ultrices tortor feugiat ac. Donec suscipit sem tortor, non placerat sem luctus eu. Vestibulum euismod turpis ac nisi convallis, in euismod turpis hendrerit. Donec elit libero, dapibus id vehicula in, egestas quis nisi. Cras dignissim suscipit velit, sit amet consectetur enim ultricies at. Proin tristique velit sed erat sollicitudin egestas. Morbi venenatis ante.</p>
              </div>
              {/** END PROGRAMOK CONTENT */}
            </div>
          </div>
          <hr></hr>
          <div id="hazirend" className="w-full h-max bg-emerald-400 block">
            <div className='mr-auto ml-auto flex justify-center items-center'>
                <div className="w-min h-min">
                    <h1 className="text-[250%] text-sky-600">Alapitvány</h1>
                 </div>
            </div>  
            <div className='mr-auto ml-auto flex justify-center items-center h-[40vh] w-full'>
                
            </div>
          </div>
          <hr></hr>
          <div id="munkaterv" className="w-full h-max bg-emerald-400">
            <div className="w-full h-[15vh] flex justify-center items-center">
              <div className="w-max h-min">
                <h1 className="text-[250%] text-sky-600">Művészeti iskoláink</h1>
              </div>
            </div>
            <div className="w-full h-max block">
                <div className='ml-auto mr-auto w-[85%] h-max text-center'>
                    <p className=' text-gray-300 text-[120%]'>Vestibulum molestie nunc risus, at consequat eros tristique vitae. Nullam faucibus venenatis dignissim. Pellentesque sed lectus ornare, volutpat lacus nec, consectetur lectus. Nulla auctor ipsum quis justo efficitur, ut rutrum lorem suscipit. Pellentesque pretium sapien diam, a pellentesque lorem varius ac</p>
                </div>
                <div className='ml-auto mt-[2%] mr-auto w-[85%] h-max text-center'>
                    <p className='text-gray-300 text-[120%]'>Vestibulum molestie nunc risus, at consequat eros tristique vitae. Nullam faucibus venenatis dignissim. Pellentesque sed lectus ornare, volutpat lacus nec, consectetur lectus. Nulla auctor ipsum quis justo efficitur, ut rutrum lorem suscipit. Pellentesque pretium sapien diam, a pellentesque lorem varius ac</p>
                </div>
            </div>
          </div>
          <hr></hr>
          <div id="gdpr" className="w-full h-max  bg-emerald-400">
            <div className="w-full h-[15vh] flex justify-center items-center">
                <div className="w-max h-min">
                  <h1 className="text-[250%] text-sky-600">Anya intézmény</h1>
                </div>
              </div>
              <div className="w-full h-[80%] block">
                <div className="w-[85%] h-[20vh] text-justify text-white ml-auto mr-auto">
                    <p className="text-[120%] text-sky-600"> Vestibulum molestie nunc risus, at consequat eros tristique vitae. Nullam faucibus venenatis dignissim. Pellentesque sed lectus ornare, volutpat lacus nec, consectetur lectus. Nulla auctor ipsum quis justo efficitur, ut rutrum lorem suscipit. Pellentesque pretium sapien diam, a pellentesque lorem varius ac. Phasellus nec ullamcorper purus. Phasellus sollicitudin luctus blandit. Aliquam eget pharetra nulla. In sollicitudin sapien purus, sit amet ultrices tortor feugiat ac.</p>
                </div>
              </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  )
}

export default Contact
