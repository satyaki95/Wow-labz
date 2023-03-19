import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Container } from '@material-ui/core';
import SimpleBottomNavigation from './component/header';
import Trending from "./Pages/Trending/Trending";
import Movies from "./Pages/Movies/Movies";
import Series from "./Pages/Series/Series";
import Search from "./Pages/Search/Search";
import Favourite from "./Pages/Favourite/Favourite";
import './App.css';
import { useEffect } from "react";

function App() {
  useEffect(()=>{
    localStorage.clear();
  },[]);
  return (
    <BrowserRouter>
      <SimpleBottomNavigation />
      <div className='app'>
      <Container>
        <Routes>
          <Route path='/' element={<Trending />} exact></Route>
          <Route path='/movies' element={<Movies />}></Route>
          <Route path='/series' element={<Series />}></Route>
          <Route path='/search' element={<Search />}></Route>
          <Route path='/favourite' element={<Favourite />}></Route>
        </Routes>
      </Container>
      </div>

    </BrowserRouter>
  );
}

export default App;
