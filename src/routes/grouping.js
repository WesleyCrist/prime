import express from 'express'
import init from './init.routes.js'
import none from './none.routes.js'
import prim from './prim.routes.js'

const grouping = express()

grouping.use('/', init)
grouping.use('/prim', prim)
grouping.use(none)

export default grouping
