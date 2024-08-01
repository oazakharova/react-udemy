import React from 'react'
import { NavLink } from 'react-router-dom'

const Menu = () => {
  return (
    <nav>
      {/* свойство end - изменять стили для этой ссылки, только если мы находимся непосредственно на ней*/}
      <NavLink style={ ( { isActive } ) => isActive ? {color:'orange', textDecoration: 'none'} : {} } to='.' end>Home</NavLink>
      <NavLink className={ ( { isActive } ) => isActive ? 'activeLink' : 'link'} to='about'>About</NavLink>
      <NavLink to='contacts'>Contacts</NavLink>
      <NavLink to='courses'>Courses</NavLink>
    </nav>
  )
}

export default Menu