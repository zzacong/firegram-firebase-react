import { useContext } from 'react'
import { ImageContext } from '../contexts/ImageContext'

export default function useImage() {
  return useContext(ImageContext)
}
