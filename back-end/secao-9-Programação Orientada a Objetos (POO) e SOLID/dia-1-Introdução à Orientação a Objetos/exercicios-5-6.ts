class Data {
  day: number
  month: number
  year: number

  private dictonaryMonth: string[] = ["January","February","March","April","May","June","July",
  "August","September","October","November","December"];

  constructor(day: number, month: number, year: number){
    this.day = (day >= 0 && day <= 31) ? day : 1;
    this.month = (month >= 1 && month <= 12) ? month : 1;
    this.year = (year >= 0 ) ? year : 1900;
  }

  getMonthName() :string {
    return this.dictonaryMonth[this.month-1];
  }

  isLeapYear() :boolean {
    const y = this.year;
    return (y%4 === 0 && y%100 !== 0) || (y % 100 === 0 && y%400 === 0);
  }
}

const d = new Data(1, 1, 2004);
const d2 = new Data(27,09, 2003);
console.log(d.getMonthName());
console.log(d.isLeapYear());
