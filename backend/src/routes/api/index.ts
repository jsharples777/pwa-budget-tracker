import express from 'express';
import transactionRoutes from './transactions';

const router = express.Router();

router.use('/transactions', transactionRoutes);


export = router;
