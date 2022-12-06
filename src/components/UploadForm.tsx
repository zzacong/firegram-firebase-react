import { useState } from 'react'
import useStorage from '../hooks/useStorage'
import ProgressBar from './ProgressBar'

export default function UploadForm() {
  const [file, setFile] = useState<File>()
  const [error, setError] = useState('')

  const [progress, setProgress] = useState(0)

  const { uploadFile } = useStorage({ setProgress })

  const types = ['image/jpeg', 'image/png']

  const handleChange: React.ChangeEventHandler<HTMLInputElement> = async e => {
    const selected = e.target.files?.[0]
    if (selected && types.includes(selected.type)) {
      setFile(selected)
      await uploadFile(selected)
      setFile(undefined)
      setError('')
    } else {
      setFile(undefined)
      setError('Please select an image file (.jpg or .png)')
    }
  }

  return (
    <form>
      <label>
        <input type="file" onChange={handleChange} />
        <span>+</span>
      </label>
      <div className="output">
        {error && <div className="error">{error}</div>}
        {file && <div>{file.name}</div>}
        {file && <ProgressBar progress={progress} />}
      </div>
    </form>
  )
}

UploadForm
