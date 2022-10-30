import { prop, getModelForClass } from '@typegoose/typegoose'

class Client {
  @prop({ required: true, trim: true })
  public firstname: string

  @prop({ required: true, trim: true })
  public lastname: string

  @prop({ required: true, trim: true, unique: true })
  public email: string

  @prop({ required: true, trim: true })
  public password: string

  @prop({ default: Date.now() })
  public createAt: Date
}

export default getModelForClass(Client)
