import React from 'react'

import { Navigate } from 'react-router-dom'

type Props = {
  children: React.ReactElement
}

const ProtectedRoute = (props: Props) => {
  const { children } = props
  const isAuth = true

  if (!isAuth) {
    return <Navigate replace to="/auth/login" />
  }

  return children
}

export default ProtectedRoute
