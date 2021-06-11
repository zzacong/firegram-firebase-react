import { useState, useEffect } from 'react'
import { storage, firestore, timestamp } from '../firebase/config'

const useStorage = file => {
  const [progress, setProgress] = useState(0)
  const [error, setError] = useState(null)
  const [url, setUrl] = useState(null)

  useEffect(() => {
    // References
    const storageRef = storage.ref(file.name)
    const collectionRef = firestore.collection('images')

    storageRef.put(file).on(
      'state_changed',
      snap => {
        let percentage = (snap.bytesTransferred / snap.totalBytes) * 100
        setProgress(percentage)
      },
      error => {
        setError(error)
      },
      async () => {
        const url = await storageRef.getDownloadURL()
        const document = {
          url,
          createdAt: timestamp(),
        }
        collectionRef.add(document)
        setUrl(url)
      }
    )
  }, [file])

  return { progress, url, error }
}

export default useStorage
