import express from 'express'
import { getIndex } from '../controller/Controllador'

export const routers = express.Router()

routers.get('/', getIndex)



