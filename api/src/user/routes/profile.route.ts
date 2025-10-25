import express from 'express'
import { ProfileService } from '../services/v1/profile.service'
import { UserStorage } from '../data/user.storage'
import { USER_DATA } from '../../dev.vars'
import { asyncHandler } from '../../utils/async.wrapper'
import { toResponse } from './user.dto'

const router = express.Router()

const path = `${USER_DATA}user.txt`

const repository = new UserStorage(path)

const profileService = new ProfileService(repository)

router.get('/', asyncHandler(async (_req, res) => {
  const result = await profileService.get()
  res.status(200).json(toResponse(result))
}))

router.put('/', asyncHandler(async (req, res) => {
  const result = await profileService.update(req.body)
  res.status(200).json(toResponse(result))
}))

router.delete('/', asyncHandler(async (_req, res) => {
  const result = await profileService.restore()
  res.status(204).json(toResponse(result))
}))

export default router
