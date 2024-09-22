import express from 'express';
import { Feedback } from '../Controller/feedback.controller.js';

const router=express.Router();
router.post("/Feed",Feedback)
export default router;