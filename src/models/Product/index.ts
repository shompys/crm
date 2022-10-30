import { Schema, model } from 'mongoose'
import type { Product as ProductType } from './@types'

const Product = new Schema<ProductType>({
  name: {
    type: String,
    required: true,
    trim: true
  },
  price: {
    type: Number,
    required: true,
    trim: true
  },
  stock: {
    type: Number,
    required: true,
    trim: true
  }
}, {
  timestamps: true
})
export default model<ProductType>('Product', Product)
