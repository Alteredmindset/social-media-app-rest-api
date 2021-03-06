import express from "express"
import bodyParser from "body-parser"
import mongoose from "mongoose"
import dotenv from 'dotenv'
import AuthRoute from './Routes/AuthRoutes.js'

//Routes

const app = express()


//Middleware
app.use(bodyParser.json({ limit: "30mb", etended: true }))
app.use(bodyParser.urlencoded({ limit: "30mb", etended: true }))

dotenv.config()

mongoose
  .connect(process.env.MONGO_DB, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() =>
    app.listen(process.env.PORT, () =>
      console.log(`Listening at ${process.env.PORT}`)
    )
  ) .catch((error) => console.log(error))


  // usage of route

  app.use('/auth' , AuthRoute)
