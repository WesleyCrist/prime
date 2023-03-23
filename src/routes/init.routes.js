import express from 'express'

const init = express()

init.get('/', (req, res) => res.status(200).send({
    statusCode: 200,
    statusApplication: 'ok'
}))

export default init
