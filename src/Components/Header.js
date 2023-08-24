import React from 'react'
import MobileMenu from './MobileMenu'
import {useState, useEffect} from 'react'
import { useTheme } from './ThemeProvider'

function Header() {
  const [mobileMenu, setMobileMenu] = useState(false)
  const themeObj = useTheme()
  console.log(themeObj)

  function handleMobileMenu() {
    setMobileMenu((prev)=>{setMobileMenu(!prev)})
    if (mobileMenu)
    {
        document.body.style.overflowY = 'auto'
    } else {
        document.body.style.overflowY = 'hidden'
    }
  }

  useEffect(()=>{

    console.log("Here")

  }, [])

  return (
    <>
    <header className='header container'>
        <nav>
            <ul className='header__menu'>
                <li><a className="header__link" href="#about">About</a></li>
                <li><a className="header__link" href="#featured">Work</a></li>
                <li><a className="header__link" href="#contact">Contact</a></li>
                <li className='header__line'></li>
                <li>
                    <button className="header__sun" onClick={()=>{themeObj.handleTheme()}}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
                    </svg>
                    </button>
                </li>
                <li>
                    <a className="header__resume btn" href="#">Resume</a>
                </li>
            </ul>
            <button id='theme-toggle' className='header__bars' onClick={handleMobileMenu}> 
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5" />
                </svg>

                </button>

        </nav>
    </header>
    {(mobileMenu)?<MobileMenu handleMobileMenu={handleMobileMenu}></MobileMenu>:<></>}
    </>
  )
}

export default Header