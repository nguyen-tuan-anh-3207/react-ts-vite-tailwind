import { selector } from 'recoil'

import { productState, textState } from './atom'

const productCountState = selector({
  key: 'countProductState',
  get: ({ get }) => {
    const products = get(productState)

    return products?.length
  },
})

const countTextState = selector({
  key: 'countTextState',
  get: ({ get }) => {
    const text = get(textState)

    return text?.length
  },
})

export { productCountState, countTextState }
