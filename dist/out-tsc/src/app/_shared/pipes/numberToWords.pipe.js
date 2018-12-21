"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var NumberToWordsPipe = /** @class */ (function () {
    function NumberToWordsPipe() {
        this.a = [
            '',
            'one ',
            'two ',
            'three ',
            'four ',
            'five ',
            'six ',
            'seven ',
            'eight ',
            'nine ',
            'ten ',
            'eleven ',
            'twelve ',
            'thirteen ',
            'fourteen ',
            'fifteen ',
            'sixteen ',
            'seventeen ',
            'eighteen ',
            'nineteen '
        ];
        this.b = [
            '',
            '',
            'twenty',
            'thirty',
            'forty',
            'fifty',
            'sixty',
            'seventy',
            'eighty',
            'ninety'
        ];
    }
    NumberToWordsPipe.prototype.transform = function (value, args) {
        if (value) {
            if (value > 9999) {
                return 'Five <br> Thousand+';
            }
            if ((value / 1000) > 0) {
                var val = value / 1000;
                console.log('val: ', Number(val).toFixed());
                return this.a[Number(val).toFixed()];
            }
        }
        else {
            return 'Nan';
        }
    };
    NumberToWordsPipe = __decorate([
        core_1.Pipe({
            name: 'numberToWords'
        })
    ], NumberToWordsPipe);
    return NumberToWordsPipe;
}());
exports.NumberToWordsPipe = NumberToWordsPipe;
//# sourceMappingURL=numberToWords.pipe.js.map