import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
      <Link to="/"> Home </Link>
      <Link to="/Protected"> My Account </Link>
      <Link to="/Public"> Public </Link>
    </div>
  )
};

export default Navbar;