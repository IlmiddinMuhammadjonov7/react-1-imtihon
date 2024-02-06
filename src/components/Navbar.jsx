import React from 'react'
import { FaRegMoon } from "react-icons/fa";
import useDarkMode from "use-react-dark-mode";


const Navbar = () => {
  const {isDark, toggle} = useDarkMode()

  return (
    <div>
        <ul className='navbar'>
            <li>Where in the world?</li>
            <li className='nav_2'><FaRegMoon onClick={toggle}/>Dark mode</li>
        </ul>
    </div>
  )
}

export default Navbar