// import React from 'react'
import { useState,useEffect } from 'react'
import axios from 'axios'
// import ArrowBackIosOutlinedIcon from '@mui/icons-material/ArrowBackIosOutlined';
// import ArrowForwardIosOutlinedIcon from '@mui/icons-material/ArrowForwardIosOutlined';

import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';


// default  or base URL's
const Base_url='https://api.themoviedb.org/3'
const Base_ImgUrl = "https://image.tmdb.org/t/p/original/"

const Row = ({title,fetchUrl}) => {
  const [movies,setMovies]=useState([])

  const [isScroll,setIsScrolled]=useState(0)


  useEffect(()=>{
    const Fetchdata =async()=> {
      try {
        const response = await axios.get(`${Base_url}${fetchUrl}`);
        // const response = await axios.get(`${Base_url}${api.fetchtoprated}`); img lo change backdroppath

        console.log(response);
        // console.log(response.data.results);
        setMovies(response.data.results)
        
      } catch (error) {
        console.error(error);
      }
    }
    // calling the fetch data function
    Fetchdata()
    return ()=>{}
  },[fetchUrl])
  const handlescrollright=()=>{
    setIsScrolled(previousState=>previousState+150)
  }
  const handlescrollleft=()=>{
    setIsScrolled(previousState=>previousState-150)
  }
  return (
    <div className='container-fluid bg-dark'>
      <h1 className='fw-bold text-white fs-4'> {title}</h1>
      <div className="row align-items-center">
        <div className="col-auto">
          <button className='transparent'><ArrowBackIosNewIcon className='arrowleft' onClick={handlescrollleft}/></button>
        </div>
        <div className="col" style={{overflow:'hidden'}}>
          <div className='d-flex' style={{transform:`translateX(-${isScroll}px)`,transition:'transform 0.5s linear'}}>
            {movies && movies.map((items,index)=>{
              return(
                <img key={index} src={`${Base_ImgUrl}${items.poster_path}`} alt="" style={{width:'150px',cursor:'pointer'}} className='img mx-1'/>
              )
            })}
          </div>
        </div>
        <div className="col-auto">
          <button className='transparent'><ArrowForwardIosIcon className='arrowright' onClick={handlescrollright}/></button>
        </div>
      </div>
    </div>
  )
}

export default Row

