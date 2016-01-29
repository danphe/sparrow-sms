console.log("Testing sparrow-sms...");

var sparrowSMS = require('./sparrow-sms.js');

/**
* The token and identity is unique to a SparrowSMS account.
* This is to be obtained from  SparrowSMS site at
* 	http://beta.sparrowsms.com/login/
*/
var authObject = {
  token    : 'kxcHsfsA00j4m0oLgzL2fDaul',
  identity : 'Demo'
};
sparrowSMS.setAuth(authObject);

/**
*  {String} text       - 160 character at max
*  {String} recipients - Command seperated numbers
*/
sparrowSMS.sendSMS({
  text       : "Testing SparrowSMS API. Please Ignore",
  recipients : "9851100000"
});

sparrowSMS.getCredit();
