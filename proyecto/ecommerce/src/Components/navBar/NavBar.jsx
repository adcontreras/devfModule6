// import React from 'react'
import './NavBar.scss'

export default function NavBar() {
  return (
    <>
        <nav>
        <div className='nav__logo'>Logo</div>
        <div className='nav__options'>
            <ul>
                <li>Home</li>
                <li>About</li>
                <li>Contact</li>
            </ul>
        </div>
        </nav>
    </>
  )
}

