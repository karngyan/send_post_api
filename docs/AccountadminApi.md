# SendPostApi.AccountadminApi

All URIs are relative to *http://127.0.0.1:8081/api/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**accountAdminRouterAssumeAccountGetToken**](AccountadminApi.md#accountAdminRouterAssumeAccountGetToken) | **GET** /account/admin/assume | 


<a name="accountAdminRouterAssumeAccountGetToken"></a>
# **accountAdminRouterAssumeAccountGetToken**
> ModelsRAssumeAccount accountAdminRouterAssumeAccountGetToken(xAccountApiKey, email, opts)



Responds back with a custom token for frontend to start login using firebase sdk

### Example
```javascript
var SendPostApi = require('send_post_api');

var apiInstance = new SendPostApi.AccountadminApi();

var xAccountApiKey = "xAccountApiKey_example"; // String | Account API Key

var email = "email_example"; // String | email

var opts = { 
  'uid': "uid_example" // String | firebase uid if you have
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.accountAdminRouterAssumeAccountGetToken(xAccountApiKey, email, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **xAccountApiKey** | **String**| Account API Key | 
 **email** | **String**| email | 
 **uid** | **String**| firebase uid if you have | [optional] 

### Return type

[**ModelsRAssumeAccount**](ModelsRAssumeAccount.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

