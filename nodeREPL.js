const crypto = require('node:crypto')
const userID = crypto.randomUUID({disableEntropyCache : true});
console.log("The user ID is : " + userID)

