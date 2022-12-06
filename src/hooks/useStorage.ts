import { useCallback } from 'react'
import { storage, firestore, timestamp } from '../firebase/config'

type UseStorageProps = {
  setProgress: (v: number) => void
}

export default function useStorage({ setProgress }: UseStorageProps) {
  const uploadFile = useCallback(
    (file: File) =>
      new Promise((res, rej) => {
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
            console.error(error)
            rej(error)
          },
          async () => {
            const url = await storageRef.getDownloadURL()
            const document = { url, createdAt: timestamp() }
            await collectionRef.add(document)
            res(url)
          }
        )
      }),
    []
  )

  return { uploadFile }
}
