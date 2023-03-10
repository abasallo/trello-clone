import { Router, Request, Response } from 'express'
import { errorWrapper } from '../errors'

const router = Router()

const randomHexColour = () => '#' + Math.floor(Math.random() * 16777215).toString(16)

router.get(
  '/',
  errorWrapper(async (req: Request, res: Response) => res.send(randomHexColour()))
)

export default router
