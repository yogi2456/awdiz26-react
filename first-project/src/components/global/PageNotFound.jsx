import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const PageNotFound = () => {

    const router = useNavigate();

    useEffect(() => {
        setTimeout(() => {
            router('/')
        }, 3000)
    }, [])
  return (
    <div>
      <h1>Page not Found</h1>
      <p>redirecting your page in home in 3 sec..</p>
    </div>
  )
}

export default PageNotFound
