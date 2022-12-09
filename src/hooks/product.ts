import { useEffect } from 'react'

import { useRecoilState } from 'recoil'

import { productState } from '@/store/products/atom'

export const useGetProduct = () => {
  const [products, setProducts] = useRecoilState(productState)

  useEffect(() => {
    const timer = setTimeout(() => {
      console.log('run')
    }, 5000)

    return () => {
      clearTimeout(timer)
    }
  }, [])

  return { products, setProducts }
}
