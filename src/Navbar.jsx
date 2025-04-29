import React from 'react'
import { Link } from 'react-router'

const Navbar = () => {
    return (
        <>
            <Link to={'/'}>Home</Link>
            <Link to={'/services'}>Services</Link>
            <Link to={'/contact'}>Contact</Link>
        </>
    )
}

export default  Navbar