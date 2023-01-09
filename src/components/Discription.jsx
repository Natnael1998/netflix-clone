import React from 'react'
import { Link,useParams } from 'react-router-dom'
import Movie from './Movie'
import axios from 'axios'
import { useState,useEffect } from 'react'
import Youtube from 'react-youtube';


const Discription = () => {
 
  const params = useParams()
  const [m,setM] = useState({})
  const [trailer,setTrailer] = useState("")
  const url = `https://api.themoviedb.org/3/movie/${params.id}?api_key=ab71a1e37d0aba372dd47200b7428442`
  const vid = `http://api.themoviedb.org/3/movie/${params.id}/videos?api_key=ab71a1e37d0aba372dd47200b7428442`
  useEffect(() => {
    axios.get(url).then((res) => setM(res.data))
    axios.get(vid).then((r) => setTrailer(r.data.results))

    
  }, [url]);
  console.log(m)
 
  return (
    <div className='relative h-full w-full'>
<div className='absolute top-20 w-full h-full '>
<iframe className='mx-auto' src={`https://www.youtube.com/embed/${trailer[0]?.key}` } width="90%" height={600} ></iframe>

<h1 className='text-white text-5xl my-10'>{m?.title}</h1>
    <p className='text-white mb-5'>Realise Date :  {m?.release_date}</p>
    
    <p className='text-white'>{m?.overview}</p>
    <div className='flex items-center mt-5'>
  <p className='text-white text-2xl mr-3 '> Genres: </p>
<p className='text-white flex gap-5 text-2xl'>{m.genres?.map((n) => (<p>{n?.name},</p>))}</p>

</div>
</div>

    



    </div>
  )
}

export default Discription