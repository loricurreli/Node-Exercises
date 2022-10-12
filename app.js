const { createServer } = require("node:http");
const { text } = require("stream/consumers");

function createApp(){
return createServer((request, response) => {
  console.log("request received");

  response.statusCode = 200;

  response.setHeader("Content-Type", "text/html");

  const jsonResponseBody = "Welcome to the Earth";
  response.end(jsonResponseBody);
})
}
module.exports = createApp