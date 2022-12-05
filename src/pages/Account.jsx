import React from 'react'
import SavedShows from '../components/SavedShows'

const Account = () => {
  return (
    <>
    <div className='w-full text-white'>
    <img
          className="w-full h-[400px] object-cover"
          src="https://assets.nflxext.com/ffe/siteui/vlv3/0678255b-ecfd-4775-999a-0680d539f07c/2f11b3a5-ff8f-41a5-8202-e7631372ae18/ET-en-20221128-popsignuptwoweeks-perspective_alpha_website_small.jpg"
          alt=""
        />
  <div className='bg-black/60 fixed top-0 left-0 w-full h-[550px]'> 
  <div className='absolute top-[50%] p-4 md:p-8'>
    <h1 className='text-3xl md:text-5xl font-bold'>MY Shows</h1>

  </div>

  </div>

    </div>
    <SavedShows />
    </>
  )
}

export default Account