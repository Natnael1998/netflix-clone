import React , {useState} from 'react'
import Main from '../components/Main'
import axios from 'axios';
import { async } from '@firebase/util';
import Movie from '../components/Movie';

const Searchpage = () => {
    const [m,setM] = useState([])
    const [bool,setBool] = useState(false)
    const SearchMovies =  () => {
    setM([])
        let input = document.getElementById("s").value;
        const api = `https://api.themoviedb.org/3/search/movie?api_key=ab71a1e37d0aba372dd47200b7428442&query=${input}`;
        axios.get(api).then((res) => {
        setBool(!bool)
         setM(res.data.results)
        });
        

      };
    
  return (
   
    <>
    
   <Main />
   <div className='flex-row items-center justify-center mx-10'>
   <div className="flex  w-[50%]    items-center  ">
            <input
              className="text-white text-xl bg-slate-900/80 outline-none rounded-xl w-full h-[60px] "
              id="s"
            ></input>
            <button
              className="  bg-red-600 text-white rounded py-2 px-2 h-[50px] mx-2"
              onClick={SearchMovies}
            >
              Search
            </button>
            
          </div>
          

          <div>
            {m.map(item => {
            const image = `https://image.tmdb.org/t/p/w500/${item.backdrop_path}`;
            console.log(item)
            return (
                <>
                <Movie items={item} />
                </>
            )

            })
            
            }
          </div>
          
    
   </div>
   
    </>
  )
}

export default Searchpage