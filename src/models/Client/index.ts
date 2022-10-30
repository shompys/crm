import { Schema, model } from 'mongoose'
import type { Client as ClientType } from './@types'

const Client = new Schema<ClientType>({
  firstname: {
    type: String,
    required: true,
    trim: true
  },
  lastname: {
    type: String,
    required: true,
    trim: true
  },
  email: {
    type: String,
    required: true,
    trim: true,
    unique: true,
    lowercase: true
  },
  password: {
    type: String,
    required: true,
    trim: true
  }
}, {
  timestamps: true
})
export default model<ClientType>('Client', Client)
