const { after } = require("node:test");
const { timeout } = require("nodemon/lib/config");

/**
 * @param {number} millis
 * @return {Promise}
 */
async function sleep(millis) {
  // Won't work as set timeout is executed as synchronous code
  // await setTimeout(() => {}, millis);

  //This however works
  // await new Promise((resolve) => setTimeout(resolve, millis));

  // Or this
  return new Promise((resolve) => setTimeout(resolve, millis));
}

let t = Date.now();
sleep(5000).then(() => console.log(Date.now() - t)); // 100
