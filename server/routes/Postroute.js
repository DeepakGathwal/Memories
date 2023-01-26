const express = require('express');
const { uploadPost, getPost, likePost } = require('../controllers/PostController');
const upload = require('../middelwares/imageUpload');
const { verifyUser } = require('../middelwares/token');
const router = express.Router();

router.route('/post').post(verifyUser,upload.single("photo"),uploadPost).get(getPost)
router.route('/like/:user').patch(likePost)
module.exports = router;