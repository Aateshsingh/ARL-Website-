const express = require('express');
const router = express.Router();
const joinUscontroller = require('../controllers/joinUscontroller');

router.post('/send', joinUscontroller.joinReq);

module.exports = router;
