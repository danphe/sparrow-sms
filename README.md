#sparrow-sms
 Node module to easily access sparrowSMS's APIs via JavaScript.

 Note: The module is work in progress, and is still in alpha. Use accordingly.

#Resources:
SparrowSMS's official API (http://docs.sparrowsms.com/en/latest/)

#Available Functions:


##1. sparrowSMS.setAuth({token, identity});
>
>* The token and identity is unique to a SparrowSMS account.
>* This is to be obtained from  SparrowSMS site at http://beta.sparrowsms.com/login/

##2. sparrowSMS.sendSMS({text, recipients});
>
>*  {String} text       - 160 character at max
>*  {String} recipients - Command separated numbers


##3. sparrowSMS.getCredit();
