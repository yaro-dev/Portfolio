import './App.css'
import { useState } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Services from './components/Services'
import InMynd from './components/InMind'
import Contact from './components/Contact'
import Project from './components/Project'
import { db } from './data/featured'

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';

function App() {

  const [data] = useState(db)

  return (
    <>

      <Header></Header>
      <Hero></Hero>
      <About></About>
      <Skills></Skills>
      <Services></Services>
      <InMynd></InMynd>

      <section className="portfolio section" id="portfolio">

        <h2 className="section__title">Portfolio</h2>
        <span className="section__subtitle">
          Featured Projects
        </span>

        <Swiper
          slidesPerView={1}

          pagination={{ clickable: true }}
          modules={[Pagination, Autoplay, Navigation]}
          navigation={{ clickable: true }}
          autoplay={{ delay: 4000 }}
          className="portfolio__container mySwiper">

          {data.map((project) => (
            <SwiperSlide key={project.id} className="portfolio__content grid swiper-slide">
              <Project
                project={project}
              />
            </SwiperSlide>
          )
          )}

        </Swiper>

      </section>

      <Contact></Contact>

    </>
  )

}

export default App
