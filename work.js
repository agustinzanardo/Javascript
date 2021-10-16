function Auto (marca, año, funciona){
  this.marca = marca;
  this.marca = año;
  this.funciona = funciona;
};

let auto1 = new Auto("Honda",2009,true);
console.log(auto1);
let auto2 = new Auto ("GMT",2015,false);
console.log(auto2)