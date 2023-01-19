import React, { ReactNode } from 'react'
import Cards from "../Components/Cards"
import '../Styles/Home.css'

const Home = () => {
  return (
    <div className='home-page'>
      <section className='home-title'>Welcome to AniNext</section>
      <Cards />
    </div>
  )
}

export default Home