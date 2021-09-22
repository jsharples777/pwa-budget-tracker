"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
const express_1 = __importDefault(require("express"));
const transactions_1 = __importDefault(require("./transactions"));
const router = express_1.default.Router();
router.use('/transaction', transactions_1.default);
module.exports = router;
//# sourceMappingURL=index.js.map