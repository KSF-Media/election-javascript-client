/**
 * Election
 * KSF Media's election service
 *
 * OpenAPI spec version: 1.0.0
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 *
 * OpenAPI Generator version: 4.0.0-SNAPSHOT
 *
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD.
    define(['expect.js', '../../src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require('../../src/index'));
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
      //var instance = new Election.AreaResponse();
      //expect(instance).to.be.a(Election.AreaResponse);
    });

    it('should have the property area (base name: "area")', function() {
      // uncomment below and update the code to test the property area
      //var instance = new Election.AreaResponse();
      //expect(instance).to.be();
    });

    it('should have the property nominatorCount (base name: "nominatorCount")', function() {
      // uncomment below and update the code to test the property nominatorCount
      //var instance = new Election.AreaResponse();
      //expect(instance).to.be();
    });

    it('should have the property candidateCount (base name: "candidateCount")', function() {
      // uncomment below and update the code to test the property candidateCount
      //var instance = new Election.AreaResponse();
      //expect(instance).to.be();
    });

    it('should have the property nominators (base name: "nominators")', function() {
      // uncomment below and update the code to test the property nominators
      //var instance = new Election.AreaResponse();
      //expect(instance).to.be();
    });

    it('should have the property timestamp (base name: "timestamp")', function() {
      // uncomment below and update the code to test the property timestamp
      //var instance = new Election.AreaResponse();
      //expect(instance).to.be();
    });

  });

}));
