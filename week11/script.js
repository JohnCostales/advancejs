// function getAge() {
//   let today = new Date();
//   let birthDate = new Date(this.dob);
//   let age = today.getFullYear() - birthDate.getFullYear();
//   let m = today.getMonth() - birthDate.getMonth();
//   if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())){
//     age --;
//   }
//   return age;
//
// }
//
// const p1 = { dob: '01/05/1996'};
// const bound = getAge.bind(p1);
//
// console.log(`Call: ${getAge.call(p1)}`);
// console.log(`Apply: ${getAge.apply(p1)}`);
// console.log(`Bind: ${bound()}`);
//

let MathsLib = {
  num: 10,
  addTwo() {
    this.num += 2;
    return this;
  },
  triple() {
    this.num *= 3;
    return this;
  },
  timeTen() {
    this.num *= 10;
    return this;
  },
  print() {
    console.log( this.num );
  }
}.addTwo().triple().timeTen().print();
