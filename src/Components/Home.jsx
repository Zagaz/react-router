import React from 'react'
import { useNavigate } from "react-router";
import { FaHome } from "react-icons/fa";

const Home = () => {
  let navigate = useNavigate();
  return (
    <section className='container'>
      <div className="row mt-3 justify-content-center ">
        <div className="col-8 card text-center p-3 bg-light">
          <h1><FaHome /> Home</h1>
        </div>
        <button onClick={() => { navigate("/services") }} > Services </button>
      </div>
    </section>
  )
}

export default Home