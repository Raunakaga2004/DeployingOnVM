"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
app.get('/', (req, res) => {
    return res.json({
        message: "hi this is server"
    });
});
app.listen(3000, () => {
    console.log(`Running`);
});
//# sourceMappingURL=index.js.map