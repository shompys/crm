import mongoose from 'mongoose'

export const connectDB = async (): Promise<void> => {
  try {
    const resp = await mongoose.connect(process.env.DB_MONGO as string, {

    })
    console.log(`the App is connect to ${resp.connection.db.databaseName} database`)
  } catch (error) {
    if (error instanceof Error) {
      console.log(error.message)
    }
    process.exit(1)
  }
}
