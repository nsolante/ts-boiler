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
exports.__esModule = true;
var big_js_1 = require("big.js");
var commander_1 = require("commander");
var dotenv = require("dotenv");
var conversion_1 = require("./conversion");
var moment_1 = require("moment");
dotenv.config();
var program = new commander_1.Command();
var monthlyProjection = function (_a) {
    var dateFrom = _a.dateFrom, denomination = _a.denomination, denominationAmount = _a.denominationAmount, denominationTo = _a.denominationTo;
    return __awaiter(void 0, void 0, void 0, function () {
        var months, d, dateTo, currency, value, predictedAmount;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    months = 0;
                    _b.label = 1;
                case 1:
                    months++;
                    d = moment_1.moment(dateFrom);
                    dateTo = d.add(months, "M").format("YYYY-MM-DD");
                    return [4 /*yield*/, conversion_1.currencyData({
                            denomination: denominationTo,
                            dateFrom: dateFrom,
                            dateTo: dateTo
                        })];
                case 2:
                    currency = _b.sent();
                    console.log(denomination);
                    console.log(denominationAmount.toFixed(4));
                    console.log(dateTo);
                    value = currency["" + dateTo]["" + denomination];
                    console.log(value);
                    predictedAmount = denominationAmount.times(value);
                    //USD to AUD
                    console.log(predictedAmount.toFixed(4));
                    _b.label = 3;
                case 3:
                    if (months !== 12) return [3 /*break*/, 1];
                    _b.label = 4;
                case 4: return [2 /*return*/];
            }
        });
    });
};
program
    .version("1.0.0")
    .command("convert")
    .arguments("<denomination> <dateFrom> <dateTo> <denominationTo> <denominationAmount>")
    .action(function (denomination, dateFrom, dateTo, denominationTo, denominationAmount) { return __awaiter(void 0, void 0, void 0, function () {
    var currencyLater, currencyConversionTo, currencyLaterYear, currencyConversionToYearLater;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, conversion_1.currencyData({
                    denomination: denomination,
                    dateFrom: dateFrom,
                    dateTo: dateTo
                })];
            case 1:
                currencyLater = _a.sent();
                currencyConversionTo = new big_js_1["default"](denominationAmount).times(currencyLater["" + dateFrom]["" + denominationTo]);
                console.log(currencyConversionTo.toFixed(5)); //67.07720
                return [4 /*yield*/, monthlyProjection({
                        dateFrom: dateFrom,
                        denomination: denomination,
                        denominationAmount: currencyConversionTo,
                        denominationTo: denominationTo
                    })];
            case 2:
                _a.sent();
                return [4 /*yield*/, conversion_1.currencyData({
                        denomination: denominationTo,
                        dateFrom: dateFrom,
                        dateTo: dateTo
                    })];
            case 3:
                currencyLaterYear = _a.sent();
                currencyConversionToYearLater = new big_js_1["default"](denominationAmount).times(currencyLaterYear["" + dateTo]["" + denomination]);
                console.log(currencyConversionToYearLater.toFixed(5)); //140.15400
                // roi
                //140.15400 - 100/100 * 100
                currencyConversionToYearLater
                    .minus(denominationAmount)
                    .div(100)
                    .times(100);
                console.log(currencyConversionToYearLater
                    .minus(denominationAmount)
                    .div(100)
                    .times(100)
                    .toFixed(2));
                return [2 /*return*/];
        }
    });
}); });
program.parse(process.argv);
// const currencyNow: any = await currencyData({
// 	denomination,
// 	dateFrom,
// 	dateTo: dateFrom,
// })
// const currency: any = await currencyData({
// 	denomination,
// 	dateFrom,
// 	dateTo,
// })
// const amount = new Big(denominationAmount)
// const value = findKeyValue({ currency: currencyNow, denominationTo })
// const amountConversionNow = amount.times(value)
// console.log(
// 	await monthlyProjection({
// 		denomination,
// 		dateFrom,
// 		denominationTo,
// 		denominationAmount,
// 	})
// )
// converted dollar amount now
// console.log(amountConversionNow.toFixed(5))
//converted dollar amount later
