import React from 'react'
import Header from './components/Header/Header'
import Main from './components/Main'
import Footer from './components/Footer'
import './App.scss'
import { Route, Routes } from 'react-router-dom'

const App = () => {
  return (
      <div className='App'>
        <Header />
        <Routes>
            <Route path="/" element={<Main />} />
            {/* <Route path="/movie/:id" element={<Movie />} />
            <Route path="/movies/:type" element={<h2>Movies List</h2>} /> */}
        </Routes>
        <Footer />
      </div>
  )
}

export default App