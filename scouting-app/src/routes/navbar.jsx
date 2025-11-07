import React from 'react'
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <div className='navbar'>
        <ul className='nav-list'>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/match">Match</Link></li>
            <li><Link to="/strategic">Strategic</Link></li>
            <li><Link to="/pit">Pit</Link></li>
            <li><Link to="/datalookup">Data Lookup</Link></li>
            <li><Link to="/dtf">DTF</Link></li>
        </ul>
    </div>
  );
}
