import React from 'react'
import './Header.css'
import { Link } from 'react-router-dom'

export default function Header() {
  return (
    <div>
        <h1>Header Part</h1>
        <nav>
            <ul>
                <li><Link to={'/'}>Home</Link></li>
                <li><Link to={'/about-us'}>About</Link></li>
                <li><Link to={'/courses'}>Courses</Link></li>
                <li><Link to={'/blog'}>Blogs</Link></li>
            </ul>
        </nav>
    </div>
  )
}
