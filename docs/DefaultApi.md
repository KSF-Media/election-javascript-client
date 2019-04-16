# Election.DefaultApi

All URIs are relative to *http://http:/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**areasGet**](DefaultApi.md#areasGet) | **GET** /areas | 
[**areasIdentifierGet**](DefaultApi.md#areasIdentifierGet) | **GET** /areas/{identifier} | 



## areasGet

> AreasResponse areasGet(opts)



Gets all areas. Areas can be filtered by &#x60;type&#x60; and &#x60;parent&#x60;.

### Example

```javascript
import Election from 'election';

let apiInstance = new Election.DefaultApi();
let opts = {
  'type': ["null"], // [String] | 
  'parent': ["null"] // [String] | 
};
apiInstance.areasGet(opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **type** | [**[String]**](String.md)|  | [optional] 
 **parent** | [**[String]**](String.md)|  | [optional] 

### Return type

[**AreasResponse**](AreasResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: text/plain;charset=utf-8, application/json;charset=utf-8


## areasIdentifierGet

> AreaResponse areasIdentifierGet(identifier, opts)



### Example

```javascript
import Election from 'election';

let apiInstance = new Election.DefaultApi();
let identifier = "identifier_example"; // String | 
let opts = {
  'candidateStatus': ["null"] // [String] | 
};
apiInstance.areasIdentifierGet(identifier, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **identifier** | **String**|  | 
 **candidateStatus** | [**[String]**](String.md)|  | [optional] 

### Return type

[**AreaResponse**](AreaResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: text/plain;charset=utf-8, application/json;charset=utf-8

