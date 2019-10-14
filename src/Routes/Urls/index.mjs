import express from 'express'
import Search from './Search.route'
import Upload from './Upload.route'

const router = express.Router()

Search(router)
Upload(router)

export default router