import React, { FunctionComponent, useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Home: FunctionComponent = () => {
  const navigate = useNavigate()
  const [name, setName] = useState<string>('')

  const onRedirect = () => {
    navigate('/game', { state: { name } })
  }

  return (
    <div className="home">
      <div className="container">
        <h1>Welcome to Memory Game</h1>
        <p>Please write your name to start the game</p>
        <div className="row justify-content-md-center">
          <div className="col-12 col-md-8">
            <div className="form-floating mb-3">
              <input
                id="name"
                type="text"
                placeholder="Name"
                className="form-control"
                onChange={(e) => setName(e.target.value)}
              />
              <label htmlFor="name">Name</label>
            </div>
            <div className="d-flex justify-content-center">
              <button
                role="button"
                disabled={!name}
                onClick={onRedirect}
                aria-label="start game"
                className="btn btn-primary"
              >
                Start!
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
