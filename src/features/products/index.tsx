import Button from '@mui/material/Button'

import { useGetProduct } from '@/hooks/product'

import { TProduct } from '@/typings/product'

const ProductPage = () => {
  const { products, setProducts } = useGetProduct()

  const handleSetProduct = () => {
    setProducts([
      {
        age: 123,
        name: '123',
        gender: 'male',
        id: 4,
      },
    ])
  }

  return (
    <div>
      {products.map((product: TProduct) => {
        return (
          <div key={product.id}>
            <p className="text-5xl font-bold">{product.name}</p>
            <p>{product.gender}</p>
            <p>{product.age}</p>
          </div>
        )
      })}

      <Button variant="contained">Hello World</Button>
      <button onClick={handleSetProduct}>set product</button>
    </div>
  )
}

export default ProductPage
