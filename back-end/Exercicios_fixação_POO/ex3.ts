class SuperClass {

  constructor(public isSuper: boolean = true) {}

  sayHello () {
    console.log("hello word!");
    
  }
}

class SubClass extends SuperClass {
  constructor() {
    super();
    this.isSuper = false;
  }
}

const myFunc = (obj: SubClass) => {
  if(obj.isSuper) {
    console.log("Super!");    
  } else {
    console.log("Sub!");
  }
  obj.sayHello();
}

const obj1 = new SuperClass;
const obj2 = new SubClass;

myFunc(obj1);
myFunc(obj2);

