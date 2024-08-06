import React from 'react'
import { useParams } from 'react-router-dom'

const Company = () => {
  const { company } = useParams()

  return (
    <div>
      {company} Company Details
    </div>
  )
}

export default Company
