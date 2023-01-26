import HttpStatus from 'http-status-codes'

import {Router} from 'express'

const router = Router()

router.get('/', async (req, res) => res
    .status(HttpStatus.OK)
    .send('OK')
)

export default router
