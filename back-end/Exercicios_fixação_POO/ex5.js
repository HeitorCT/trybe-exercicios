var ConsoleLogger = /** @class */ (function () {
    function ConsoleLogger() {
    }
    ConsoleLogger.prototype.log = function (str) {
        console.log(str);
    };
    return ConsoleLogger;
}());
var ConsoleLogger2 = /** @class */ (function () {
    function ConsoleLogger2() {
    }
    ConsoleLogger2.prototype.log = function (str) {
        console.log("metodo 2: ".concat(str));
    };
    return ConsoleLogger2;
}());
var ExampleDatabase = /** @class */ (function () {
    function ExampleDatabase(logger) {
        if (logger === void 0) { logger = new ConsoleLogger(); }
        this.logger = logger;
    }
    ExampleDatabase.prototype.save = function (key, value) {
        this.logger.log(key + value);
    };
    return ExampleDatabase;
}());
var log1 = new ConsoleLogger();
var log2 = new ConsoleLogger2();
var data1 = new ExampleDatabase(log1);
var data2 = new ExampleDatabase(log2);
var data3 = new ExampleDatabase();
data1.save('data1', 'content data1');
data2.save('data2', 'content data2');
data3.save('data3', 'content data3');
