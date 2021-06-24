"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("./express"));
var app = new express_1.default();
app.get('/', function (req, res) {
    res.status(200).send('hello');
});
app.post('/', function (req, res) {
    var body = req.body;
    res.status(200).send('post request');
});
app.listen(3000);
