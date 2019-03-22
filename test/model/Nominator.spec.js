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
    instance = new Election.Nominator();
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

  describe('Nominator', function() {
    it('should create an instance of Nominator', function() {
      // uncomment below and update the code to test Nominator
      //var instance = new Election.Nominator();
      //expect(instance).to.be.a(Election.Nominator);
    });

    it('should have the property partyIdentifier (base name: "partyIdentifier")', function() {
      // uncomment below and update the code to test the property partyIdentifier
      //var instance = new Election.Nominator();
      //expect(instance).to.be();
    });

    it('should have the property nominatorNumber (base name: "nominatorNumber")', function() {
      // uncomment below and update the code to test the property nominatorNumber
      //var instance = new Election.Nominator();
      //expect(instance).to.be();
    });

    it('should have the property votes (base name: "votes")', function() {
      // uncomment below and update the code to test the property votes
      //var instance = new Election.Nominator();
      //expect(instance).to.be();
    });

    it('should have the property abbreviation (base name: "abbreviation")', function() {
      // uncomment below and update the code to test the property abbreviation
      //var instance = new Election.Nominator();
      //expect(instance).to.be();
    });

    it('should have the property name (base name: "name")', function() {
      // uncomment below and update the code to test the property name
      //var instance = new Election.Nominator();
      //expect(instance).to.be();
    });

    it('should have the property electoralAllianceName (base name: "electoralAllianceName")', function() {
      // uncomment below and update the code to test the property electoralAllianceName
      //var instance = new Election.Nominator();
      //expect(instance).to.be();
    });

    it('should have the property seats (base name: "seats")', function() {
      // uncomment below and update the code to test the property seats
      //var instance = new Election.Nominator();
      //expect(instance).to.be();
    });

    it('should have the property standardPartyNumber (base name: "standardPartyNumber")', function() {
      // uncomment below and update the code to test the property standardPartyNumber
      //var instance = new Election.Nominator();
      //expect(instance).to.be();
    });

    it('should have the property candidates (base name: "candidates")', function() {
      // uncomment below and update the code to test the property candidates
      //var instance = new Election.Nominator();
      //expect(instance).to.be();
    });

    it('should have the property electoralAllianceNumber (base name: "electoralAllianceNumber")', function() {
      // uncomment below and update the code to test the property electoralAllianceNumber
      //var instance = new Election.Nominator();
      //expect(instance).to.be();
    });

  });

}));
