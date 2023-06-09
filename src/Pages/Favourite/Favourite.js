import React, { useEffect, useState } from 'react';
import axios from "axios";
import SingleContent from '../../component/SingleContent/SingleContent';
import "./Favourite.css";

const Favourite = () => {

  const [items, setItems] = useState([]);
//  const movieItems = [];
  const favouriteMovies = async () => {
    for (var i = 0; i < localStorage.length; i++) 
    { var id = localStorage.key(i); 
     var media_type = localStorage.getItem(id); 
    
    var data = await axios.get(
      `https://api.themoviedb.org/3/${media_type}/${id}?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`
    )
    var item = {
      id : id,
      poster : data.data.poster_path,
      title : data.data.title,
      date : data.data.release_date,
      media_type : media_type,
      vote_average : data.data.vote_average,
    }
    console.log(item);
    setItems(items=>[...items,item]);
    console.log(items);  
  }
  }
  useEffect(()=>{
    favouriteMovies();
  },[]);

  return (
    <div>
        <span className='pageTitle'>Favorite</span>
        <div className='favourite'>
        {
          items.map((c) => (
            <SingleContent
              key={c.id}
              id={c.id}
              poster={c.poster}
              title={c.title }
              date={c.date }
              media_type={c.media_type}
              vote_average={c.vote_average}
            />
          ))}
        </div>
    </div>
  )
}

export default Favourite;