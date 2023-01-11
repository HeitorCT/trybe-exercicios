class Client {
  name: string

  constructor(name: string){
    this.name = name;
  }
}

class Order {
  client: Client
  items: Item[]
  paymentType: string
  discount: number

  constructor(client: Client, items: Item[], paymentType: string, discount: number){
    this.client = client;
    this.items = items;
    this.paymentType = paymentType;
    this.discount = discount;
  }


  calcOrderValue ():number {
    let value = 0;
    this.items.forEach((nP) => value += nP.price);
    return value;
  }

  calcOrderValueWithDiscount ():number {
    const value = this.calcOrderValue() * (1-this.discount);
    return value;
  }
}

class Item {
  product: string
  price: number

  constructor(product, price){
    this.product = product;
    this.price = price;
  }
}

const c = new Client('Shaolin Pig Killer');
const itemA = new Item('Potato', 5);
const itemB = new Item('Coke', 2.50);
const itemC = new Item('Chocolate', 4.0);
const itemD = new Item('Coffe', 1);
const theOrder = new Order(c,[itemA, itemB, itemC, itemD],'money', 0.1)
console.log(`total order value: ${theOrder.calcOrderValue()}`);
console.log(`total order value with discount: ${theOrder.calcOrderValueWithDiscount()}`);