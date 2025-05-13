import express from 'express';
import {getAllTables, updateTableStatus } from '../controllers/tableController.js';

const router = express.Router();

router.put('/:tableNo/status', updateTableStatus);

router.get('/', getAllTables);
export default router;
