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
    instance = new Election.Candidate();
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

  describe('Candidate', function() {
    it('should create an instance of Candidate', function() {
      // uncomment below and update the code to test Candidate
      //var instane = new Election.Candidate();
      //expect(instance).to.be.a(Election.Candidate);
    });

    it('should have the property status (base name: "status")', function() {
      // uncomment below and update the code to test the property status
      //var instane = new Election.Candidate();
      //expect(instance).to.be();
    });

    it('should have the property membership (base name: "membership")', function() {
      // uncomment below and update the code to test the property membership
      //var instane = new Election.Candidate();
      //expect(instance).to.be();
    });

    it('should have the property lastName (base name: "lastName")', function() {
      // uncomment below and update the code to test the property lastName
      //var instane = new Election.Candidate();
      //expect(instance).to.be();
    });

    it('should have the property age (base name: "age")', function() {
      // uncomment below and update the code to test the property age
      //var instane = new Election.Candidate();
      //expect(instance).to.be();
    });

    it('should have the property comparativeIndex (base name: "comparativeIndex")', function() {
      // uncomment below and update the code to test the property comparativeIndex
      //var instane = new Election.Candidate();
      //expect(instance).to.be();
    });

    it('should have the property votes (base name: "votes")', function() {
      // uncomment below and update the code to test the property votes
      //var instane = new Election.Candidate();
      //expect(instance).to.be();
    });

    it('should have the property candidateNumber (base name: "candidateNumber")', function() {
      // uncomment below and update the code to test the property candidateNumber
      //var instane = new Election.Candidate();
      //expect(instance).to.be();
    });

    it('should have the property homeMunicipalityCode (base name: "homeMunicipalityCode")', function() {
      // uncomment below and update the code to test the property homeMunicipalityCode
      //var instane = new Election.Candidate();
      //expect(instance).to.be();
    });

    it('should have the property homeMunicipalityName (base name: "homeMunicipalityName")', function() {
      // uncomment below and update the code to test the property homeMunicipalityName
      //var instane = new Election.Candidate();
      //expect(instance).to.be();
    });

    it('should have the property gender (base name: "gender")', function() {
      // uncomment below and update the code to test the property gender
      //var instane = new Election.Candidate();
      //expect(instance).to.be();
    });

    it('should have the property occupation (base name: "occupation")', function() {
      // uncomment below and update the code to test the property occupation
      //var instane = new Election.Candidate();
      //expect(instance).to.be();
    });

    it('should have the property language (base name: "language")', function() {
      // uncomment below and update the code to test the property language
      //var instane = new Election.Candidate();
      //expect(instance).to.be();
    });

    it('should have the property firstName (base name: "firstName")', function() {
      // uncomment below and update the code to test the property firstName
      //var instane = new Election.Candidate();
      //expect(instance).to.be();
    });

    it('should have the property finalPosition (base name: "finalPosition")', function() {
      // uncomment below and update the code to test the property finalPosition
      //var instane = new Election.Candidate();
      //expect(instance).to.be();
    });

    it('should have the property position (base name: "position")', function() {
      // uncomment below and update the code to test the property position
      //var instane = new Election.Candidate();
      //expect(instance).to.be();
    });

  });

}));
