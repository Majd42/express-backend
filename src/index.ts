import express, { Application, urlencoded } from 'express'
import dotenv from 'dotenv'
import path from 'path'
import connectToDatabase from './dbconnection'
import authRoutes from './routes/authRoutes'
import userRoutes from './routes/userRoutes'
import categoryRoutes from './routes/categoryRoutes'
import productRoutes from './routes/productRoutes'

dotenv.config()
const app: Application = express()

connectToDatabase()
app.use(express.static(path.join('public')))
app.use(express.json())
app.use(urlencoded({extended: true}))


app.use('/auth', authRoutes)
app.use('/users',  userRoutes)
app.use('/categories', categoryRoutes )
app.use('/products',productRoutes )


app.listen(process.env.PORT || 6000, () => {
    console.log('listening on port 6000')
})

