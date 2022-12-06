import ImageGrid from './components/ImageGrid'
import Modal from './components/Modal'
import Title from './components/Title'
import UploadForm from './components/UploadForm'
import ImageContextProvider from './contexts/ImageContext'

function App() {
  return (
    <ImageContextProvider>
      <div className="App">
        <Title />
        <UploadForm />
        <ImageGrid />
        <Modal />
      </div>
    </ImageContextProvider>
  )
}

export default App
