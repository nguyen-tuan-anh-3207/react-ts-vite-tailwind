import axiosClient from '@/configs/axios'

import { GET_PRODUCTS_URL } from '@/constants/url'

import { TProduct } from '@/typings/product'

const productApi = {
  getProducts() {
    return axiosClient.get(GET_PRODUCTS_URL)
  },
  createProduct(params: TProduct) {
    return axiosClient.post(GET_PRODUCTS_URL, params)
  },
}

export default productApi
