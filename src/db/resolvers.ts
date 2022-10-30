import { ClientModel, ProductModel } from '../models'
import type { Client as ClientType } from '../models/Client/@types'
import bcryptjs from 'bcryptjs'
import jwt from 'jsonwebtoken'
import type { ProductInput } from '../models/Product/@types'

interface ClientInputs {
  input: {
    firstname: string
    lastname: string
    email: string
    password: string
  }
}
interface AuthenticateInputs {
  input: {
    email: string
    password: string
  }
}

const createToken = (client: ClientType, secret: string, expiresIn: string) => {
  const { _id, firstname, lastname, email } = client
  return jwt.sign({ _id, firstname, lastname, email }, secret, { expiresIn })
}
export const resolvers = {
  Query: {
    getClient: async (_: string, { token }: { token: string}) => jwt.verify(token, process.env.SECRET_WORD as string),
    getProducts: async () => {
      const products = await ProductModel.find()
      return products
    }
  },
  Mutation: {
    createClient: async (_: string, { input }: ClientInputs) => {
      const { email, password } = input
      const client = await ClientModel.findOne({ email })
      if (client) {
        throw new Error('This user is already registered')
      }
      const salt = await bcryptjs.genSalt(10)
      const hashPass = await bcryptjs.hash(password, salt)

      try {
        const client = new ClientModel({ ...input, password: hashPass })
        await client.save()
        return client
      } catch (error) {
        console.log((error as Error).message)
      }
    },
    authenticateClient: async (_: string, { input }: AuthenticateInputs) => {
      const { email, password } = input
      const client = await ClientModel.findOne({ email })
      if (!client) {
        throw new Error('This user does not exist')
      }
      const sucessPassword = await bcryptjs.compare(password, client.password)
      if (!sucessPassword) {
        throw new Error('Wrong password')
      }
      return {
        token: createToken(client, process.env.SECRET_WORD as string, '24h')
      }
    },
    createProduct: async (_: string, { input }: {input: ProductInput}) => {
      try {
        const product = new ProductModel(input)
        const result = await product.save()
        return result
      } catch (error) {
        console.log((error as Error).message)
      }
    }
  }
}
