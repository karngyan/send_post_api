# send_post_api

SendPostApi - JavaScript client for send_post_api
SendPost API to send transactional emails reliably
This SDK is automatically generated by the [Swagger Codegen](https://github.com/swagger-api/swagger-codegen) project:

- API version: 1.0.0
- Package version: 1.0.0
- Build package: io.swagger.codegen.languages.JavascriptClientCodegen

## Installation

### For [Node.js](https://nodejs.org/)

#### npm

To publish the library as a [npm](https://www.npmjs.com/),
please follow the procedure in ["Publishing npm packages"](https://docs.npmjs.com/getting-started/publishing-npm-packages).

Then install it via:

```shell
npm install send_post_api --save
```

##### Local development

To use the library locally without publishing to a remote npm registry, first install the dependencies by changing 
into the directory containing `package.json` (and this README). Let's call this `JAVASCRIPT_CLIENT_DIR`. Then run:

```shell
npm install
```

Next, [link](https://docs.npmjs.com/cli/link) it globally in npm with the following, also from `JAVASCRIPT_CLIENT_DIR`:

```shell
npm link
```

Finally, switch to the directory you want to use your send_post_api from, and run:

```shell
npm link /path/to/<JAVASCRIPT_CLIENT_DIR>
```

You should now be able to `require('send_post_api')` in javascript files from the directory you ran the last 
command above from.

#### git
#
If the library is hosted at a git repository, e.g.
https://github.com/YOUR_USERNAME/send_post_api
then install it via:

```shell
    npm install YOUR_USERNAME/send_post_api --save
```

### For browser

The library also works in the browser environment via npm and [browserify](http://browserify.org/). After following
the above steps with Node.js and installing browserify with `npm install -g browserify`,
perform the following (assuming *main.js* is your entry file, that's to say your javascript file where you actually 
use this library):

```shell
browserify main.js > bundle.js
```

Then include *bundle.js* in the HTML pages.

### Webpack Configuration

Using Webpack you may encounter the following error: "Module not found: Error:
Cannot resolve module", most certainly you should disable AMD loader. Add/merge
the following section to your webpack config:

```javascript
module: {
  rules: [
    {
      parser: {
        amd: false
      }
    }
  ]
}
```

## Getting Started

Please follow the [installation](#installation) instruction and execute the following JS code:

```javascript
var SendPostApi = require('send_post_api');

var api = new SendPostApi.AccountipApi()

var xAccountApiKey = "xAccountApiKey_example"; // {String} Account API Key


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.iPRouterAllocateIP(xAccountApiKey, callback);

```

## Documentation for API Endpoints

All URIs are relative to *http://127.0.0.1:8080/api/v1*

Class | Method | HTTP request | Description
------------ | ------------- | ------------- | -------------
*SendPostApi.AccountipApi* | [**iPRouterAllocateIP**](docs/AccountipApi.md#iPRouterAllocateIP) | **POST** /account/ip/allocate | 
*SendPostApi.AccountipApi* | [**iPRouterDelete**](docs/AccountipApi.md#iPRouterDelete) | **DELETE** /account/ip/{ipid} | 
*SendPostApi.AccountipApi* | [**iPRouterGet**](docs/AccountipApi.md#iPRouterGet) | **GET** /account/ip/{ipid} | 
*SendPostApi.AccountipApi* | [**iPRouterGetAll**](docs/AccountipApi.md#iPRouterGetAll) | **GET** /account/ip/ | 
*SendPostApi.AccountipApi* | [**iPRouterUpdate**](docs/AccountipApi.md#iPRouterUpdate) | **PUT** /account/ip/{ipid} | 
*SendPostApi.AccountipstatApi* | [**iPStatRouterGetAllAggregateIPStats**](docs/AccountipstatApi.md#iPStatRouterGetAllAggregateIPStats) | **GET** /account/ip/stat/{ipid}/aggregate | 
*SendPostApi.AccountipstatApi* | [**iPStatRouterGetAllAggregateIPStatsByGroup**](docs/AccountipstatApi.md#iPStatRouterGetAllAggregateIPStatsByGroup) | **GET** /account/ip/stat/{ipid}/aggregate/provider | 
*SendPostApi.AccountipstatApi* | [**iPStatRouterGetAllAggregatedProviderStatsForAIP**](docs/AccountipstatApi.md#iPStatRouterGetAllAggregatedProviderStatsForAIP) | **GET** /account/ip/stat/{ipid}/aggregate/providers | 
*SendPostApi.AccountipstatApi* | [**iPStatRouterGetAllAggregatedProviderStatsForASpecificSubAccountOfAIP**](docs/AccountipstatApi.md#iPStatRouterGetAllAggregatedProviderStatsForASpecificSubAccountOfAIP) | **GET** /account/ip/stat/{ipid}/aggregate/sid/{sid}/providers | 
*SendPostApi.AccountipstatApi* | [**iPStatRouterGetAllAggregatedSubAccountStatsForAnIP**](docs/AccountipstatApi.md#iPStatRouterGetAllAggregatedSubAccountStatsForAnIP) | **GET** /account/ip/stat/{ipid}/aggregate/subaccounts | 
*SendPostApi.AccountipstatApi* | [**iPStatRouterGetAllIPStats**](docs/AccountipstatApi.md#iPStatRouterGetAllIPStats) | **GET** /account/ip/stat/{ipid} | 
*SendPostApi.AccountipstatApi* | [**iPStatRouterGetAllIPStatsByGroup**](docs/AccountipstatApi.md#iPStatRouterGetAllIPStatsByGroup) | **GET** /account/ip/stat/{ipid}/provider | 
*SendPostApi.AccountstatApi* | [**accountStatRouterGetAllAccountStats**](docs/AccountstatApi.md#accountStatRouterGetAllAccountStats) | **GET** /account/stat/ | 
*SendPostApi.AccountstatApi* | [**accountStatRouterGetAllAccountStatsByGroup**](docs/AccountstatApi.md#accountStatRouterGetAllAccountStatsByGroup) | **GET** /account/stat/group | 
*SendPostApi.AccountstatApi* | [**accountStatRouterGetAllAggregateAccountStats**](docs/AccountstatApi.md#accountStatRouterGetAllAggregateAccountStats) | **GET** /account/stat/aggregate | 
*SendPostApi.AccountstatApi* | [**accountStatRouterGetAllAggregateAccountStatsByGroup**](docs/AccountstatApi.md#accountStatRouterGetAllAggregateAccountStatsByGroup) | **GET** /account/stat/aggregate/group | 
*SendPostApi.AccountsubaccountApi* | [**subAccountRouterCount**](docs/AccountsubaccountApi.md#subAccountRouterCount) | **GET** /account/subaccount/count | 
*SendPostApi.AccountsubaccountApi* | [**subAccountRouterCreate**](docs/AccountsubaccountApi.md#subAccountRouterCreate) | **POST** /account/subaccount/ | 
*SendPostApi.AccountsubaccountApi* | [**subAccountRouterDelete**](docs/AccountsubaccountApi.md#subAccountRouterDelete) | **DELETE** /account/subaccount/{subAccountId} | 
*SendPostApi.AccountsubaccountApi* | [**subAccountRouterGet**](docs/AccountsubaccountApi.md#subAccountRouterGet) | **GET** /account/subaccount/{subAccountId} | 
*SendPostApi.AccountsubaccountApi* | [**subAccountRouterGetAll**](docs/AccountsubaccountApi.md#subAccountRouterGetAll) | **GET** /account/subaccount/ | 
*SendPostApi.AccountsubaccountApi* | [**subAccountRouterUpdate**](docs/AccountsubaccountApi.md#subAccountRouterUpdate) | **PUT** /account/subaccount/{subAccountId} | 
*SendPostApi.AuthApi* | [**authRouterCreate**](docs/AuthApi.md#authRouterCreate) | **POST** /auth/create | 
*SendPostApi.AuthApi* | [**authRouterGetAuthInfo**](docs/AuthApi.md#authRouterGetAuthInfo) | **POST** /auth/info | 
*SendPostApi.ClusterApi* | [**clusterRouterAddItemsToSuppressionFilterOfEveryNodeInCluster**](docs/ClusterApi.md#clusterRouterAddItemsToSuppressionFilterOfEveryNodeInCluster) | **POST** /cluster/suppression/filter | 
*SendPostApi.ClusterApi* | [**clusterRouterDeleteItemsFromSuppressionFilterOfEveryNodeInCluster**](docs/ClusterApi.md#clusterRouterDeleteItemsFromSuppressionFilterOfEveryNodeInCluster) | **DELETE** /cluster/suppression/filter | 
*SendPostApi.SubaccountdomainApi* | [**domainRouterCount**](docs/SubaccountdomainApi.md#domainRouterCount) | **GET** /subaccount/domain/count | 
*SendPostApi.SubaccountdomainApi* | [**domainRouterCreate**](docs/SubaccountdomainApi.md#domainRouterCreate) | **POST** /subaccount/domain/ | 
*SendPostApi.SubaccountdomainApi* | [**domainRouterDelete**](docs/SubaccountdomainApi.md#domainRouterDelete) | **DELETE** /subaccount/domain/{domainId} | 
*SendPostApi.SubaccountdomainApi* | [**domainRouterGet**](docs/SubaccountdomainApi.md#domainRouterGet) | **GET** /subaccount/domain/{domainId} | 
*SendPostApi.SubaccountdomainApi* | [**domainRouterGetAll**](docs/SubaccountdomainApi.md#domainRouterGetAll) | **GET** /subaccount/domain/ | 
*SendPostApi.SubaccountdomainApi* | [**domainRouterUpdate**](docs/SubaccountdomainApi.md#domainRouterUpdate) | **PUT** /subaccount/domain/{domainId} | 
*SendPostApi.SubaccountemailApi* | [**emailRouterSendEmail**](docs/SubaccountemailApi.md#emailRouterSendEmail) | **POST** /subaccount/email/ | 
*SendPostApi.SubaccounteventApi* | [**eventRouterCountAllEventsFromANodeOfASubAccountForAGivenTimeRange**](docs/SubaccounteventApi.md#eventRouterCountAllEventsFromANodeOfASubAccountForAGivenTimeRange) | **GET** /subaccount/event/node/{subAccountId}/count | 
*SendPostApi.SubaccounteventApi* | [**eventRouterCountAllEventsFromASubAccountForAGivenTimeRange**](docs/SubaccounteventApi.md#eventRouterCountAllEventsFromASubAccountForAGivenTimeRange) | **GET** /subaccount/event/count | 
*SendPostApi.SubaccounteventApi* | [**eventRouterGet**](docs/SubaccounteventApi.md#eventRouterGet) | **GET** /subaccount/event/{eventId} | 
*SendPostApi.SubaccounteventApi* | [**eventRouterGetAllEventsFromASubAccountForAGivenTimeRange**](docs/SubaccounteventApi.md#eventRouterGetAllEventsFromASubAccountForAGivenTimeRange) | **GET** /subaccount/event/ | 
*SendPostApi.SubaccounteventApi* | [**eventRouterGetAllEventsOfASubAccountFromASpecificNodeForAGivenTimeRange**](docs/SubaccounteventApi.md#eventRouterGetAllEventsOfASubAccountFromASpecificNodeForAGivenTimeRange) | **GET** /subaccount/event/node/{subAccountId} | 
*SendPostApi.SubaccounteventApi* | [**eventRouterGetEventInNode**](docs/SubaccounteventApi.md#eventRouterGetEventInNode) | **GET** /subaccount/event/node/{subAccountId}/{eventId} | 
*SendPostApi.SubaccountippoolApi* | [**iPPoolRouterCount**](docs/SubaccountippoolApi.md#iPPoolRouterCount) | **GET** /subaccount/ippool/count | 
*SendPostApi.SubaccountippoolApi* | [**iPPoolRouterCreate**](docs/SubaccountippoolApi.md#iPPoolRouterCreate) | **POST** /subaccount/ippool/ | 
*SendPostApi.SubaccountippoolApi* | [**iPPoolRouterDelete**](docs/SubaccountippoolApi.md#iPPoolRouterDelete) | **DELETE** /subaccount/ippool/{ippoolid} | 
*SendPostApi.SubaccountippoolApi* | [**iPPoolRouterGet**](docs/SubaccountippoolApi.md#iPPoolRouterGet) | **GET** /subaccount/ippool/{ippoolid} | 
*SendPostApi.SubaccountippoolApi* | [**iPPoolRouterGetAll**](docs/SubaccountippoolApi.md#iPPoolRouterGetAll) | **GET** /subaccount/ippool/ | 
*SendPostApi.SubaccountippoolApi* | [**iPPoolRouterUpdate**](docs/SubaccountippoolApi.md#iPPoolRouterUpdate) | **PUT** /subaccount/ippool/{ippoolid} | 
*SendPostApi.SubaccountmessageApi* | [**messageRouterGet**](docs/SubaccountmessageApi.md#messageRouterGet) | **GET** /subaccount/message/{messageId} | 
*SendPostApi.SubaccountmessageApi* | [**messageRouterGetAllEventsForAMessageId**](docs/SubaccountmessageApi.md#messageRouterGetAllEventsForAMessageId) | **GET** /subaccount/message/{messageId}/events | 
*SendPostApi.SubaccountmessageApi* | [**messageRouterGetAllEventsForAMessageIdFromANode**](docs/SubaccountmessageApi.md#messageRouterGetAllEventsForAMessageIdFromANode) | **GET** /subaccount/message/node/{subAccountId}/{messageId}/events | 
*SendPostApi.SubaccountmessageApi* | [**messageRouterGetAllMessages**](docs/SubaccountmessageApi.md#messageRouterGetAllMessages) | **GET** /subaccount/message/ | 
*SendPostApi.SubaccountmessageApi* | [**messageRouterGetAllMessagesFromANode**](docs/SubaccountmessageApi.md#messageRouterGetAllMessagesFromANode) | **GET** /subaccount/message/node/{subAccountId} | 
*SendPostApi.SubaccountmessageApi* | [**messageRouterGetMessageFromNode**](docs/SubaccountmessageApi.md#messageRouterGetMessageFromNode) | **GET** /subaccount/message/node/{subAccountId}/{messageId} | 
*SendPostApi.SubaccountrecipientApi* | [**recipientRouterGetAllMessagesForARecipient**](docs/SubaccountrecipientApi.md#recipientRouterGetAllMessagesForARecipient) | **GET** /subaccount/recipient/{recipient}/messages | 
*SendPostApi.SubaccountrecipientApi* | [**recipientRouterGetAllMessagesForARecipientFromANode**](docs/SubaccountrecipientApi.md#recipientRouterGetAllMessagesForARecipientFromANode) | **GET** /subaccount/recipient/node/{subAccountId}/{recipient}/messages | 
*SendPostApi.SubaccountsenderApi* | [**senderRouterCount**](docs/SubaccountsenderApi.md#senderRouterCount) | **GET** /subaccount/sender/count | 
*SendPostApi.SubaccountsenderApi* | [**senderRouterCreate**](docs/SubaccountsenderApi.md#senderRouterCreate) | **POST** /subaccount/sender/ | 
*SendPostApi.SubaccountsenderApi* | [**senderRouterDelete**](docs/SubaccountsenderApi.md#senderRouterDelete) | **DELETE** /subaccount/sender/{senderId} | 
*SendPostApi.SubaccountsenderApi* | [**senderRouterGet**](docs/SubaccountsenderApi.md#senderRouterGet) | **GET** /subaccount/sender/{senderId} | 
*SendPostApi.SubaccountsenderApi* | [**senderRouterGetAll**](docs/SubaccountsenderApi.md#senderRouterGetAll) | **GET** /subaccount/sender/ | 
*SendPostApi.SubaccountsenderApi* | [**senderRouterUpdate**](docs/SubaccountsenderApi.md#senderRouterUpdate) | **PUT** /subaccount/sender/{senderId} | 
*SendPostApi.SubaccountstatApi* | [**subAccountStatRouterGetAllAggregateSubAccountStats**](docs/SubaccountstatApi.md#subAccountStatRouterGetAllAggregateSubAccountStats) | **GET** /subaccount/stat/aggregate | 
*SendPostApi.SubaccountstatApi* | [**subAccountStatRouterGetAllAggregateSubAccountStatsByGroup**](docs/SubaccountstatApi.md#subAccountStatRouterGetAllAggregateSubAccountStatsByGroup) | **GET** /subaccount/stat/aggregate/group | 
*SendPostApi.SubaccountstatApi* | [**subAccountStatRouterGetAllAggregatedIPStatsForASubAccount**](docs/SubaccountstatApi.md#subAccountStatRouterGetAllAggregatedIPStatsForASubAccount) | **GET** /subaccount/stat/aggregate/ips | 
*SendPostApi.SubaccountstatApi* | [**subAccountStatRouterGetAllAggregatedProviderStatsForASpecificIPOfASubAccount**](docs/SubaccountstatApi.md#subAccountStatRouterGetAllAggregatedProviderStatsForASpecificIPOfASubAccount) | **GET** /subaccount/stat/aggregate/ip/{ipid}/providers | 
*SendPostApi.SubaccountstatApi* | [**subAccountStatRouterGetAllAggregatedProviderStatsForASubAccount**](docs/SubaccountstatApi.md#subAccountStatRouterGetAllAggregatedProviderStatsForASubAccount) | **GET** /subaccount/stat/aggregate/providers | 
*SendPostApi.SubaccountstatApi* | [**subAccountStatRouterGetAllSubAccountStats**](docs/SubaccountstatApi.md#subAccountStatRouterGetAllSubAccountStats) | **GET** /subaccount/stat/ | 
*SendPostApi.SubaccountstatApi* | [**subAccountStatRouterGetAllSubAccountStatsByGroup**](docs/SubaccountstatApi.md#subAccountStatRouterGetAllSubAccountStatsByGroup) | **GET** /subaccount/stat/group | 
*SendPostApi.SubaccountsuppressionApi* | [**suppressionRouterCount**](docs/SubaccountsuppressionApi.md#suppressionRouterCount) | **GET** /subaccount/suppression/count | 
*SendPostApi.SubaccountsuppressionApi* | [**suppressionRouterCreateSuppressions**](docs/SubaccountsuppressionApi.md#suppressionRouterCreateSuppressions) | **POST** /subaccount/suppression/ | 
*SendPostApi.SubaccountsuppressionApi* | [**suppressionRouterCreateSuppressionsInSuppressionFilter**](docs/SubaccountsuppressionApi.md#suppressionRouterCreateSuppressionsInSuppressionFilter) | **POST** /subaccount/suppression/filter | 
*SendPostApi.SubaccountsuppressionApi* | [**suppressionRouterDeleteSuppression**](docs/SubaccountsuppressionApi.md#suppressionRouterDeleteSuppression) | **DELETE** /subaccount/suppression/ | 
*SendPostApi.SubaccountsuppressionApi* | [**suppressionRouterDeleteSuppressionsInSuppressionFilter**](docs/SubaccountsuppressionApi.md#suppressionRouterDeleteSuppressionsInSuppressionFilter) | **DELETE** /subaccount/suppression/filter | 
*SendPostApi.SubaccountsuppressionApi* | [**suppressionRouterGetAllSuppressions**](docs/SubaccountsuppressionApi.md#suppressionRouterGetAllSuppressions) | **GET** /subaccount/suppression/ | 
*SendPostApi.SubaccountwebhookApi* | [**webhookRouterCount**](docs/SubaccountwebhookApi.md#webhookRouterCount) | **GET** /subaccount/webhook/count | 
*SendPostApi.SubaccountwebhookApi* | [**webhookRouterCreate**](docs/SubaccountwebhookApi.md#webhookRouterCreate) | **POST** /subaccount/webhook/ | 
*SendPostApi.SubaccountwebhookApi* | [**webhookRouterDelete**](docs/SubaccountwebhookApi.md#webhookRouterDelete) | **DELETE** /subaccount/webhook/{webhookId} | 
*SendPostApi.SubaccountwebhookApi* | [**webhookRouterGet**](docs/SubaccountwebhookApi.md#webhookRouterGet) | **GET** /subaccount/webhook/{webhookId} | 
*SendPostApi.SubaccountwebhookApi* | [**webhookRouterGetAll**](docs/SubaccountwebhookApi.md#webhookRouterGetAll) | **GET** /subaccount/webhook/ | 
*SendPostApi.SubaccountwebhookApi* | [**webhookRouterUpdate**](docs/SubaccountwebhookApi.md#webhookRouterUpdate) | **PUT** /subaccount/webhook/{webhookId} | 
*SendPostApi.TrackApi* | [**trackRouterTrackEmailOpen**](docs/TrackApi.md#trackRouterTrackEmailOpen) | **GET** /track/open/{subAccountId}/{ipId}/{emailType}/{messageId}/1.png | 
*SendPostApi.TrackApi* | [**trackRouterTrackLinkClick**](docs/TrackApi.md#trackRouterTrackLinkClick) | **GET** /track/click/{subAccountId}/{ipId}/{emailType}/{messageId} | 
*SendPostApi.TrackApi* | [**trackRouterTrackUnsubscribe**](docs/TrackApi.md#trackRouterTrackUnsubscribe) | **GET** /track/unsubscribe/{subAccountId}/{messageId} | 


## Documentation for Models

 - [SendPostApi.ModelsAIPStat](docs/ModelsAIPStat.md)
 - [SendPostApi.ModelsAccount](docs/ModelsAccount.md)
 - [SendPostApi.ModelsAuthInfo](docs/ModelsAuthInfo.md)
 - [SendPostApi.ModelsCity](docs/ModelsCity.md)
 - [SendPostApi.ModelsCountStat](docs/ModelsCountStat.md)
 - [SendPostApi.ModelsDNSRecord](docs/ModelsDNSRecord.md)
 - [SendPostApi.ModelsDeleteResponse](docs/ModelsDeleteResponse.md)
 - [SendPostApi.ModelsDomain](docs/ModelsDomain.md)
 - [SendPostApi.ModelsEAccount](docs/ModelsEAccount.md)
 - [SendPostApi.ModelsEDomain](docs/ModelsEDomain.md)
 - [SendPostApi.ModelsEIP](docs/ModelsEIP.md)
 - [SendPostApi.ModelsEIPPool](docs/ModelsEIPPool.md)
 - [SendPostApi.ModelsESender](docs/ModelsESender.md)
 - [SendPostApi.ModelsESubAccount](docs/ModelsESubAccount.md)
 - [SendPostApi.ModelsEWebhook](docs/ModelsEWebhook.md)
 - [SendPostApi.ModelsEmailErrorCode](docs/ModelsEmailErrorCode.md)
 - [SendPostApi.ModelsEmailMessage](docs/ModelsEmailMessage.md)
 - [SendPostApi.ModelsEmailResponse](docs/ModelsEmailResponse.md)
 - [SendPostApi.ModelsEventMetadata](docs/ModelsEventMetadata.md)
 - [SendPostApi.ModelsEventType](docs/ModelsEventType.md)
 - [SendPostApi.ModelsFrom](docs/ModelsFrom.md)
 - [SendPostApi.ModelsIP](docs/ModelsIP.md)
 - [SendPostApi.ModelsIPPool](docs/ModelsIPPool.md)
 - [SendPostApi.ModelsIPPoolType](docs/ModelsIPPoolType.md)
 - [SendPostApi.ModelsIPStat](docs/ModelsIPStat.md)
 - [SendPostApi.ModelsIPType](docs/ModelsIPType.md)
 - [SendPostApi.ModelsInstance](docs/ModelsInstance.md)
 - [SendPostApi.ModelsMember](docs/ModelsMember.md)
 - [SendPostApi.ModelsPIPStat](docs/ModelsPIPStat.md)
 - [SendPostApi.ModelsQEmailMessage](docs/ModelsQEmailMessage.md)
 - [SendPostApi.ModelsQEvent](docs/ModelsQEvent.md)
 - [SendPostApi.ModelsRDSuppression](docs/ModelsRDSuppression.md)
 - [SendPostApi.ModelsRIPStat](docs/ModelsRIPStat.md)
 - [SendPostApi.ModelsRStat](docs/ModelsRStat.md)
 - [SendPostApi.ModelsRSuppression](docs/ModelsRSuppression.md)
 - [SendPostApi.ModelsReplyTo](docs/ModelsReplyTo.md)
 - [SendPostApi.ModelsRoutingStrategy](docs/ModelsRoutingStrategy.md)
 - [SendPostApi.ModelsSIPStat](docs/ModelsSIPStat.md)
 - [SendPostApi.ModelsSender](docs/ModelsSender.md)
 - [SendPostApi.ModelsStat](docs/ModelsStat.md)
 - [SendPostApi.ModelsSubAccount](docs/ModelsSubAccount.md)
 - [SendPostApi.ModelsSubAccountType](docs/ModelsSubAccountType.md)
 - [SendPostApi.ModelsSuppression](docs/ModelsSuppression.md)
 - [SendPostApi.ModelsSuppressionEmail](docs/ModelsSuppressionEmail.md)
 - [SendPostApi.ModelsSuppressionReason](docs/ModelsSuppressionReason.md)
 - [SendPostApi.ModelsSystemDNSRecord](docs/ModelsSystemDNSRecord.md)
 - [SendPostApi.ModelsSystemDomain](docs/ModelsSystemDomain.md)
 - [SendPostApi.ModelsTo](docs/ModelsTo.md)
 - [SendPostApi.ModelsWMessage](docs/ModelsWMessage.md)
 - [SendPostApi.ModelsWebhook](docs/ModelsWebhook.md)
 - [SendPostApi.UaparserDevice](docs/UaparserDevice.md)
 - [SendPostApi.UaparserOs](docs/UaparserOs.md)
 - [SendPostApi.UaparserUserAgent](docs/UaparserUserAgent.md)


## Documentation for Authorization

 All endpoints do not require authorization.

