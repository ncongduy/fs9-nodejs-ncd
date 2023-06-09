"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __asyncValues = (this && this.__asyncValues) || function (o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
};
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Response = exports.Request = void 0;
var http_1 = __importDefault(require("http"));
var Request = /** @class */ (function () {
    function Request(body) {
        this.body = body;
    }
    return Request;
}());
exports.Request = Request;
var Response = /** @class */ (function () {
    function Response() {
        this.statusCode = 200;
        this.message = '';
    }
    Response.prototype.status = function (statusNumber) {
        this.statusCode = statusNumber;
        return this;
    };
    Response.prototype.send = function (messageStr) {
        this.message = messageStr;
        return this;
    };
    return Response;
}());
exports.Response = Response;
var Express = /** @class */ (function () {
    function Express() {
        this.request = [];
    }
    Express.prototype.get = function (path, handler) {
        var newData = {
            path: path,
            method: 'GET',
            handler: handler,
        };
        this.request = __spreadArray(__spreadArray([], this.request, true), [newData], false);
    };
    Express.prototype.post = function (path, handler) {
        var newData = {
            path: path,
            method: 'POST',
            handler: handler,
        };
        this.request = __spreadArray(__spreadArray([], this.request, true), [newData], false);
    };
    Express.prototype.listen = function (port) {
        var _this = this;
        var server = http_1.default.createServer(function (req, res) { var req_1, req_1_1; return __awaiter(_this, void 0, void 0, function () {
            var buffers, chunk, e_1_1, data, body, method, url, router, request, response;
            var e_1, _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        buffers = [];
                        _b.label = 1;
                    case 1:
                        _b.trys.push([1, 6, 7, 12]);
                        req_1 = __asyncValues(req);
                        _b.label = 2;
                    case 2: return [4 /*yield*/, req_1.next()];
                    case 3:
                        if (!(req_1_1 = _b.sent(), !req_1_1.done)) return [3 /*break*/, 5];
                        chunk = req_1_1.value;
                        buffers.push(chunk);
                        _b.label = 4;
                    case 4: return [3 /*break*/, 2];
                    case 5: return [3 /*break*/, 12];
                    case 6:
                        e_1_1 = _b.sent();
                        e_1 = { error: e_1_1 };
                        return [3 /*break*/, 12];
                    case 7:
                        _b.trys.push([7, , 10, 11]);
                        if (!(req_1_1 && !req_1_1.done && (_a = req_1.return))) return [3 /*break*/, 9];
                        return [4 /*yield*/, _a.call(req_1)];
                    case 8:
                        _b.sent();
                        _b.label = 9;
                    case 9: return [3 /*break*/, 11];
                    case 10:
                        if (e_1) throw e_1.error;
                        return [7 /*endfinally*/];
                    case 11: return [7 /*endfinally*/];
                    case 12:
                        data = Buffer.concat(buffers).toString();
                        body = JSON.parse(data);
                        method = req.method;
                        url = req.url;
                        router = this.request.find(function (rq) { return rq.path === url && rq.method === method; });
                        if (typeof router === 'object') {
                            request = new Request(body);
                            response = new Response();
                            router.handler(request, response);
                            res.statusCode = response.statusCode;
                            res.end(response.message);
                        }
                        else {
                            res.end('Unrecognized method.');
                        }
                        return [2 /*return*/];
                }
            });
        }); });
        server.listen(port);
    };
    return Express;
}());
exports.default = Express;
