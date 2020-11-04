import React, { useEffect } from 'react'
import { motion } from 'framer-motion'

import useStorage from '../hooks/useStorage'

function Progressbar({ file, setFile }) {
  const { url, progress } = useStorage(file)

  // console.log(progress, url)

  useEffect(() => {
    if (url) {
      setFile(null)
    }
  }, [url, setFile])

  return (
    <motion.div
      className="progress-bar"
      initial={{ width: 0 }}
      animate={{ width: `${progress}%` }}
    />
  )
}

export default Progressbar
