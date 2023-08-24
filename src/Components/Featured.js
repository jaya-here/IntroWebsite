import React from 'react'

function Featured() {
  return (
    <section id="featured" className="featured container section">
        <h3 className="featured__subtitle">Featured Project</h3>
        <div className='featured__wrapper'>
        <h2 className="featured__title">Music player</h2>
        <a className="featured__link"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" >
       <path strokeLinecap="round" strokeLinejoin="round" d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244" />
       </svg>
</a>
</div>
        <p className="featured__description">
        HarmonyTunes is a cutting-edge music player meticulously crafted using the power of React JS and the sleek styling capabilities of Tailwind CSS. This dynamic combination results in an immersive and intuitive music playback application that seamlessly blends innovation with aesthetics.
        </p>
        <div className='featured__info-container'>
        <div>
            <h3 className="featured__label">Tech Stack</h3>
            <ul className='featured__tech-stack'>
                <li className='featured__info'>HTML5</li>
                <li className='featured__info'>CSS</li>
                <li className='featured__info'>Javascript</li>
                <li className='featured__info'>React JS</li>
                <li className='featured__info'>Tailwind CSS</li>
                <li className='featured__info'>Redux</li>
            </ul>
        </div>
        <div>
            <h3 className='featured__label'>Project Type</h3>
            <p class="featured__info">Front End</p>

        </div>
        <div>
            <h3 className='featured__label'>Timeline</h3>
            <p class="featured__info">July 2023</p>
        </div>
        </div>
        <div className="featured__img-container">
        <div className='featured__img-wrapper'> 
        <img className="Featured__imgceleb lazy" src="https://fakeimg.pl/900x900"
    data-src='/Joon.jpeg' alt="joon"></img>
        </div>
        <div className='featured__img-wrapper'> 
        <img className="Featured__imgceleb lazy" src="https://fakeimg.pl/900x900"
    data-src='/JoonSoft.jpeg' alt="joon"></img>
        </div>
        <div className='featured__img-wrapper'>
        <img className="Featured__imgceleb lazy" src="https://fakeimg.pl/900x900"
    data-src='/Gojo.jpeg' alt="gojo"></img>
        </div>
        <div className='featured__img-wrapper'>
        <img className="Featured__imgceleb lazy" src="https://fakeimg.pl/900x900"
    data-src='/GojoSoft.jpeg' alt="gojo"></img>
        </div>
        <div className='featured__img-wrapper'>
        <img className="Featured__imgceleb lazy" src="https://fakeimg.pl/900x900"
    data-src='/Geto.jpeg' alt="geto"></img>
        </div>
        <div className='featured__img-wrapper'>
        <img className="Featured__imgceleb lazy" src="https://fakeimg.pl/900x900"
    data-src='/GetoSoft.jpeg' alt="geto"></img>
        </div>
        <div className='featured__img-wrapper'>
        <img className="Featured__imgceleb lazy" src="https://fakeimg.pl/900x900"
    data-src='/Corey.jpeg' alt="corey"></img>
        </div>
        <div className='featured__img-wrapper'>
        <img className="Featured__imgceleb lazy" src="https://fakeimg.pl/900x900"
    data-src='/CoreySoft.jpeg' alt="corey"></img>
        </div>
        </div>
        <section class="work container section">
        <h2 className="work__title">Projects</h2>
        <p className="work__description">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod ante nec turpis volutpat ultricies. Nunc at blandit ligula. Integer volutpat justo non urna suscipit, sed ultricies neque dictum. Proin dapibus fringilla sem, sed auctor justo volutpat nec. 
        </p>
        <div className='work__container'>
        <h3 className='work__project-title'>Anime city 1</h3>
        <div className='work__img-wrapper work__image1'>
        <img src="https://fakeimg.pl/900x900"
    data-src='/1.png' alt="anime city" className='lazy'></img>
        </div>
        <div className='work__project work__content1'>
        <h3 className='work__subtitle'>Anime City 1</h3>    
        <p className='work__project-description1'>"I'm like a one-hit wonder, but with code. Call me the 'Single Project Sensation'!"   </p>
        <p className='work__project-description2'>"They say Rome wasn't built in a day, and neither was my coding prowess. I've got that one project to prove it!" </p>
        <a className='btn work__project-btn' href="#">Website</a>
        </div>

        <h3 className='work__project-title'>Anime city 2</h3>
        <div className='work__img-wrapper work__image2'>
        <img src="https://fakeimg.pl/900x900"
    data-src='/2.png' alt="anime city" className='lazy'></img>
        </div>
        <div className='work__project work__content2'>
        <h3 className='work__subtitle'>Anime City 2</h3> 
        <p className='work__project-description1'>"I'm like a one-hit wonder, but with code. Call me the 'Single Project Sensation'!"   </p>
        <p className='work__project-description2'>"They say Rome wasn't built in a day, and neither was my coding prowess. I've got that one project to prove it!" </p>
        <a className='btn work__project-btn' href="#">Website</a>
        </div>

        <h3 className='work__project-title'>Anime city 3</h3>
        <div className='work__img-wrapper work__image3'>
        <img src="https://fakeimg.pl/900x900"
    data-src='/3.png' alt="anime city" className='lazy'></img>
        </div>
        <div className='work__project work__content3'>
        <h3 className='work__subtitle'>Anime City 3</h3> 
        <p className='work__project-description1'>"I'm like a one-hit wonder, but with code. Call me the 'Single Project Sensation'!"   </p>
        <p className='work__project-description2'>"They say Rome wasn't built in a day, and neither was my coding prowess. I've got that one project to prove it!" </p>
        <a className='btn work__project-btn' href="#">Website</a>
        </div>

        <h3 className='work__project-title'>Anime city 4</h3>
        <div className='work__img-wrapper work__image4'>
        <img src="https://fakeimg.pl/900x900"
    data-src='/4.png' alt="anime city" className='lazy'></img>
        </div>
        <div className='work__project work__content4'>
        <h3 className='work__subtitle'>Anime City 4</h3> 
        <p className='work__project-description1'>"I'm like a one-hit wonder, but with code. Call me the 'Single Project Sensation'!"   </p>
        <p className='work__project-description2'>"They say Rome wasn't built in a day, and neither was my coding prowess. I've got that one project to prove it!" </p>
        <a className='btn work__project-btn' href="#">Website</a>
        </div>

        <h3 className='work__project-title'>Anime city 5</h3>
        <div className='work__img-wrapper work__image5'>
        <img src="https://fakeimg.pl/900x900"
    data-src='/5.png' alt="anime city" className='lazy'></img>
        </div>
        <div className='work__project work__content5'>
        <h3 className='work__subtitle'>Anime City 5</h3> 
        <p className='work__project-description1'>"I'm like a one-hit wonder, but with code. Call me the 'Single Project Sensation'!"   </p>
        <p className='work__project-description2'>"They say Rome wasn't built in a day, and neither was my coding prowess. I've got that one project to prove it!" </p>
        <a className='btn work__project-btn' href="#">Website</a>
        </div>
        </div>
        </section>
        <section id="contact" className="contact container section">
            <h2 className="contact__title"> Get in Contact </h2>
            <p class="contact__description">
                Whether you are starting a project, have business
                inquiries or just
                want to say hi, my inbox is awlays open so feel 
                featured to reach out and
                I will get back to you as soon as possible.   
            </p> 
            <a class="contact_btn btn"
            href="mailto:jayniketas@gmail.com"
            target="_blank">
                Reach out
            </a>
        </section>




    </section>
  )
}

export default Featured