import React from 'react'
import { useEffect,useState } from 'react';
import DocumentCard from './DocumentCard';

function Document() {
  const [Url, setUrl] = useState([]);

  const FetchURL = async () => {
    const response = await fetch("http://localhost:9001/get_path/documents/0");
    const res = await response.json();

    setUrl(res);
  }

  useEffect(() => {
    FetchURL()
  },[])

return (
      <div className='w-screen h-screen justify-end items-center flex bg-white'>
        <div className="w-[15%] bg-white h-[97%] mt-[2%] flex justify-center items-center fixed left-0">
          <div className="w-full h-[60%]">
            <div className="w-full h-1/6 flex justify-center items-center">
                <a href={"#pp"} className=' hover:border-b-2 hover:text-[110%] duration-100 hover:border-sky-600' >PP</a>
            </div>
            <div className="w-full h-1/6 flex justify-center items-center">
              <a href={"#szmsz"} className=' hover:border-b-2 hover:text-[110%] duration-100 hover:border-sky-600'>SZMSZ</a>
            </div>
            <div className="w-full h-1/6 flex justify-center items-center">
              <a href={"#hazirend"} className=' hover:border-b-2 hover:text-[110%] duration-100 hover:border-sky-600'>Házirend</a>
            </div>
            <div className="w-full h-1/6 flex justify-center items-center">
              <a href={"#munkaterv"} className=' hover:border-b-2 hover:text-[110%] duration-100 hover:border-sky-600'>Munkaterv</a>
            </div>
            <div className="w-full h-1/6 flex justify-center items-center">
              <a href={"#gdpr"} className=' hover:border-b-2 hover:text-[110%] duration-100 hover:border-sky-600'>GDPR</a>
            </div>
            <div className="w-full h-1/6 flex justify-center items-center">
              <a href={"#letoltheto_document"} className=' hover:border-b-2 hover:text-[110%] duration-100 hover:border-sky-600'>Letölthető Dokumentumok</a>
            </div>
          </div>
        </div>
        <div className='w-[85%] bg-violet-700 h-full'>
          <div id='pp' >
            <div className="w-full justify-center items-center flex h-[15vh]">
              <div className="w-min h-min">
                <h1 className="text-[250%] text-white">PP</h1>
              </div>
            </div>
            <div className="w-full h-max flex justify-center items-center">
              {/** PP CONTENT */}
                <div className='w-[85%] h-max'>
                    <p className='text-white' >Vestibulum molestie nunc risus, at consequat eros tristique vitae. Nullam faucibus venenatis dignissim. Pellentesque sed lectus ornare, volutpat lacus nec, consectetur lectus. Nulla auctor ipsum quis justo efficitur, ut rutrum lorem suscipit. Pellentesque pretium sapien diam, a pellentesque lorem varius ac. Phasellus nec ullamcorper purus. Phasellus sollicitudin luctus blandit. Aliquam eget pharetra nulla. In sollicitudin sapien purus, sit amet ultrices tortor feugiat ac. Donec suscipit sem tortor, non placerat sem luctus eu. Vestibulum euismod turpis ac nisi convallis, in euismod turpis hendrerit. Donec elit libero, dapibus id vehicula in, egestas quis nisi. Cras dignissim suscipit velit, sit amet consectetur enim ultricies at. Proin tristique velit sed erat sollicitudin egestas. Morbi venenatis ante.  Vestibulum molestie nunc risus, at consequat eros tristique vitae. Nullam faucibus venenatis dignissim. Pellentesque sed lectus ornare, volutpat lacus nec, consectetur lectus. Nulla auctor ipsum quis justo efficitur, ut rutrum lorem suscipit. Pellentesque pretium sapien diam, a pellentesque lorem varius ac. Phasellus nec ullamcorper purus. Phasellus sollicitudin luctus blandit. Aliquam eget pharetra nulla. In sollicitudin sapien purus, sit amet ultrices tortor feugiat ac. Donec suscipit sem tortor, non placerat sem luctus eu. Vestibulum euismod turpis ac nisi convallis, in euismod turpis hendrerit. Donec elit libero, dapibus id vehicula in, egestas quis nisi. Cras dignissim suscipit velit, sit amet consectetur enim ultricies at. Proin tristique velit sed erat sollicitudin egestas. Morbi venenatis ante.  Vestibulum molestie nunc risus, at consequat eros tristique vitae. Nullam faucibus venenatis dignissim. Pellentesque sed lectus ornare, volutpat lacus nec, consectetur lectus. Nulla auctor ipsum quis justo efficitur, ut rutrum lorem suscipit. Pellentesque pretium sapien diam, a pellentesque lorem varius ac. Phasellus nec ullamcorper purus. Phasellus sollicitudin luctus blandit. Aliquam eget pharetra nulla. In sollicitudin sapien purus, sit amet ultrices tortor feugiat ac. Donec suscipit sem tortor, non placerat sem luctus eu. Vestibulum euismod turpis ac nisi convallis, in euismod turpis hendrerit. Donec elit libero, dapibus id vehicula in, egestas quis nisi. Cras dignissim suscipit velit, sit amet consectetur enim ultricies at. Proin tristique velit sed erat sollicitudin egestas. Morbi venenatis ante.</p>
                </div>
              {/** END PP CONTENT */}
            </div>
          </div>
          <div id="szmsz" className="w-full h-max bg-violet-700">
            <div className="w-full h-[15vh] flex justify-center items-center">
              <div className="w-min h-min">
                <h1 className="text-[250%] text-white">SZMSZ</h1>
              </div>
            </div>
            <div className="w-full h-max block">
              {/** PROGRAMOK CONTENT */}
              <div className='ml-auto mr-auto w-[85%] h-max text-center'>
                <p className=' text-gray-300 text-[120%]'>Vestibulum molestie nunc risus, at consequat eros tristique vitae. Nullam faucibus venenatis dignissim. Pellentesque sed lectus ornare, volutpat lacus nec, consectetur lectus. Nulla auctor ipsum quis justo efficitur, ut rutrum lorem suscipit. Pellentesque pretium sapien diam, a pellentesque lorem varius ac. Phasellus nec ullamcorper purus. Phasellus sollicitudin luctus blandit. Aliquam eget pharetra nulla. In sollicitudin sapien purus, sit amet ultrices tortor feugiat ac. Donec suscipit sem tortor, non placerat sem luctus eu. Vestibulum euismod turpis ac nisi convallis, in euismod turpis hendrerit. Donec elit libero, dapibus id vehicula in, egestas quis nisi. Cras dignissim suscipit velit, sit amet consectetur enim ultricies at. Proin tristique velit sed erat sollicitudin egestas. Morbi venenatis ante.  Vestibulum molestie nunc risus, at consequat eros tristique vitae. Nullam faucibus venenatis dignissim. Pellentesque sed lectus ornare, volutpat lacus nec, consectetur lectus. Nulla auctor ipsum quis justo efficitur, ut rutrum lorem suscipit. Pellentesque pretium sapien diam, a pellentesque lorem varius ac. Phasellus nec ullamcorper purus. Phasellus sollicitudin luctus blandit. Aliquam eget pharetra nulla. In sollicitudin sapien purus, sit amet ultrices tortor feugiat ac. Donec suscipit sem tortor, non placerat sem luctus eu. Vestibulum euismod turpis ac nisi convallis, in euismod turpis hendrerit. Donec elit libero, dapibus id vehicula in, egestas quis nisi. Cras dignissim suscipit velit, sit amet consectetur enim ultricies at. Proin tristique velit sed erat sollicitudin egestas. Morbi venenatis ante.</p>
              </div>
              {/** END PROGRAMOK CONTENT */}
            </div>
          </div>
          <div id="hazirend" className="w-full h-max bg-violet-700 block">
            <div className='mr-auto ml-auto flex justify-center items-center'>
                <div className="w-min h-min">
                    <h1 className="text-[250%] text-white">Házirend</h1>
                 </div>
            </div>  
            <div className='mr-auto ml-auto flex justify-center items-center h-[40vh] w-full'>
                <p>  </p>
            </div>
          </div>
          <div id="munkaterv" className="w-full h-max bg-violet-700">
            <div className="w-full h-[15vh] flex justify-center items-center">
              <div className="w-min h-min">
                <h1 className="text-[250%] text-white">Munkaterv</h1>
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
          <div id="gdpr" className="w-full h-max  bg-violet-700">
            <div className="w-full h-[15vh] flex justify-center items-center">
                <div className="w-max h-min">
                  <h1 className="text-[250%] text-white">GDPR</h1>
                </div>
              </div>
              <div className="w-full h-[80%] block">
                <div className="w-[85%] h-[20vh] text-justify text-white ml-auto mr-auto">
                    <p className="text-[120%]"> Vestibulum molestie nunc risus, at consequat eros tristique vitae. Nullam faucibus venenatis dignissim. Pellentesque sed lectus ornare, volutpat lacus nec, consectetur lectus. Nulla auctor ipsum quis justo efficitur, ut rutrum lorem suscipit. Pellentesque pretium sapien diam, a pellentesque lorem varius ac. Phasellus nec ullamcorper purus. Phasellus sollicitudin luctus blandit. Aliquam eget pharetra nulla. In sollicitudin sapien purus, sit amet ultrices tortor feugiat ac.</p>
                </div>
              </div>
          </div>
          <div id='letoltheto_document' className="w-full h-max  bg-violet-700">
            <div className="w-full h-[15vh] flex justify-center items-center">
                <div className="w-max h-min">
                  <h1 className="text-[250%] text-white">Letölthető Dokumentumok</h1>
                </div>
            </div>
            <div className='w-full block h-max'>
                    {
                     Url.map((data,index) => (
                      <>
                        <div key={index} className='mt-[2%]'>
                          <div>
                            {
                              <DocumentCard src={data.src} name={"file_name"} />
                            }
                          </div>
                        </div>
                      </>
                     ))  
                    }
                <div className='h-[10vh]'>

                </div>
            </div>
          </div>
        </div>
      </div>
  )
}

export default Document;