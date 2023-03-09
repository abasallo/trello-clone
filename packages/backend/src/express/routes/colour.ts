import HttpStatus from 'http-status-codes'

import {Router} from 'express'

const router = Router()

const randomHexColour = () => '#' + Math.floor(Math.random()*16777215).toString(16)

router.get('/', async (req, res) => res.send(randomHexColour()))

export default router
