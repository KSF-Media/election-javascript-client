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
    instance = new Election.AreaInfo();
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

  describe('AreaInfo', function() {
    it('should create an instance of AreaInfo', function() {
      // uncomment below and update the code to test AreaInfo
      //var instane = new Election.AreaInfo();
      //expect(instance).to.be.a(Election.AreaInfo);
    });

    it('should have the property calculationStatus (base name: "calculationStatus")', function() {
      // uncomment below and update the code to test the property calculationStatus
      //var instane = new Election.AreaInfo();
      //expect(instance).to.be();
    });

    it('should have the property identifier (base name: "identifier")', function() {
      // uncomment below and update the code to test the property identifier
      //var instane = new Election.AreaInfo();
      //expect(instance).to.be();
    });

    it('should have the property joinedArea (base name: "joinedArea")', function() {
      // uncomment below and update the code to test the property joinedArea
      //var instane = new Election.AreaInfo();
      //expect(instance).to.be();
    });

    it('should have the property abbreviation (base name: "abbreviation")', function() {
      // uncomment below and update the code to test the property abbreviation
      //var instane = new Election.AreaInfo();
      //expect(instance).to.be();
    });

    it('should have the property municipalityType (base name: "municipalityType")', function() {
      // uncomment below and update the code to test the property municipalityType
      //var instane = new Election.AreaInfo();
      //expect(instance).to.be();
    });

    it('should have the property name (base name: "name")', function() {
      // uncomment below and update the code to test the property name
      //var instane = new Election.AreaInfo();
      //expect(instance).to.be();
    });

    it('should have the property areaType (base name: "areaType")', function() {
      // uncomment below and update the code to test the property areaType
      //var instane = new Election.AreaInfo();
      //expect(instance).to.be();
    });

    it('should have the property languageRation (base name: "languageRation")', function() {
      // uncomment below and update the code to test the property languageRation
      //var instane = new Election.AreaInfo();
      //expect(instance).to.be();
    });

    it('should have the property numberOfPollingDistricts (base name: "numberOfPollingDistricts")', function() {
      // uncomment below and update the code to test the property numberOfPollingDistricts
      //var instane = new Election.AreaInfo();
      //expect(instance).to.be();
    });

  });

}));
