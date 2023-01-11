var Tv = /** @class */ (function () {
    function Tv(n, h, w, c) {
        console.log("Creating person " + n);
        this._brand = n;
        this._size = h;
        this._resolution = w;
        this._connections = c;
    }
    Object.defineProperty(Tv.prototype, "connectedTo", {
        get: function () {
            return this._connectedTo;
        },
        set: function (conection) {
            if (this._connections.includes(conection)) {
                this._connectedTo = conection;
            }
            else {
                console.log('Sorry, connection unavailable!');
            }
        },
        enumerable: false,
        configurable: true
    });
    Tv.prototype.turnOn = function () {
        console.log(this._brand + "," + this._size + "," + this._resolution + "," + this._connections + "," + this._connectedTo);
    };
    return Tv;
}());
var tv1 = new Tv('LG', 32, '4K', ['HDMI', 'Ethernet', 'Wifi']);
tv1.turnOn();
tv1.connectedTo = 'HDMI';
console.log(tv1.connectedTo);
tv1.connectedTo = 'asd';
console.log(tv1.connectedTo);
