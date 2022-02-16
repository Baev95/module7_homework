// Задание 5

/* class ElectricalAppliance {
	constructor(brend, weigth){
		this.object = 'Electrical appliance';
    this.brend = brend;
    this.weigth = `${weigth} g.`;
    this.OnRosette = false;
}
    canBuyIt() {
      console.log(`Конечно можем!`)
    }
    
    isOnRosette() {
  console.log(`Потребляемая мощность прибора ${this.name} составляет ${this.power}.`);
  return this.OnRosette = true;
}
isOffRosette() {
  console.log(`Прибор ${this.name} не включен в розетку. `);
  return this.OnRosette = false;
}
}

class TV extends ElectricalAppliance{
constructor(brend, name, weigth, price, power){
    super(brend, weigth);
    this.name = name;
    this.price = `${price}$.`;
    this.power = power;
}
    onSerial() {
      if (this.OnRosette == true) {
        console.log(`Какой сериал будем смотреть?`)
      } else {
        console.log(`Включи телевизор!`)
      }
    }
}

class Mobile extends ElectricalAppliance{
constructor(brend, name, weigth, price, power){
    super(brend, weigth);
    this.name = name;
    this.price = `${price}$.`;
    this.power = power;
}
}


const sony = new TV('Sony', 'Sony 31 x 13', 203, 9.42, 590);

const iPhone = new Mobile('IPhone', 'IPhone 12', 162, 16.62, 234);
const samsung = new Mobile('Samsung', 'Galaxy A22s 5G', 162, 16.62, 156,);

console.log(sony);;
console.log(sony.isOnRosette());
console.log(sony.onSerial());
console.log(sony.isOffRosette());
console.log(sony.onSerial());
console.log(samsung);
console.log(iPhone)
console.log(sony.isOnRosette())
console.log(sony.onSerial())
console.log(sony.isOffRosette())
console.log(sony.onSerial())
console.log(samsung)
console.log(iPhone.canBuyIt())
console.log(iPhone.isOnRosette())
console.log(iPhone.isOffRosette()) */

// Переписать консольное приложение из предыдущего юнита на классы.

// Общие требования:

// Имена классов, свойств и методов должны быть информативными;
// Соблюдать best practices;
// Использовать синтаксис ES6.

