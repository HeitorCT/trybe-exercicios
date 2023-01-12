class Tv {
  private _brand: string;
  private _size: number;
  private _resolution: string;
  private _connections: string[];
  private _connectedTo: string;

  constructor(n: string, h: number, w: string, c: string[]) {
    console.log(`Creating person ${n}`);
    this._brand = n;
    this._size = h;
    this._resolution = w;
    this._connections = c;
  }

  
  get connectedTo() {
    return this._connectedTo;
  }
  
  set connectedTo(conection: string) {
    if(this._connections.includes(conection)){
      this._connectedTo = conection;
    } else {
      console.log('Sorry, connection unavailable!');
    }
  }

  turnOn() {
    console.log(`${this._brand},${this._size},${this._resolution},${this._connections},${this._connectedTo}`);
  }
}

const tv1 = new Tv('LG', 32, '4K', ['HDMI', 'Ethernet', 'Wifi']);
tv1.turnOn();
tv1.connectedTo = 'HDMI';
console.log(tv1.connectedTo); 
tv1.connectedTo = 'asd';
console.log(tv1.connectedTo);
