"use strict";
var Transaction = (function () {
    function Transaction(numberFives, numberTens, numberTwenties, numberFifties, totalAmount, associatedWith) {
        this.numberFives = numberFives;
        this.numberTens = numberTens;
        this.numberTwenties = numberTwenties;
        this.numberFifties = numberFifties;
        this.totalAmount = totalAmount;
        this.associatedWith = associatedWith;
    }
    ;
    return Transaction;
}());
exports.Transaction = Transaction;
//# sourceMappingURL=transaction.js.map