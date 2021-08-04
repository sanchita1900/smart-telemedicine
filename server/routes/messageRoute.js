const express = require('express');
const router = express.Router();

const messagesController = require('../controller/messagesController');
const auth = require('../middleware/auth');

router.get("/listMessage",auth,messagesController.listMessages);

module.exports = router;