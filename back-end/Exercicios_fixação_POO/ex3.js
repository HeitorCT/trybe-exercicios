var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var SuperClass = /** @class */ (function () {
    function SuperClass(isSuper) {
        if (isSuper === void 0) { isSuper = true; }
        this.isSuper = isSuper;
    }
    SuperClass.prototype.sayHello = function () {
        console.log("hello word!");
    };
    return SuperClass;
}());
var SubClass = /** @class */ (function (_super) {
    __extends(SubClass, _super);
    function SubClass() {
        var _this = _super.call(this) || this;
        _this.isSuper = false;
        return _this;
    }
    return SubClass;
}(SuperClass));
var myFunc = function (obj) {
    if (obj.isSuper) {
        console.log("Super!");
    }
    else {
        console.log("Sub!");
    }
    obj.sayHello();
};
var obj1 = new SuperClass;
var obj2 = new SubClass;
myFunc(obj1);
myFunc(obj2);
