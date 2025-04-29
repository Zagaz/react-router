import React from 'react'
import { Link } from 'react-router-dom'
import { FaCircleExclamation } from "react-icons/fa6";

const About = () => {
    return (
        <section className='container'>
            <div className="row">

                <div className="row mt-3 justify-content-center ">
                    <div className="col-8 card text-center p-3 bg-info">
                   

                        <h1> <FaCircleExclamation />About</h1>

                    </div>

                </div>
            </div>
            <div className="row">
                <div className="col mt-3 justify-content-center ">

                    <Link to="/home" className='btn btn-primary justify-self-center'> Home</Link>
                </div>

            </div>
            <div className="row">

            </div>


        </section>
    )
}

export default About