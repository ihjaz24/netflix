import React, { useEffect, useState } from 'react'
import "./Post.css"
import axios from '../../axios'
import { imageUrl} from '../../constants/constants'
function Post(props) {
  const [movies, setMovies] = useState([])
  useEffect(() => {
    axios.get(props.urls).then(response=>{
      console.log(response.data)
      setMovies(response.data.results)
    }).catch(err=>{
      //alert('network Error')
    })
  }, [])
  
  return (
    <div className='row'>
        <h2>{props.title}</h2>
        <div className="posters">
          {movies.map((obj)=>
            <img className={props.isSmall? 'smallPost':'post'} src={`${imageUrl+obj.backdrop_path}`} alt="post" />
          )}
            
           
        </div>
    </div>
  )
}

export default Post
