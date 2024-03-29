import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Game from 'src/pages/Game'
import Home from 'src/pages/Home'
import Nav from 'src/components/Nav'
import Footer from 'src/components/Footer'
import ProtectedRoute from 'src/pages/ProtectedRoute'

function App(): React.JSX.Element {
  return (
    <Router>
      <div className="app">
        <Nav />
        <main className="app__main">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route
              path="/game"
              element={
                <ProtectedRoute>
                  <Game />
                </ProtectedRoute>
              }
            />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  )
}

export default App
