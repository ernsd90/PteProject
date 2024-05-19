const express = require('express');
const router = express.Router();
const readLoudController = require('../controllers/readLoudController');
const authenticateToken = require('../middlewares/authMiddleware'); 

router.get('/readlouds',authenticateToken, readLoudController.getAllReadLouds);
router.post('/readlouds', authenticateToken, readLoudController.createReadLoud);
router.get('/readlouds/:id', authenticateToken, readLoudController.getReadLoudById);
router.put('/readlouds/:id', authenticateToken, readLoudController.updateReadLoud);
router.delete('/readlouds/:id', authenticateToken, readLoudController.deleteReadLoud);

module.exports = router;
