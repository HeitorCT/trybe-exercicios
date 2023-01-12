interface MyInterface {
  myNumber: number;

  myFunc(myParam:number): string;
}

class MyClass implements MyInterface {
  constructor(public myNumber: number) {};

  myFunc(myParam: number): string {
    return `${this.myNumber} + ${myParam} = ${this.myNumber + myParam}`;
  }
}

const obj = new MyClass(20);

console.log(obj.myFunc(5));