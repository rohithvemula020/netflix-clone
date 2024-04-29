import React from 'react'
import Navbar from '../components/navbar'
import Banner from '../components/banner'
import Row from '../components/row'
// import Home from './home'
// import Movies from './movies'
// import Mylist from './mylist'
// import Popular from './popular'
// import Tvshows from './tvshows'
import api from '../Apis/api'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
const NetflixMain = () => {
  return (
    <div>
      {/* rendering the all components for buliding the structure */}
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/' />
        <Route path='/Movies' />
        <Route path='/Mylist' />
        <Route path='/Popular'/>
        <Route path='/Tvshows' />
      </Routes>
      </BrowserRouter>
      {/* <img src="/src/assets/banner-image.jpg" alt="" width='100%' /> */}
      <Banner/>
      {/* <Banner fetchBanner={api.fetchTrending}/> */}
      <Row title='Top Trending Movies' fetchUrl={api.fetchTrending}/>
      <Row title='TopRated Movies' fetchUrl={api.fetchTopratedmovies}/>
      <Row title='Netflixoriginals' fetchUrl={api.fetchNetflixoriginals}/>
      <Row title='Comedy Movies' fetchUrl={api.fetchComedymovies}/>
      <Row title='Romantic Movies'fetchUrl={api.fetchRomanticmovies}/>
      <Row title='Action Movies' fetchUrl={api.fetchActionmovies}/>
      <Row title='Horror Movies' fetchUrl={api.fetchHorrormovies}/>
      <Row title='Documentaries' fetchUrl={api.fetchDocumentaries}/>
      
    </div>
  )
}
export default NetflixMain
