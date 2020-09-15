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

var api = new SendPostApi.AccountintegrationApi()

var xAccountApiKey = "xAccountApiKey_example"; // {String} Account API Key


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.accountIntegrationRouterCount(xAccountApiKey, callback);

```

## Documentation for API Endpoints

All URIs are relative to *https://api.sendpost.io/api/v1*

Class | Method | HTTP request | Description
------------ | ------------- | ------------- | -------------
*SendPostApi.AccountintegrationApi* | [**accountIntegrationRouterCount**](docs/AccountintegrationApi.md#accountIntegrationRouterCount) | **GET** /account/integration/count | 
*SendPostApi.AccountintegrationApi* | [**accountIntegrationRouterCreate**](docs/AccountintegrationApi.md#accountIntegrationRouterCreate) | **POST** /account/integration/{itype} | 
*SendPostApi.AccountintegrationApi* | [**accountIntegrationRouterDelete**](docs/AccountintegrationApi.md#accountIntegrationRouterDelete) | **DELETE** /account/integration/{itype} | 
*SendPostApi.AccountintegrationApi* | [**accountIntegrationRouterDisableGlockappsIPMonitoring**](docs/AccountintegrationApi.md#accountIntegrationRouterDisableGlockappsIPMonitoring) | **DELETE** /account/integration/glockapps/monitor/{ipid} | 
*SendPostApi.AccountintegrationApi* | [**accountIntegrationRouterEnableGlockappsIPMonitoring**](docs/AccountintegrationApi.md#accountIntegrationRouterEnableGlockappsIPMonitoring) | **POST** /account/integration/glockapps/monitor/{ipid} | 
*SendPostApi.AccountintegrationApi* | [**accountIntegrationRouterGetAll**](docs/AccountintegrationApi.md#accountIntegrationRouterGetAll) | **GET** /account/integration/ | 
*SendPostApi.AccountintegrationApi* | [**accountIntegrationRouterGetMonitoredIPStats**](docs/AccountintegrationApi.md#accountIntegrationRouterGetMonitoredIPStats) | **GET** /account/integration/glockapps/monitor/stat/{ipid} | 
*SendPostApi.AccountintegrationApi* | [**accountIntegrationRouterUpdate**](docs/AccountintegrationApi.md#accountIntegrationRouterUpdate) | **PUT** /account/integration/{itype} | 
*SendPostApi.AccountipApi* | [**iPRouterAllocateIP**](docs/AccountipApi.md#iPRouterAllocateIP) | **POST** /account/ip/allocate | 
*SendPostApi.AccountipApi* | [**iPRouterCount**](docs/AccountipApi.md#iPRouterCount) | **GET** /account/ip/count | 
*SendPostApi.AccountipApi* | [**iPRouterDelete**](docs/AccountipApi.md#iPRouterDelete) | **DELETE** /account/ip/{ipid} | 
*SendPostApi.AccountipApi* | [**iPRouterGet**](docs/AccountipApi.md#iPRouterGet) | **GET** /account/ip/{ipid} | 
*SendPostApi.AccountipApi* | [**iPRouterGetAll**](docs/AccountipApi.md#iPRouterGetAll) | **GET** /account/ip/ | 
*SendPostApi.AccountipApi* | [**iPRouterUpdate**](docs/AccountipApi.md#iPRouterUpdate) | **PUT** /account/ip/{ipid} | 
*SendPostApi.AccountippoolApi* | [**accountIPPoolRouterCount**](docs/AccountippoolApi.md#accountIPPoolRouterCount) | **GET** /account/ippool/count | 
*SendPostApi.AccountippoolApi* | [**accountIPPoolRouterCreate**](docs/AccountippoolApi.md#accountIPPoolRouterCreate) | **POST** /account/ippool/ | 
*SendPostApi.AccountippoolApi* | [**accountIPPoolRouterDelete**](docs/AccountippoolApi.md#accountIPPoolRouterDelete) | **DELETE** /account/ippool/{ippoolid} | 
*SendPostApi.AccountippoolApi* | [**accountIPPoolRouterGet**](docs/AccountippoolApi.md#accountIPPoolRouterGet) | **GET** /account/ippool/{ippoolid} | 
*SendPostApi.AccountippoolApi* | [**accountIPPoolRouterGetAll**](docs/AccountippoolApi.md#accountIPPoolRouterGetAll) | **GET** /account/ippool/ | 
*SendPostApi.AccountippoolApi* | [**accountIPPoolRouterUpdate**](docs/AccountippoolApi.md#accountIPPoolRouterUpdate) | **PUT** /account/ippool/{ippoolid} | 
*SendPostApi.AccountipstatApi* | [**iPStatRouterGetAllAggregateIPStats**](docs/AccountipstatApi.md#iPStatRouterGetAllAggregateIPStats) | **GET** /account/ip/stat/{ipid}/aggregate | 
*SendPostApi.AccountipstatApi* | [**iPStatRouterGetAllAggregateIPStatsByGroup**](docs/AccountipstatApi.md#iPStatRouterGetAllAggregateIPStatsByGroup) | **GET** /account/ip/stat/{ipid}/aggregate/provider | 
*SendPostApi.AccountipstatApi* | [**iPStatRouterGetAllAggregatedProviderStatsForAIP**](docs/AccountipstatApi.md#iPStatRouterGetAllAggregatedProviderStatsForAIP) | **GET** /account/ip/stat/{ipid}/aggregate/providers | 
*SendPostApi.AccountipstatApi* | [**iPStatRouterGetAllAggregatedProviderStatsForASpecificSubAccountOfAIP**](docs/AccountipstatApi.md#iPStatRouterGetAllAggregatedProviderStatsForASpecificSubAccountOfAIP) | **GET** /account/ip/stat/{ipid}/aggregate/sid/{sid}/providers | 
*SendPostApi.AccountipstatApi* | [**iPStatRouterGetAllAggregatedSubAccountStatsForAnIP**](docs/AccountipstatApi.md#iPStatRouterGetAllAggregatedSubAccountStatsForAnIP) | **GET** /account/ip/stat/{ipid}/aggregate/subaccounts | 
*SendPostApi.AccountipstatApi* | [**iPStatRouterGetAllIPStats**](docs/AccountipstatApi.md#iPStatRouterGetAllIPStats) | **GET** /account/ip/stat/{ipid} | 
*SendPostApi.AccountipstatApi* | [**iPStatRouterGetAllIPStatsByGroup**](docs/AccountipstatApi.md#iPStatRouterGetAllIPStatsByGroup) | **GET** /account/ip/stat/{ipid}/provider | 
*SendPostApi.AccountsmtpstatApi* | [**sMTPStatRouterGetAllAggregateIPProviderSMTPStats**](docs/AccountsmtpstatApi.md#sMTPStatRouterGetAllAggregateIPProviderSMTPStats) | **GET** /account/smtp/stat/ip/{ipid}/provider/{pname}/aggregate | 
*SendPostApi.AccountsmtpstatApi* | [**sMTPStatRouterGetAllAggregateIPSMTPStats**](docs/AccountsmtpstatApi.md#sMTPStatRouterGetAllAggregateIPSMTPStats) | **GET** /account/smtp/stat/ip/{ipid}/aggregate | 
*SendPostApi.AccountsmtpstatApi* | [**sMTPStatRouterGetAllAggregateIPSMTPStatsForSubAccount**](docs/AccountsmtpstatApi.md#sMTPStatRouterGetAllAggregateIPSMTPStatsForSubAccount) | **GET** /account/smtp/stat/ip/{ipid}/subaccount/{sid}/aggregate | 
*SendPostApi.AccountsmtpstatApi* | [**sMTPStatRouterGetAllAggregateSubAccountProviderSMTPStats**](docs/AccountsmtpstatApi.md#sMTPStatRouterGetAllAggregateSubAccountProviderSMTPStats) | **GET** /account/smtp/stat/subaccount/{sid}/provider/{pname}/aggregate | 
*SendPostApi.AccountsmtpstatApi* | [**sMTPStatRouterGetAllAggregateSubAccountSMTPStats**](docs/AccountsmtpstatApi.md#sMTPStatRouterGetAllAggregateSubAccountSMTPStats) | **GET** /account/smtp/stat/subaccount/{sid}/aggregate | 
*SendPostApi.AccountsmtpstatApi* | [**sMTPStatRouterGetAllAggregateSubAccountSMTPStatsForIP**](docs/AccountsmtpstatApi.md#sMTPStatRouterGetAllAggregateSubAccountSMTPStatsForIP) | **GET** /account/smtp/stat/subaccount/{sid}/ip/{ipid}/aggregate | 
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
*SendPostApi.AccountwebhookApi* | [**accountWebhookRouterCount**](docs/AccountwebhookApi.md#accountWebhookRouterCount) | **GET** /account/webhook/count | 
*SendPostApi.AccountwebhookApi* | [**accountWebhookRouterCreate**](docs/AccountwebhookApi.md#accountWebhookRouterCreate) | **POST** /account/webhook/ | 
*SendPostApi.AccountwebhookApi* | [**accountWebhookRouterDelete**](docs/AccountwebhookApi.md#accountWebhookRouterDelete) | **DELETE** /account/webhook/{webhookId} | 
*SendPostApi.AccountwebhookApi* | [**accountWebhookRouterGet**](docs/AccountwebhookApi.md#accountWebhookRouterGet) | **GET** /account/webhook/{webhookId} | 
*SendPostApi.AccountwebhookApi* | [**accountWebhookRouterGetAll**](docs/AccountwebhookApi.md#accountWebhookRouterGetAll) | **GET** /account/webhook/ | 
*SendPostApi.AccountwebhookApi* | [**accountWebhookRouterUpdate**](docs/AccountwebhookApi.md#accountWebhookRouterUpdate) | **PUT** /account/webhook/{webhookId} | 
*SendPostApi.AuthApi* | [**authRouterCreate**](docs/AuthApi.md#authRouterCreate) | **POST** /auth/create | 
*SendPostApi.AuthApi* | [**authRouterGetAuthInfo**](docs/AuthApi.md#authRouterGetAuthInfo) | **POST** /auth/info | 
*SendPostApi.ClusterApi* | [**clusterRouterAddItemsToSuppressionFilterOfEveryNodeInCluster**](docs/ClusterApi.md#clusterRouterAddItemsToSuppressionFilterOfEveryNodeInCluster) | **POST** /cluster/suppression/filter | 
*SendPostApi.ClusterApi* | [**clusterRouterDeleteItemsFromSuppressionFilterOfEveryNodeInCluster**](docs/ClusterApi.md#clusterRouterDeleteItemsFromSuppressionFilterOfEveryNodeInCluster) | **DELETE** /cluster/suppression/filter | 
*SendPostApi.SmtpApi* | [**sMTPRouterReceiveWebhooksRaisedFromSMTPServers**](docs/SmtpApi.md#sMTPRouterReceiveWebhooksRaisedFromSMTPServers) | **POST** /smtp/webhook | 
*SendPostApi.SubaccountcleanlistApi* | [**listCleaningRouterCleanBulkEmailList**](docs/SubaccountcleanlistApi.md#listCleaningRouterCleanBulkEmailList) | **POST** /subaccount/cleanlist/bulk | 
*SendPostApi.SubaccountcleanlistApi* | [**listCleaningRouterCleanEmailist**](docs/SubaccountcleanlistApi.md#listCleaningRouterCleanEmailist) | **POST** /subaccount/cleanlist/ | 
*SendPostApi.SubaccountdomainApi* | [**domainRouterCount**](docs/SubaccountdomainApi.md#domainRouterCount) | **GET** /subaccount/domain/count | 
*SendPostApi.SubaccountdomainApi* | [**domainRouterCreate**](docs/SubaccountdomainApi.md#domainRouterCreate) | **POST** /subaccount/domain/ | 
*SendPostApi.SubaccountdomainApi* | [**domainRouterDelete**](docs/SubaccountdomainApi.md#domainRouterDelete) | **DELETE** /subaccount/domain/{domainId} | 
*SendPostApi.SubaccountdomainApi* | [**domainRouterGet**](docs/SubaccountdomainApi.md#domainRouterGet) | **GET** /subaccount/domain/{domainId} | 
*SendPostApi.SubaccountdomainApi* | [**domainRouterGetAll**](docs/SubaccountdomainApi.md#domainRouterGetAll) | **GET** /subaccount/domain/ | 
*SendPostApi.SubaccountdomainApi* | [**domainRouterUpdate**](docs/SubaccountdomainApi.md#domainRouterUpdate) | **PUT** /subaccount/domain/{domainId} | 
*SendPostApi.SubaccountdomainApi* | [**domainRouterVerify**](docs/SubaccountdomainApi.md#domainRouterVerify) | **POST** /subaccount/domain/{domainId}/verify | 
*SendPostApi.SubaccountemailApi* | [**emailRouterSendEmail**](docs/SubaccountemailApi.md#emailRouterSendEmail) | **POST** /subaccount/email/ | 
*SendPostApi.SubaccounteventApi* | [**eventRouterCountAllEventsFromANodeOfASubAccountForAGivenTimeRange**](docs/SubaccounteventApi.md#eventRouterCountAllEventsFromANodeOfASubAccountForAGivenTimeRange) | **GET** /subaccount/event/node/{subAccountId}/count | 
*SendPostApi.SubaccounteventApi* | [**eventRouterCountAllEventsFromASubAccountForAGivenTimeRange**](docs/SubaccounteventApi.md#eventRouterCountAllEventsFromASubAccountForAGivenTimeRange) | **GET** /subaccount/event/count | 
*SendPostApi.SubaccounteventApi* | [**eventRouterGet**](docs/SubaccounteventApi.md#eventRouterGet) | **GET** /subaccount/event/{eventId} | 
*SendPostApi.SubaccounteventApi* | [**eventRouterGetAllEventTimestampKeysOfASubAccountFromASpecificNodeForAGivenTimeRange**](docs/SubaccounteventApi.md#eventRouterGetAllEventTimestampKeysOfASubAccountFromASpecificNodeForAGivenTimeRange) | **GET** /subaccount/event/node/{subAccountId}/timestampkeys | 
*SendPostApi.SubaccounteventApi* | [**eventRouterGetAllEventsFromASubAccountForAGivenTimeRange**](docs/SubaccounteventApi.md#eventRouterGetAllEventsFromASubAccountForAGivenTimeRange) | **GET** /subaccount/event/ | 
*SendPostApi.SubaccounteventApi* | [**eventRouterGetAllEventsOfASubAccountFromASpecificNodeForAGivenTimeRange**](docs/SubaccounteventApi.md#eventRouterGetAllEventsOfASubAccountFromASpecificNodeForAGivenTimeRange) | **POST** /subaccount/event/node/{subAccountId} | 
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
*SendPostApi.SubaccountmessageApi* | [**messageRouterGetAllMessagesFromANode**](docs/SubaccountmessageApi.md#messageRouterGetAllMessagesFromANode) | **POST** /subaccount/message/node/{subAccountId} | 
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
*SendPostApi.SubaccountstatApi* | [**subAccountStatRouterGetAllAggregatedGroupStatsForASubAccount**](docs/SubaccountstatApi.md#subAccountStatRouterGetAllAggregatedGroupStatsForASubAccount) | **GET** /subaccount/stat/aggregate/groups | 
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
*SendPostApi.TrackApi* | [**trackRouterTrackEmailOpen**](docs/TrackApi.md#trackRouterTrackEmailOpen) | **GET** /track/open/{subAccountId}/{ipId}/{emailType}/{messageId}/1.png | 
*SendPostApi.TrackApi* | [**trackRouterTrackLinkClick**](docs/TrackApi.md#trackRouterTrackLinkClick) | **GET** /track/click/{subAccountId}/{ipId}/{emailType}/{messageId} | 
*SendPostApi.TrackApi* | [**trackRouterTrackUnsubscribe**](docs/TrackApi.md#trackRouterTrackUnsubscribe) | **GET** /track/unsubscribe/{subAccountId}/{messageId} | 


## Documentation for Models

 - [SendPostApi.ApiBulkResponse](docs/ApiBulkResponse.md)
 - [SendPostApi.ModelsAGStat](docs/ModelsAGStat.md)
 - [SendPostApi.ModelsAIPStat](docs/ModelsAIPStat.md)
 - [SendPostApi.ModelsAccount](docs/ModelsAccount.md)
 - [SendPostApi.ModelsAccountIPPool](docs/ModelsAccountIPPool.md)
 - [SendPostApi.ModelsAccountWebhook](docs/ModelsAccountWebhook.md)
 - [SendPostApi.ModelsAuthInfo](docs/ModelsAuthInfo.md)
 - [SendPostApi.ModelsBackOffConfiguration](docs/ModelsBackOffConfiguration.md)
 - [SendPostApi.ModelsBackOffDecreaseType](docs/ModelsBackOffDecreaseType.md)
 - [SendPostApi.ModelsBackOffTrigger](docs/ModelsBackOffTrigger.md)
 - [SendPostApi.ModelsBlacklistStatus](docs/ModelsBlacklistStatus.md)
 - [SendPostApi.ModelsCity](docs/ModelsCity.md)
 - [SendPostApi.ModelsCleanedList](docs/ModelsCleanedList.md)
 - [SendPostApi.ModelsCountStat](docs/ModelsCountStat.md)
 - [SendPostApi.ModelsDNSRecord](docs/ModelsDNSRecord.md)
 - [SendPostApi.ModelsDeleteResponse](docs/ModelsDeleteResponse.md)
 - [SendPostApi.ModelsDomain](docs/ModelsDomain.md)
 - [SendPostApi.ModelsEAccount](docs/ModelsEAccount.md)
 - [SendPostApi.ModelsEDomain](docs/ModelsEDomain.md)
 - [SendPostApi.ModelsEIP](docs/ModelsEIP.md)
 - [SendPostApi.ModelsEIPPool](docs/ModelsEIPPool.md)
 - [SendPostApi.ModelsEIntegration](docs/ModelsEIntegration.md)
 - [SendPostApi.ModelsESender](docs/ModelsESender.md)
 - [SendPostApi.ModelsESubAccount](docs/ModelsESubAccount.md)
 - [SendPostApi.ModelsEWebhook](docs/ModelsEWebhook.md)
 - [SendPostApi.ModelsEmailErrorCode](docs/ModelsEmailErrorCode.md)
 - [SendPostApi.ModelsEmailList](docs/ModelsEmailList.md)
 - [SendPostApi.ModelsEmailMessage](docs/ModelsEmailMessage.md)
 - [SendPostApi.ModelsEmailResponse](docs/ModelsEmailResponse.md)
 - [SendPostApi.ModelsEventMetadata](docs/ModelsEventMetadata.md)
 - [SendPostApi.ModelsEventType](docs/ModelsEventType.md)
 - [SendPostApi.ModelsFrequencyType](docs/ModelsFrequencyType.md)
 - [SendPostApi.ModelsFrom](docs/ModelsFrom.md)
 - [SendPostApi.ModelsGlockappsBlacklist](docs/ModelsGlockappsBlacklist.md)
 - [SendPostApi.ModelsGlockappsMonitorStat](docs/ModelsGlockappsMonitorStat.md)
 - [SendPostApi.ModelsIIP](docs/ModelsIIP.md)
 - [SendPostApi.ModelsIP](docs/ModelsIP.md)
 - [SendPostApi.ModelsIPPool](docs/ModelsIPPool.md)
 - [SendPostApi.ModelsIPPoolType](docs/ModelsIPPoolType.md)
 - [SendPostApi.ModelsIPStat](docs/ModelsIPStat.md)
 - [SendPostApi.ModelsIPType](docs/ModelsIPType.md)
 - [SendPostApi.ModelsInstance](docs/ModelsInstance.md)
 - [SendPostApi.ModelsIntegration](docs/ModelsIntegration.md)
 - [SendPostApi.ModelsIntegrationSettings](docs/ModelsIntegrationSettings.md)
 - [SendPostApi.ModelsIntegrationType](docs/ModelsIntegrationType.md)
 - [SendPostApi.ModelsMember](docs/ModelsMember.md)
 - [SendPostApi.ModelsPIPStat](docs/ModelsPIPStat.md)
 - [SendPostApi.ModelsQEmailMessage](docs/ModelsQEmailMessage.md)
 - [SendPostApi.ModelsQEvent](docs/ModelsQEvent.md)
 - [SendPostApi.ModelsRDSuppression](docs/ModelsRDSuppression.md)
 - [SendPostApi.ModelsRGlockappsMonitorStat](docs/ModelsRGlockappsMonitorStat.md)
 - [SendPostApi.ModelsRIPStat](docs/ModelsRIPStat.md)
 - [SendPostApi.ModelsRStat](docs/ModelsRStat.md)
 - [SendPostApi.ModelsRSuppression](docs/ModelsRSuppression.md)
 - [SendPostApi.ModelsReplyTo](docs/ModelsReplyTo.md)
 - [SendPostApi.ModelsResponse](docs/ModelsResponse.md)
 - [SendPostApi.ModelsSIPStat](docs/ModelsSIPStat.md)
 - [SendPostApi.ModelsSMTPStat](docs/ModelsSMTPStat.md)
 - [SendPostApi.ModelsSender](docs/ModelsSender.md)
 - [SendPostApi.ModelsSingleCleanedMail](docs/ModelsSingleCleanedMail.md)
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
 - [SendPostApi.UaparserDevice](docs/UaparserDevice.md)
 - [SendPostApi.UaparserOs](docs/UaparserOs.md)
 - [SendPostApi.UaparserUserAgent](docs/UaparserUserAgent.md)


## Documentation for Authorization

 All endpoints do not require authorization.

