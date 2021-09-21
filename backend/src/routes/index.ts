import express from 'express';
const router = express.Router();

/* GET home page. */
router.get('/',  (req, res, next) => {

    res.render('index');
});


router.get('/ping', (req, res) => {
    res.status(200).send('pong!');
});



export = router;
