import { atom } from 'recoil'

import { TProduct } from '@/typings/product'

const productState = atom<Array<TProduct>>({
  key: 'productState',
  default: [
    { name: 'jhin cowboy', age: 23, gender: 'male', id: 1 },
    { name: 'jhin cowboy', age: 23, gender: 'male', id: 2 },
    { name: 'jhin cowboy', age: 23, gender: 'male', id: 3 },
  ],
})

const textState = atom<string>({
  key: 'textState',
  default: '',
})

export { productState, textState }
