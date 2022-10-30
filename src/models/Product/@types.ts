export type Product = {
  _id: string
  name: string
  price: number
  stock: number
  createdAt: Date
  updatedAt: Date
}

export type ProductInput = {
  name: string
  price: number
  stock: number
}
