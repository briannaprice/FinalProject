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
  const auth = pusher.authenticate(socketId, channel);
  res.send(auth);
});

const pusher = new Pusher({
  appId: '970947',
  key: 'd17dd14a110ce066a5e4',
  secret: '9b917165909c504c8257',
  cluster: 'us2',
  encrypted: true
});

pusher.trigger('my-channel', 'my-event', {
  "message": "hello world"
});

module.exports = router;