// const createMember = (name) => {
//   return (lastName) => {
//     console.log(name + " " + lastName);
//   };
// };

// const logWithLastName = createMember("aLEX");
// console.log(logWithLastName( ));

const person = {
  name: "Alex",
  age: 40,
  lang: ["ua", "ru", "en"],
  phrase: "Good morning my neighbours",
  getNameAndPhrase() {
    return `${this.name} says "${this.phrase}"`;
  },
};

const logger = {
  keys() {
    console.log("Object keys: ", Object.keys(this));
  },
  keysAndValues() {
    Object.keys(this).forEach((key) => {
      console.log(`Key: ${key} - Value: ${this[key]}`);
    });
  },
};

logger.keysAndValues.call(person);
