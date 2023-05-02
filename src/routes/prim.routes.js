import express from 'express'
import Calc from '../functions/Calc.js'

const prim = express()

prim.get('/:number?', (req, res) => {
    let num = req.params.number
    if(typeof(num) === 'undefined') {
        res.status(406).send({
            msg: 'number not informed'
        })
    } else {
        num = Number(num)
        if(!isNaN(num)) {
            try {
                const calc = new Calc(num)
                res.status(200).send(calc.check())
            } catch(e) {
                res.status(412).send({
                    msg: e.message
                })
            }
        } else {
            res.status(412).send({
                msg: 'only numbers'
            })
        }
    }
})

export default prim
