import { motion } from 'framer-motion'
import React from 'react'

const Me = () => {
  return (
    <motion.div initial={{y : '20px'}} animate={{y : 0}} exit={{y: '20px'}} transition={{ease : 'linear' , duration : 0.3}}>
     My Jobs
    </motion.div>
  )
}

export default Me
