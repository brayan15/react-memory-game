import React, { FunctionComponent } from 'react'
import { useLocation, Navigate } from 'react-router-dom'

type ProtectedRouteT = {
  children: React.JSX.Element
}

const ProtectedRoute: FunctionComponent<ProtectedRouteT> = ({ children }) => {
  const location = useLocation()

  if (!location.state) {
    return <Navigate to="/" replace />
  } else {
    return children
  }
}

export default ProtectedRoute
