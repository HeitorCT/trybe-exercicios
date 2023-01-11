var Client = /** @class */ (function () {
    function Client(name) {
        this.name = name;
    }
    return Client;
}());
var Order = /** @class */ (function () {
    function Order(client, items, paymentType, discount) {
        this.client = client;
        this.items = items;
        this.paymentType = paymentType;
        this.discount = discount;
    }
    Order.prototype.calcOrderValue = function () {
        var value = 0;
        this.items.forEach(function (nP) { return value += nP.price; });
        return value;
    };
    Order.prototype.calcOrderValueWithDiscount = function () {
        var value = this.calcOrderValue() * (1 - this.discount);
        return value;
    };
    return Order;
}());
var Item = /** @class */ (function () {
    function Item(product, price) {
        this.product = product;
        this.price = price;
    }
    return Item;
}());
var c = new Client('Shaolin Pig Killer');
var itemA = new Item('Potato', 5);
var itemB = new Item('Coke', 2.50);
var itemC = new Item('Chocolate', 4.0);
var itemD = new Item('Coffe', 1);
var theOrder = new Order(c, [itemA, itemB, itemC, itemD], 'money', 0.1);
console.log("total order value: " + theOrder.calcOrderValue());
console.log("total order value with discount: " + theOrder.calcOrderValueWithDiscount());
