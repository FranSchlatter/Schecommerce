const Router = require('express');
const userMw = require('./user.js');

const router = Router();

router.use('/user', userMw);

module.exports = router;