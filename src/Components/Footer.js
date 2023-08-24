import React, { useEffect } from 'react'







function Footer() {

  useEffect(()=>{
    const lazyImgs = document.querySelectorAll('.lazy')
    const observer = new IntersectionObserver((entries, observer)=>{
      entries.forEach((entry)=>{
        if(entry.isIntersecting)
        {
          let img = entry.target;
          img.src = img.dataset.src;
          img.classList.remove('loading')
          img.classList.add('loaded')
          observer.unobserve(entry.target)
        }
      })
    })
    
    lazyImgs.forEach((image)=>{
      image.classList.add('loading')
      observer.observe(image)
    })
    
    }, [])
  
import React from 'react'

function Footer() 
  return (
   <footer class="footer container section">
    <h3 class="footer__title"> ~Jayaashree S~ </h3>
   </footer>
  )
}

export default Footer