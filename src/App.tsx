import { Route, Routes } from 'react-router-dom'
import './App.css'
import Story from './components/Story'
import YesPage from './components/YesPage'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Story />} />
      <Route path="/yes" element={<YesPage />} />
    </Routes>
  )
}

export default App
