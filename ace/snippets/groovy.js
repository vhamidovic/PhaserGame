define("ace/snippets/groovy",["require","exports","module"],function(e,t,n){
"use strict";

t.snippetText="## Custom snippets - applicationContext\n\
snippet applicationContext\n\
	applicationContext.getBean(\"${1}\")\n\
snippet userDataService\n\
	userDataService\n\
snippet userDetailDataService\n\
	userDetailDataService\n\
snippet userIncomingAddressDataService\n\
	userIncomingAddressDataService\n\
snippet smsChannelDataService\n\
	smsChannelDataService\n\
snippet emailIpWhiteListDataService\n\
	emailIpWhiteListDataService\n\
snippet emailIpBlackListDataService\n\
	emailIpBlackListDataService\n\
snippet mailMessageLogDataService\n\
	mailMessageLogDataService\n\
snippet email2SmsMessageDetailsDataService\n\
	email2SmsMessageDetailsDataService\n\
snippet .findById\n\
	findById(${1})\n\
snippet .find\n\
	find(${1})\n\
snippet .save\n\
	save(${1})\n\
";
t.scope="groovy"
})
