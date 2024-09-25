import express from 'express';
import {Contacts} from '../Controller/contact.controller.js';

const router=express.Router();
router.post('/ContactController',Contacts)
export default router;