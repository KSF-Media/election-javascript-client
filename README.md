# election

Election - JavaScript client for election
KSF Media's election service
This SDK is automatically generated by the [OpenAPI Generator](https://openapi-generator.tech) project:

- API version: 1.0.0
- Package version: 1.0.0
- Build package: org.openapitools.codegen.languages.JavascriptClientCodegen

## Installation

### For [Node.js](https://nodejs.org/)

#### npm

To publish the library as a [npm](https://www.npmjs.com/), please follow the procedure in ["Publishing npm packages"](https://docs.npmjs.com/getting-started/publishing-npm-packages).

Then install it via:

```shell
npm install election --save
```

Finaly, you need to build the module:

```shell
npm run build
```

##### Local development

To use the library locally without publishing to a remote npm registry, first install the dependencies by changing into the directory containing `package.json` (and this README). Let's call this `JAVASCRIPT_CLIENT_DIR`. Then run:

```shell
npm install
```

Next, [link](https://docs.npmjs.com/cli/link) it globally in npm with the following, also from `JAVASCRIPT_CLIENT_DIR`:

```shell
npm link
```

To use the link you just defined in your project, switch to the directory you want to use your election from, and run:

```shell
npm link /path/to/<JAVASCRIPT_CLIENT_DIR>
```

Finaly, you need to build the module:

```shell
npm run build
```

#### git

If the library is hosted at a git repository, e.g.https://github.com/KSF-Media/election-javascript-client
then install it via:

```shell
    npm install KSF-Media/election-javascript-client --save
```

### For browser

The library also works in the browser environment via npm and [browserify](http://browserify.org/). After following
the above steps with Node.js and installing browserify with `npm install -g browserify`,
perform the following (assuming *main.js* is your entry file):

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
var Election = require('election');


var api = new Election.DefaultApi()
var opts = {
  'type': ["null"], // {[String]} 
  'parent': ["null"] // {[String]} 
};
api.areasGet(opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});


```

## Documentation for API Endpoints

All URIs are relative to *http://http:/v1*

Class | Method | HTTP request | Description
------------ | ------------- | ------------- | -------------
*Election.DefaultApi* | [**areasGet**](docs/DefaultApi.md#areasGet) | **GET** /areas | 
*Election.DefaultApi* | [**areasIdentifierGet**](docs/DefaultApi.md#areasIdentifierGet) | **GET** /areas/{identifier} | 


## Documentation for Models

 - [Election.Area](docs/Area.md)
 - [Election.AreaInfo](docs/AreaInfo.md)
 - [Election.AreaResponse](docs/AreaResponse.md)
 - [Election.AreaType](docs/AreaType.md)
 - [Election.AreasResponse](docs/AreasResponse.md)
 - [Election.Candidate](docs/Candidate.md)
 - [Election.CandidateMembership](docs/CandidateMembership.md)
 - [Election.Gender](docs/Gender.md)
 - [Election.I18N](docs/I18N.md)
 - [Election.Language](docs/Language.md)
 - [Election.LanguageRation](docs/LanguageRation.md)
 - [Election.MunicipalityType](docs/MunicipalityType.md)
 - [Election.Nominator](docs/Nominator.md)
 - [Election.Status](docs/Status.md)
 - [Election.Votes](docs/Votes.md)


## Documentation for Authorization

All endpoints do not require authorization.
