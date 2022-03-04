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
app.get('/user', function (req, res) {
    res.status(200).send('hello user');
});
app.post('/', function (req, res) {
    var body = req.body;
    console.log(body);
    res.status(200).send('post request');
});
app.post('/user', function (req, res) {
    var body = req.body;
    console.log(body);
    res.status(200).send('post request user');
});
app.listen(3000);
