const express = require('express');
const router = express.Router();
const { getAllLogs , } = require('../controllers/logs.controllers');

// Route to get all logs
router.get('/logs', getAllLogs);
// router.get('/logs/:taskName', getLogByTask);

module.exports = router;
