import React,{useState} from 'react'
import {FaHeart , FaRegHeart} from "react-icons/fa"
import {UserAuth} from "../context/AuthContext" 
import {db} from "../firebase"
import { arrayUnion,doc,updateDoc} from 'firebase/firestore'
import { Link } from 'react-router-dom'


const Movie = ({items}) => {
    const [like ,setLike] = useState(false)
    const [saved,setSaved] = useState(false)
    const {user} = UserAuth()
    

    const movieID = doc(db,"users",`${user?.email}`)
const saveShow = async () => {
  if(user?.email){
    setLike(!like)
    setSaved(true)
    await updateDoc(movieID,{
      savedShows : arrayUnion({
        id : items.id,
        title : items.title,
        img : items.backdrop_path
      })
    })
  } else {
    alert("please login to save a movie")
  }
}
  return (
    
<div className='w-[160px] sm:w-[200px] md:w-[240px] lg:w-[280px] inline-block cursor-pointer relative p-2 mx-2 movie' key={items.id} >
                    <img className='w-full   rounded block object-cover' src={`https://image.tmdb.org/t/p/w500/${items.backdrop_path}`} alt={items?.title} />
                    <div className='absolute top-0 left-0 w-full h-full hover:bg-black/80 opacity-0 hover:opacity-100 text-white '>
                    <p className='white-space-normal text-xs md:text-sm font-bold flex justify-center items-center  h-full text-center'>{items?.title}</p>
                   <p onClick={saveShow}>
                    {like ? <FaHeart  className='absolute top-4 left-4 text-red-600' /> : <FaRegHeart className='absolute top-4 left-4 text-grey-300' />}
                   </p>
                   <Link to={`/discription/${items.id}`} >
                   <button  className="absolute bottom-2 left-5 hover:underline" >More about movie</button>
                   </Link>
                    </div>


                    </div>

    
    
  )
}

export default Movie;
