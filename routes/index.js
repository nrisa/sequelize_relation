const express = require("express");
const { relasi, tes, create, createFavor } = require("../controllers/index.js");
 
const router = express.Router();
 
router.get('/rel', relasi);
router.get('/tes', tes);
router.post('/add', create);
router.post('/addf', createFavor);
 
module.exports = router;