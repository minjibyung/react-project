import { Link } from 'react-router-dom';

import './navBarHome.css';

// const itemsNavBar = ["Home", "Services", "FAQ", "About us"];

export const NavBarHome = () => {
  return (

<nav>
      <ul className='header'>
        <Link to="/"><li>Home</li></Link>
        <Link to="/AboutUS"><li>AboutUS</li></Link>
        <Link to="/ContactUS"><li>ContactUS</li></Link>
        <Link to="/ChangeColor"><li>ChangeColor</li></Link>
        <Link to="/Counter"><li>Counter</li></Link>
      </ul>
      <ul>
        <img src="https://64.media.tumblr.com/d1ef68a99d73c014d3ce94fd73087176/60178bf672a34d0e-cb/s1280x1920/d524dd249830130abf8ec577c23daa470fa99358.jpg" alt="Jun-ito"/>
      </ul>
    </nav>


  )
}