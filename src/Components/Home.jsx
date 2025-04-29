import React from 'react'
import { FaHome } from "react-icons/fa";
const Home = () => {
  return (
    <section className='container'>
      <div className="row mt-3 justify-content-center ">
        <div className="col-8 card text-center p-3 bg-light">
          <h1><FaHome /> Home</h1>
        </div>
      </div>
    </section>
  )
}

export default Home