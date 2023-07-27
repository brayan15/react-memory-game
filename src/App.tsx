import React from 'react'

import Nav from 'src/components/Nav'
import Card from 'src/components/Card'
import Footer from 'src/components/Footer'
import { dummyData } from './utils/dummy'

function App(): React.JSX.Element {
  return (
    <div className="app">
      <Nav />
      <div className="app__main container">
        <ul className="row gy-3 list-unstyled mb-0">
          {dummyData.entries.map((card, index) => (
            <li key={index} className="col-6 col-md-3">
              <Card card={card} />
            </li>
          ))}
        </ul>
      </div>
      <Footer />
    </div>
  )
}

export default App
