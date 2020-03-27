const express = require('express');
const router = express.Router();
const Pusher = require('pusher');

router.get('/', (req, res) => {
  res.send('all good');
});

router.post('/pusher/auth', (req, res) => {
  console.log('POST to /pusher/auth');
  const socketId = req.body.socket_id;
  const channel = req.body.channel_name;
});

module.exports = router;