import HttpStatus from 'http-status-codes'

import { model as sequelizeModel } from '../../app'

import { Router } from 'express'

const router = Router()

router.get('/:id', async (req, res) => {
  const model = await (await sequelizeModel).Model.findOne({ where: { id: req.params.id } })
  if (!model) res.status(HttpStatus.NOT_FOUND)
  res.send(model)
})

router.post('/', async (req, res) =>
  res.send(
    await (
      await sequelizeModel
    ).Model.create({
      makeId: req.body.makeId,
      name: req.body.name,
      similarSoundingWordToNameParagraph: 'fewWordsSoundingLikeHardcodedResponse'
    })
  )
)

router.put('/', async (req, res) => {
  const model = await (await sequelizeModel).Model.findOne({ where: { id: req.body.id } })
  if (model) {
    ;(await sequelizeModel).Model.update(
      { makeId: req.body.makeId, name: req.body.name, similarSoundingWordToNameParagraph: '' },
      { where: { id: req.body.id } }
    )
    res.status(HttpStatus.OK)
  } else res.status(HttpStatus.NOT_FOUND)
  return res.send()
})

router.delete('/:id', async (req, res) => {
  const model = await (await sequelizeModel).Model.findOne({ where: { id: req.params.id } })
  if (model) {
    model.destroy()
    res.status(HttpStatus.OK)
  } else res.status(HttpStatus.NOT_FOUND)
  return res.send()
})

export default router
