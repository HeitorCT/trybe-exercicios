var MyClass = /** @class */ (function () {
    function MyClass(myNumber) {
        this.myNumber = myNumber;
    }
    ;
    MyClass.prototype.myFunc = function (myParam) {
        return "".concat(this.myNumber, " + ").concat(myParam, " = ").concat(this.myNumber + myParam);
    };
    return MyClass;
}());
var obj = new MyClass(20);
console.log(obj.myFunc(5));
