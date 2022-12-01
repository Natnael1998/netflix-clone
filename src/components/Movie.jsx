import React,{useState} from 'react'
import {FaHeart , FaRegHeart} from "react-icons/fa"

const Movie = ({items}) => {
    const [like ,setLike] = useState(false)

  return (
    <div className='w-[160px] sm:w-[200px] md:w-[240px] lg:w-[280px] inline-block cursor-pointer relative p-2'>
                    <img className='w-full h-auto block' src={`https://image.tmdb.org/t/p/w500/${items.backdrop_path}`} alt={items?.title} />
                    <div className='absolute top-0 left-0 w-full h-full hover:bg-black/80 opacity-0 hover:opacity-100 text-white'>
                    <p className='white-space-normal text-xs md:text-sm font-bold flex justify-center items-center  h-full text-center'>{items?.title}</p>
                   <p>
                    {like ? <FaHeart  className='absolute top-4 left-4 text-grey-300' /> : <FaRegHeart className='absolute top-4 left-4 text-grey-300' />}
                   </p>
                    </div>

                    </div>
  )
}

export default Movie