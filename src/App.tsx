import React from 'react'

import Nav from 'src/components/Nav'
import Footer from 'src/components/Footer'

function App(): React.JSX.Element {
  return (
    <div className="app">
      <Nav />
      <div className="app__main container"></div>
      <Footer />
    </div>
  )
}

export default App
