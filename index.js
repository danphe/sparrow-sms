var moment = require('moment');
var request = require('request');

/**
 * Resources:
 * 	-SparrowSMS's official GitHub page:
 * 		https://github.com/sparrowsms/apidocs
 * 	-API
 * 		http://docs.sparrowsms.com/en/latest/
 */


/**
 * sparrowSMS() constructs an object ready to access Sparrow SMS API"
 * @param  {String} token - Token generated from Sparrow SMS's website.
 * @param  {String} from  - Identity provided by Sparrow SMS.
 */


var sparrowSMS = {

  token: '',
  from: '',
  pushSMSURL: 'http://api.sparrowsms.com/v2/sms/',
  creditsURL: 'http://api.sparrowsms.com/v2/credit/',

  /**
   * Sets Authentication need to access the Sparrow SMS's API.
   * @param {object} authObject - object with the blueprint {token: {String}, identity: {String}}
   */
  setAuth: function(authObject) {
    this.setToken(authObject.token);
    console.log(authObject)
    this.setIdentity(authObject.identity);
  },

  setToken: function(token) {
    this.token = token;
  },

  getToken: function() {
    return token;
  },

  setIdentity: function(identity) {
    this.from = identity;
  },

  getIdentity: function(identity) {
    return this.from;
  },

  /**
   * TODO:
   * 	-Check for max length of SMS and throw an error.
   */

  /**
   * @param  {object} SMSObj - object for SMS with the blueprint {text, recipients}
   *                        where,
   *                        param  {String} text  - SMS Message to be sent.
   *                        param  {String} recipients - Comma Separated 10-digit mobile numbers.
   */
  sendSMS: function(SMSObj) {
    request.post(
      this.pushSMSURL, {
        form: {
          token: this.token,
          from: this.from,
          to: SMSObj.recipients,
          text: SMSObj.text
        }
      },
      function(error, response, body) {
        if (error) {
          console.log(error);
        } else {
          console.log("\n" + response.statusCode, body);
        }
      }
    );
  },

  getCredit: function() {
    request.get(
      this.creditsURL, {
        qs: {
          token: this.token
        }
      },
      function(error, response, body) {
        if (error) {
          console.log(error);
        } else {
          console.log("\n" + response.statusCode, body);
        }
      }
    );
  },

  /**
   * TODO:
   * 	-check if is a number
   * 	-check if is a valid phone number
   */
  isValidRecipient: function() {

  },

  /**
   * TODO:
   * 	-check for length
   * 	-check for non-unicode character
   */
  isValidText: function() {},

  _getTime: function() {
    return moment(new Date()).format('YYYY-MM-DD HH:mm:ss UTC Z');
  },

  _getUnixTimestamp: function() {
    return moment(new Date()).valueOf();
  },

  getInfo: function() {
    return "Npm module 'sparrow-sms' by sarojk@danpheit.com.";
  }

};

module.exports = sparrowSMS;
