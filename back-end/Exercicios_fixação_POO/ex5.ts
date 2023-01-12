interface Logger {
  log(str: string): void;
}

class ConsoleLogger implements Logger {
  log(str: string): void {
    console.log(str);    
  }
}

class ConsoleLogger2 implements Logger {
  log(str: string): void {
    console.log(`metodo 2: ${str}`);    
  }
}

interface Database {
  logger: Logger;
  save(key: string, value: string): void;
}

class ExampleDatabase implements Database {
  constructor(public logger: Logger = new ConsoleLogger()) {}

  save(key: string, value: string): void {
    this.logger.log(key+value);    
  }
}

const log1 = new ConsoleLogger();
const log2 = new ConsoleLogger2();

const data1 = new ExampleDatabase(log1);
const data2 = new ExampleDatabase(log2);
const data3 = new ExampleDatabase();

data1.save('data1', 'content data1')
data2.save('data2', 'content data2')
data3.save('data3', 'content data3')