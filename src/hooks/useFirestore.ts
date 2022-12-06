import type firebase from 'firebase'
import { useState, useEffect } from 'react'
import { firestore } from '../firebase/config'

const useFirestore = (collection: string) => {
  const [docs, setDocs] = useState<firebase.firestore.DocumentData[]>([])

  useEffect(() => {
    const unsubscribe = firestore
      .collection(collection)
      .orderBy('createdAt', 'desc')
      .onSnapshot(snap => {
        const documents = snap.docs.map(doc => ({ ...doc.data(), id: doc.id }))
        setDocs(documents)
      })

    return () => unsubscribe()
  }, [collection])

  return { docs }
}

export default useFirestore
