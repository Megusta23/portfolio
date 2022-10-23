import React from 'react'
import Header from './components/header/header'
import Nav from './components/Nav/Nav'
import About from './components/about/about'
import Experience from './components/experience/experience'
import Services from './components/services/services'
import Portfolio from './components/portfolio/portfolio'
import Testimonials from './components/testimonials/testimonials'
import Contact from './components/contact/Contact'
import Footer from './components/footer/footer'

export const App = () => {
  return (
    <>
    <Header />
    <Nav />
    <About />
    <Experience />
    <Services />
    <Portfolio />
    <Testimonials />
    <Contact />
    <Footer />

    </>
  )
}

export default App