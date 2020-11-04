import React, { createContext, useState } from 'react'

export const ImageContext = createContext()

function ImageContextProvider({ children }) {
  const [selectedImg, setSelectedImg] = useState(null)

  return (
    <ImageContext.Provider value={{ selectedImg, setSelectedImg }}>
      {children}
    </ImageContext.Provider>
  )
}

export default ImageContextProvider
