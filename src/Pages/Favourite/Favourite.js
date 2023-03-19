import React, { useEffect, useState } from 'react';
import axios from "axios";
import SingleContent from '../../component/SingleContent/SingleContent';

const Favourite = () => {

  const [items, setItems] = useState([]);
  useEffect(async()=>{
    for (var i = 0; i < localStorage.length; i++) 
    { var id = localStorage.key(i); 
     var media_type = localStorage.getItem(id); 
    
    var data = await axios.get(
      `https://api.themoviedb.org/3/${media_type}/${id}?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`
    )}
    var item = {
      id : id,
      poster : data.data.poster_path,
      title : data.data.title,
      date : data.data.release_date,
      media_type : media_type,
      vote_average : data.data.vote_average,
    }
    
    // console.log(item);
    setItems(item);
  },[items]);

  return (
    <div>
        <span className='pageTitle'>Favorite</span>
        <div>
        { items.length &&
          items.map((c) => (
            <SingleContent
              key={c.id}
              id={c.id}
              poster={c.poster_path}
              title={c.title || c.name}
              date={c.first_air_date || c.release_date}
              media_type="movie"
              vote_average={c.vote_average}
            />
          ))}
        </div>
        {/* <SingleContent  /> */}
    </div>
  )
}

export default Favourite;