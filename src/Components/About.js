import React from 'react'

function About() {
  return (
   <section id="about" className='about container section'>
    <div className='about__content'>
      <h2 className='about__title'>About</h2>
      <p className='about__description'>Hello there! I'm Jayaashree, a Frontend developer based on Chennai. I wake up in the morning, grab a cup of coffee, open up my laptop and bild things that live on the web all day, everyday.</p>
      <p className='about__description'>People who know me say I'm obsessed, that's fair, I am very driven and love learning new things.</p>
      <p className='about__description'>I recently create a Youtube channel called CodingForV where I upload videos on fron-end web development topics.</p>
      <hr className='about__hr'/>
      <h3 className='about__subtitle'> Technologies</h3>
      <ul className='about__ul-container'>
      <ul className='about__ul'>
        <li className="about__list">Javascript</li>
        <li className="about__list">CSS</li>
        <li className="about__list">React JS</li>
        </ul>
        <ul className='about__ul'>
        <li className="about__list">Next JS</li>
        <li className="about__list">Tailwind CSS</li>
        <li className="about__list">HTML5</li>
        </ul>
      </ul>
      
    </div>
    <div className='about__img-wrapper'>
    <img className="about__img lazy" 
    src="https://fakeimg.pl/900x900"
    data-src='/photo.jpg' alt='Profile picture' />
    </div>
   </section>
  )
}

export default About