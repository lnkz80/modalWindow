// const timeout = setTimeout(() => {
//   console.log("1 sec past");
// }, 1000);

// clearTimeout(timeout);

// const delay = (callback, wait = 1000) => {
//   setTimeout(callback, wait);
// };

// delay(() => {
//   console.log("after 2 sec");
// }, 2000);

const delay = (wait = 1000) => {
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve();
    }, wait);
  });
  return promise;
};

delay(2500)
  .then(() => {
    console.log("After 2 sec");
  })
  .catch((err) => console.error("Error:", err))
  .finally(() => {
    console.log("Finally");
  });
