import React from 'react'
import Navbar from './components/Navbar'
import './App.css'
import Banner from './components/Banner'
import RowPost from './components/RowPosts/RowPost'
import { Originals, Action } from './urls'


function App() {
  return (
    <div>
      <Navbar />
      <Banner />
      <RowPost url={Originals} title="Netflix Originals" />
      <RowPost url={Action} title="Action" isSmall />

    </div>
  )
}

export default App
