var Data = /** @class */ (function () {
    function Data(day, month, year) {
        this.dictonaryMonth = ["January", "February", "March", "April", "May", "June", "July",
            "August", "September", "October", "November", "December"];
        this.day = (day >= 0 && day <= 31) ? day : 1;
        this.month = (month >= 1 && month <= 12) ? month : 1;
        this.year = (year >= 0) ? year : 1900;
    }
    Data.prototype.getMonthName = function () {
        return this.dictonaryMonth[this.month];
    };
    Data.prototype.isLeapYear = function () {
        var y = this.year;
        return (y % 4 === 0 && y % 100 !== 0) || (y % 100 === 0 && y % 400 === 0);
    };
    return Data;
}());
var d = new Data(01, 01, 2004);
console.log(d.getMonthName());
console.log(d.isLeapYear());
