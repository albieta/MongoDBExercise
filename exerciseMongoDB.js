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
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
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
var _this = this;
require('./connection');
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var ObjectId = require('bson').ObjectId;
var userSchema = Schema({
    _id: Schema.Types.ObjectId,
    name: String,
    credentials: { type: Schema.Types.ObjectId, ref: 'Credentials' },
    description: String,
    number: Number
});
var credentialsSchema = Schema({
    email: String,
    password: String
});
var bookSchema = Schema({
    borrowedBy: { type: Schema.Types.ObjectId, ref: 'User' },
    title: String,
    history: [{ type: Schema.Types.ObjectId, ref: 'User' }]
});
var Book = mongoose.model('Book', bookSchema);
var Credentials = mongoose.model('Credentials', credentialsSchema);
var User = mongoose.model('User', userSchema);
var someFunction = function () { return __awaiter(_this, void 0, void 0, function () {
    var credentials, user, idUser, idCredentials, savedCredentials, savedUser;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                credentials = new Credentials({
                    email: 'albaromagomez@gmail.com',
                    password: 'Test123'
                });
                user = new User({
                    _id: new ObjectId(),
                    name: 'Alba',
                    credentials: credentials,
                    description: 'una nena molt maca',
                    number: 123
                });
                idUser = user._id;
                idCredentials = credentials._id;
                //SAVE
                credentials.save()
                    .then(function (result) {
                    console.log("Credentials saved :)");
                })["catch"](function (error) {
                    console.error(error);
                });
                user.save()
                    .then(function (result) {
                    console.log("User saved :)");
                })["catch"](function (error) {
                    console.error(error);
                });
                return [4 /*yield*/, Credentials.find({ email: 'albaromagomez@gmail.com' })];
            case 1:
                savedCredentials = _a.sent();
                return [4 /*yield*/, User.find({ name: 'Alba' })];
            case 2:
                savedUser = _a.sent();
                console.log(savedCredentials);
                console.log(savedUser);
                //DELETE
                return [4 /*yield*/, User.deleteMany({ name: "Alba" })];
            case 3:
                //DELETE
                _a.sent();
                return [4 /*yield*/, Credentials.deleteMany({ email: 'albaromagomez@gmail.com' })];
            case 4:
                _a.sent();
                return [2 /*return*/];
        }
    });
}); };
someFunction();
