import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router';


export default function Articl() {

    const [artic, setartic] = useState({})

    const id = useParams()


    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/posts/${id.id}`)
            .then(response => response.json())
            .then(data => setartic(data))
    }, {});

    return (
        <div className='bg-gray-200 h-screen'>
            <div className='rounded-lg shadow p-3 flex flex-col justify-between items-center m-3 h-60 bg-white'>
                <h1 className='text-lg'>{artic.title}</h1>
                <p className='text-md' >{artic.body}</p>
                <Link to="/">
                    <button className='border-2 bg-gray-400 p-2 rounded-2xl'>Back to articles list </button>
                </Link>

            </div>
        </div>
    )
}
