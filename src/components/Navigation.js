import React from 'react';
import {NavLink} from 'react-router-dom';

const Navigation = () =>{
  return <div>
    <NavLink to="/">Home</NavLink>
    <NavLink to="/location">loaction</NavLink>
    <NavLink to="/detail/:id">detail</NavLink>
    <NavLink to="/about">about</NavLink>
  </div>
};

export default Navigation;