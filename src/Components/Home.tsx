import React, { ReactNode } from 'react'
import Cards from "../Components/Cards"
import '../Styles/Home.css'

interface PropTypes {
  setGlobalId: Function
}

const Home = ({setGlobalId}:PropTypes) => {
  return (
    <div className='home-page'>
      <section className='home-title'>Welcome to AniNext</section>
      <Cards setGlobalId={setGlobalId} />
    </div>
  )
}

export default Home