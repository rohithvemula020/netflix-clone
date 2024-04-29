import {useState} from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  const [expanded ,setExpanded]=useState(false)
  const [isscrolled,setIsscrolled]=useState(false)


   const handleToggle=()=>{
    setExpanded(!expanded)
   }

  //  event for scroll behaviour
  window.onscroll=()=>{
   setIsscrolled(window.pageYOffset === 0 ? false : true)
   return ()=>(window.onscroll=null)
  }

  return (
<nav className={`navbar navbar-expand-sm  fixed-top ${isscrolled?'bg-black':'bg-transparent'}`}>
  <div className="container">
  <a className="navbar-brand" href="#">
    <img src="./src/assets/Netflix logo.png" alt="Bootstrap" width="100" height="40" />
    </a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation" onClick={handleToggle}>
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className={`collapse navbar-collapse ${!!expanded && 'show'}`} id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
         <NavLink className='nav-link' to='' >Home</NavLink>
        </li>
        <li className="nav-item">
        <NavLink className='nav-link' to='/Tvshows' >TVshows</NavLink>
        </li>
        <li className="nav-item">
        <NavLink className='nav-link' to='/Movies' >Movies</NavLink>
        </li>
        <li className="nav-item">
        <NavLink className='nav-link' to='/Popular' >New&Popular</NavLink>
        </li>
        <li className="nav-item">
        <NavLink className='nav-link' to='/Mylist' >Mylist</NavLink>
        </li>
        <li className="nav-item">
        <a className='nav-link'  >BrowsebyLanguages</a>
        </li>
      </ul>
      <ul className='navbar-nav ms-auto mb-2 mb-lg-0'>
       <li className="nav-item mx-3">
         <i className="bi bi-search fs-3"></i>
     
       </li>
       <li className="nav-item mx-3">
          <i className="bi bi-bell-fill fs-3"></i>
       </li>
       <li className="nav-item mx-3">
       <i className="bi bi-person-circle fs-3"></i>
       </li>
      </ul>
    </div>
  </div>
</nav>
  )
}

export default Navbar
