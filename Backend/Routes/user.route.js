import express from 'express'
import { signup } from '../Controller/user.controller.js';

//On this route signup function should be hit so we import func signup fromm controller 
const router =express.Router()
router.post("/signup",signup)
export default router;