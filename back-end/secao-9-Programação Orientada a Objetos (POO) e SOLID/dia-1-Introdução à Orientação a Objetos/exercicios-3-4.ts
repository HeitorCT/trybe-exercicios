class client {
  name: string

  constructor(name: string){
    this.name = name;
  }
}

class order {
  client: client
  items: item[]
  paymentType: string
  discount: number

  constructor(client: client, items: item[], paymentType: string, discount: number){
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

class item {
  product: string
  price: number

  constructor(product, price){
    this.product = product;
    this.price = price;
  }
}

const c = new client('Shaolin Pig Killer');
const itemA = new item('Potato', 5);
const itemB = new item('Coke', 2.50);
const itemC = new item('Chocolate', 4.0);
const itemD = new item('Coffe', 1);
const theOrder = new order(c,[itemA, itemB, itemC, itemD],'money', 0.1)
console.log(`total order value: ${theOrder.calcOrderValue()}`);
console.log(`total order value with discount: ${theOrder.calcOrderValueWithDiscount()}`);