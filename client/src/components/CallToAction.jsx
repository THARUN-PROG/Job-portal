import React from 'react'
import { Link } from 'react-router-dom'

const CallToAction = () => {
  return (
    <Link to='auth/login' className='absolute -right-8 top-[20vh] rotate-[90deg] bg-red-700 max-lg:px-3 py-1 px-2 text-sm rounded-b-md max-lg:text-xs'>
      Get Started
    </Link>
  )
}

export default CallToAction
