import React from 'react'

function Hero() {
  return (
    <>
    <section className='hero'>
    <img className='hero__img' src="/photo.jpg" alt="Profile Picture"></img> 
    <h1 className="hero__subtitle"> Hi, I'm Jayaashree </h1>
    <h2 className='hero__title'> Frontend <br /> Web Developer  </h2>
    <p className='hero__description'>A passionate <strong>Frontend/Fullstack</strong> web developer and <strong> UI/UX </strong>enthusiast specialized in building stunning pixel perfect interactive websites/applications</p>
    <a className='hero__btn btn'href="#">Reach out</a>
    </section>
    </>
  )
}

export default Hero