/**
 * Election
 * KSF Media's election service
 *
 * The version of the OpenAPI document: 1.0.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD.
    define(['expect.js', process.cwd()+'/src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require(process.cwd()+'/src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.Election);
  }
}(this, function(expect, Election) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new Election.AreaResponse();
  });

  var getProperty = function(object, getter, property) {
    // Use getter method if present; otherwise, get the property directly.
    if (typeof object[getter] === 'function')
      return object[getter]();
    else
      return object[property];
  }

  var setProperty = function(object, setter, property, value) {
    // Use setter method if present; otherwise, set the property directly.
    if (typeof object[setter] === 'function')
      object[setter](value);
    else
      object[property] = value;
  }

  describe('AreaResponse', function() {
    it('should create an instance of AreaResponse', function() {
      // uncomment below and update the code to test AreaResponse
      //var instane = new Election.AreaResponse();
      //expect(instance).to.be.a(Election.AreaResponse);
    });

    it('should have the property area (base name: "area")', function() {
      // uncomment below and update the code to test the property area
      //var instane = new Election.AreaResponse();
      //expect(instance).to.be();
    });

    it('should have the property nominatorCount (base name: "nominatorCount")', function() {
      // uncomment below and update the code to test the property nominatorCount
      //var instane = new Election.AreaResponse();
      //expect(instance).to.be();
    });

    it('should have the property candidateCount (base name: "candidateCount")', function() {
      // uncomment below and update the code to test the property candidateCount
      //var instane = new Election.AreaResponse();
      //expect(instance).to.be();
    });

    it('should have the property nominators (base name: "nominators")', function() {
      // uncomment below and update the code to test the property nominators
      //var instane = new Election.AreaResponse();
      //expect(instance).to.be();
    });

    it('should have the property timestamp (base name: "timestamp")', function() {
      // uncomment below and update the code to test the property timestamp
      //var instane = new Election.AreaResponse();
      //expect(instance).to.be();
    });

  });

}));
