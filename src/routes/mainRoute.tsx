import { lazy } from 'react'

import { useRoutes } from 'react-router-dom'

import AuthLayout from '@/components/layouts/AuthLayout'
import HomeLayout from '@/components/layouts/HomeLayout'

import LoginPage from '@/features/auth/login'
import RegisterPage from '@/features/auth/register'

import ProtectedRoute from './ProtectedRoute'

const ProductPageLazy = lazy(() => import('@/features/products'))
const CategoryPageLazy = lazy(() => import('@/features/categories'))
const HomePageLazy = lazy(() => import('@/features/home'))

function RouterApp() {
  const router = useRoutes([
    {
      path: '/auth',
      element: <AuthLayout />,
      children: [
        { element: <LoginPage />, path: 'login' },
        { element: <RegisterPage />, path: 'register' },
      ],
    },
    {
      path: '/',
      element: (
        <ProtectedRoute>
          <HomeLayout />
        </ProtectedRoute>
      ),
      children: [
        {
          element: <HomePageLazy />,
          index: true,
        },
        {
          path: '/product',
          element: <ProductPageLazy />,
        },
        {
          path: '/category',
          element: <CategoryPageLazy />,
        },
      ],
    },
  ])

  return router
}

export default RouterApp
