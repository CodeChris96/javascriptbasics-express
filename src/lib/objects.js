const createPerson = (name, age) => {
  return {
    name,
    age,
  };
};

const getName = object => {
  return object.name;
};

const getProperty = (property, object) => {
  return object[property];
};

const hasProperty = (property, object) => {
  return property in object;
};

const isOver65 = person => {
  if (person.age > 65) {
    return true;
  }
  return false;
};

function getAges(people) {
  return people.map(person => person.age);
}

const findByName = (name, people) => {
  return people.find(person => person.name === name);
};

function findHondas(cars) {
  return cars.filter(car => car.manufacturer === 'Honda');
}
const averageAge = people => {
  const sum = people.map(person => person.age).reduce((total, age) => total + age, 0);
  return sum / people.length;
};

const createTalkingPerson = (name, age) => {
  return {
    name,
    age,
    introduce(to) {
      return `Hi ${to}, my name is ${name} and I am ${age}!`;
    },
  };
};

module.exports = {
  createPerson,
  getName,
  getProperty,
  hasProperty,
  isOver65,
  getAges,
  findByName,
  findHondas,
  averageAge,
  createTalkingPerson,
};
