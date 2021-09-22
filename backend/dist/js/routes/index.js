"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
/* GET home page. */
router.get('/', (req, res, next) => {
    res.render('index');
});
router.get('/ping', (req, res) => {
    res.status(200).send('pong!');
});
module.exports = router;
//# sourceMappingURL=index.js.map