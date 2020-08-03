const person = {
  name: "Alex",
  age: "40",
  isProgrammer: true,
  languages: ["ua", "en", "ru"],
  greet() {
    console.log(`Hello from ${this.name}`);
  },
};

// person.greet();

const logger = {
  keys() {
    console.log("Object keys: ", Object.keys(this));
  },
  keysAndValues() {
    Object.keys(this).forEach((key) => {
      console.log(`"${key}" : ${this[key]}`);
    });
  },
  withParams(top = false, between = false, bottom = false) {
    if (top) {
      console.log("===================== START =====================");
    }

    Object.keys(this).forEach((key, index, array) => {
      console.log(`"${key}" : ${this[key]}`);
      if (between && index != array.length - 1) {
        console.log("-------------------------------------------------");
      }
    });

    if (bottom) {
      console.log("===================== STOP ======================");
    }
  },
};

logger.withParams.call(person, true, true, true);
