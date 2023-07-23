const  express = require('express');
const router = express.Router();

const auth = require("../middlewares/auth");
const bookCtrl = require('../controllers/book');

router.post("/create", auth, bookCtrl.create);

module.exports = router;