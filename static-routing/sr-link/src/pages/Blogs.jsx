import React from 'react'
import Header from '../common/Header'
import { data } from '../Data/datablog'
import { Link } from 'react-router-dom'

export default function Blogs() {
    let allBlogs=data.map((v,i)=>{
        return(
            <div className="blogItems" key={i}>
                <h3> {v.title}</h3>
                <p>
                   
                    {v.body}

                </p>
                <button><Link to={`/blog/${v.id}`}>Read More</Link>  </button>
            </div>

        )
    })
  return (
    <div>
        <Header/>
        <h1>
            Blogs Page
        </h1>
        <div className="container">
          {allBlogs}
        </div>
    </div>
  )
}
