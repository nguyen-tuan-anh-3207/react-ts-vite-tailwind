import { Outlet } from 'react-router-dom'

const AuthLayout = () => {
  return (
    <div>
      <div>AuthLayout</div>
      <Outlet />
    </div>
  )
}

export default AuthLayout
