var client = /** @class */ (function () {
    function client(name) {
        this.name = name;
    }
    return client;
}());
var order = /** @class */ (function () {
    function order(client, items, paymentType, discount) {
        this.client = client;
        this.items = items;
        this.paymentType = paymentType;
        this.discount = discount;
    }
    order.prototype.calcOrderValue = function () {
        var value = 0;
        this.items.forEach(function (nP) { return value += nP.price; });
        return value;
    };
    order.prototype.calcOrderValueWithDiscount = function () {
        var value = this.calcOrderValue() * (1 - this.discount);
        return value;
    };
    return order;
}());
var item = /** @class */ (function () {
    function item(product, price) {
        this.product = product;
        this.price = price;
    }
    return item;
}());
var c = new client('Shaolin Pig Killer');
var itemA = new item('Potato', 5);
var itemB = new item('Coke', 2.50);
var itemC = new item('Chocolate', 4.0);
var itemD = new item('Coffe', 1);
var theOrder = new order(c, [itemA, itemB, itemC, itemD], 'money', 0.1);
console.log("total order value: " + theOrder.calcOrderValue());
console.log("total order value with discount: " + theOrder.calcOrderValueWithDiscount());
