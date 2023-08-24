import React from 'react'
import { useTheme } from './ThemeProvider'

function MobileMenu({handleMobileMenu}) {
  let themeObj = useTheme()
  return (
    <div className="mobile-nav">
        <ul className="mobile-nav__menu">
            <li><a className='mobile-nav__link'
            href="#about" onClick={()=>{handleMobileMenu()}}>About</a></li>
            <li><a className='mobile-nav__link'
            href="#featured" onClick={()=>{handleMobileMenu()}}>Work</a></li>
            <li><a className='mobile-nav__link'
            href="#contact" onClick={()=>{handleMobileMenu()}}>Contact</a></li>
            <li className="mobile-nav__link-line"></li>
            <li>
                    <button id='theme-toggle' className="mobile-nav__sun" onClick={()=>{themeObj.handleTheme() 
                      handleMobileMenu()}}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
                    </svg>
                    </button>
            </li>
            <li><a className='mobile-nav__btn btn'
            href="#">Resume</a></li>
        </ul>
    </div>
  )
}

export default MobileMenu