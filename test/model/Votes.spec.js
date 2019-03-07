/**
 * Election
 * KSF Media's articles service
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
    instance = new Election.Votes();
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

  describe('Votes', function() {
    it('should create an instance of Votes', function() {
      // uncomment below and update the code to test Votes
      //var instance = new Election.Votes();
      //expect(instance).to.be.a(Election.Votes);
    });

    it('should have the property advanceVotes (base name: "advanceVotes")', function() {
      // uncomment below and update the code to test the property advanceVotes
      //var instance = new Election.Votes();
      //expect(instance).to.be();
    });

    it('should have the property electionDayVotes (base name: "electionDayVotes")', function() {
      // uncomment below and update the code to test the property electionDayVotes
      //var instance = new Election.Votes();
      //expect(instance).to.be();
    });

    it('should have the property totalVotes (base name: "totalVotes")', function() {
      // uncomment below and update the code to test the property totalVotes
      //var instance = new Election.Votes();
      //expect(instance).to.be();
    });

    it('should have the property advancePercent (base name: "advancePercent")', function() {
      // uncomment below and update the code to test the property advancePercent
      //var instance = new Election.Votes();
      //expect(instance).to.be();
    });

    it('should have the property electionDayPercent (base name: "electionDayPercent")', function() {
      // uncomment below and update the code to test the property electionDayPercent
      //var instance = new Election.Votes();
      //expect(instance).to.be();
    });

    it('should have the property totalPercent (base name: "totalPercent")', function() {
      // uncomment below and update the code to test the property totalPercent
      //var instance = new Election.Votes();
      //expect(instance).to.be();
    });

  });

}));