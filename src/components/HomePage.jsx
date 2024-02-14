import React from 'react'
import Gicon from "../assets/sideimg.JPG"
import Lolom from "../assets/lolom.JPG"
import ContactPage from './ContactPage'


const HomePage = () => {
  return (
    <div>
    <div className='bg-regal-gray py-6 md:flex'>
    <div className="md:block hidden ">
    <img src={Gicon} alt="img" className="" />
    </div>
    <div className="">
      <div className="md:w-128 w-122 md:mx-0 mx-auto bg-white">
        <div className='mx-auto'>
          <img src={Lolom} alt="img" className="mx-auto my-6 w-56 md:w-72" />
        </div>
       <div className=''>
        <ContactPage />
       </div>
      </div>
      <div className="">
        <div className="text-center text-xs font-semibold">Don't have Microsoft 365 email?</div>
         <div className="py-2 ">
            <button
              type="submit"
              className="px-6 py-2 mx-6 md:mx-0 w-80 md:w-full border-2 text-black font-semibold bg-white"
              // onClick={handleAlert}
            >
              Send
            </button>
        </div>
      </div>
    </div>
    </div>
    </div>
  )
}

export default HomePage
