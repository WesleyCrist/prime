import express from 'express'

const none = express()

none.use((req, res, next) => res.status(404).send({
    situation: 'NotFound',
    status: 404
}))

export default none
