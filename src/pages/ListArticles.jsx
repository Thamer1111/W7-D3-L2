import React, { useEffect, useState } from 'react'
import { Link } from 'react-router'

export default function ListArticles() {
    const [articles, setarticles] = useState([])
    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(data => setarticles(data))
    }, [])
  return (
    <div className='bg-gray-200'>
        <h1 className='text-xl text-center font-bold'>List of articles</h1>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 my-4 mx-3 '>
            {articles.map((itme)=>{
                return(
                    <div className='rounded-lg shadow flex flex-col justify-between items-start h-40 p-3 bg-white'>
                        <h1>{itme.title}</h1>
                        <Link to={`/${itme.id}`}>
                        <button className='border-2 bg-gray-400 p-2 rounded-2xl'>Read More {'>>'} </button>
                        </Link>
                        
                    </div>
                );
            })}
        </div>

    </div>
  )
}
