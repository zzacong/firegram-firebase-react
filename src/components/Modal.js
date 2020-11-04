import React from 'react'
import { motion } from 'framer-motion'

import useImage from '../hooks/useImage'

function Modal() {
  const { selectedImg, setSelectedImg } = useImage()

  const handleClick = e => {
    const classList = e.target.classList
    if (classList.contains('backdrop') || classList.contains('close')) {
      setSelectedImg(null)
    }
  }

  return (
    selectedImg && (
      <motion.div
        className="backdrop"
        onClick={handleClick}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        <motion.img
          src={selectedImg}
          alt="enlarged pic"
          initial={{ y: '-100vh' }}
          animate={{ y: 0 }}
        />
        <motion.button
          className="close"
          onClick={handleClick}
          whileHover={{ opacity: 0.8 }}
        >
          &#10005;
        </motion.button>
      </motion.div>
    )
  )
}

export default Modal
