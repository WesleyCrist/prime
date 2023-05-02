import express from 'express'
import grouping from './routes/grouping.js'
const dot = await import('dotenv')

const main = express()
dot.config()

main.use(grouping)

main.listen(process.env.PORT, () => console.log(`server running at http://localhost:${process.env.PORT}`))
process.env