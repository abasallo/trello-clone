import HttpStatus from 'http-status-codes'

import {Router} from 'express'

import {model} from '../../app'

import {getUser} from "../../services/User";

import {User} from "trello-clone-shared/src/model/user.model";

const router = Router()

router.get('/:email', async (req, res) => {
    const email: string = req.params.email
    const password: string = req.body.password
    const user: Promise<User> = getUser({email, password, model})
    if (!user)
        res.status(HttpStatus.NOT_FOUND)
    // TODO:: This token is hardcoded
    res.send('1234567890')
})

export default router
