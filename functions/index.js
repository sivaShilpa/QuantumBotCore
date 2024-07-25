const admin = require("firebase-admin");
admin.initializeApp();

// import the function from the specific file
const {addMessage} = require("./api/addMessage");

// Export the function for deployment
exports.addMessage = addMessage;
