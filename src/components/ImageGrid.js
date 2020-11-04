import React from 'react'
import { addScaleCorrection, motion } from 'framer-motion'

import useFirestore from '../hooks/useFirestore'
import useImage from '../hooks/useImage'

function ImageGrid() {
  const { docs } = useFirestore('images')
  const { setSelectedImg } = useImage()
  // console.log(docs)

  return (
    <div className="img-grid">
      {docs &&
        docs.map(doc => (
          <motion.div
            key={doc.id}
            className="img-wrap"
            onClick={() => setSelectedImg(doc.url)}
            // Framer-motion attribute
            whileHover={{ opacity: 1, scale: 1.1, zIndex: 1 }}
            layout
          >
            <motion.img
              src={doc.url}
              alt="uploaded pic"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
            />
          </motion.div>
        ))}
    </div>
  )
}

export default ImageGrid
