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
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/Candidate', 'model/I18N', 'model/Votes'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./Candidate'), require('./I18N'), require('./Votes'));
  } else {
    // Browser globals (root is window)
    if (!root.Election) {
      root.Election = {};
    }
    root.Election.Nominator = factory(root.Election.ApiClient, root.Election.Candidate, root.Election.I18N, root.Election.Votes);
  }
}(this, function(ApiClient, Candidate, I18N, Votes) {
  'use strict';



  /**
   * The Nominator model module.
   * @module model/Nominator
   * @version 1.0.0
   */

  /**
   * Constructs a new <code>Nominator</code>.
   * @alias module:model/Nominator
   * @class
   */
  var exports = function() {
    var _this = this;

  };

  /**
   * Constructs a <code>Nominator</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Nominator} obj Optional instance to populate.
   * @return {module:model/Nominator} The populated <code>Nominator</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('partyIdentifier')) {
        obj['partyIdentifier'] = ApiClient.convertToType(data['partyIdentifier'], 'String');
      }
      if (data.hasOwnProperty('nominatorNumber')) {
        obj['nominatorNumber'] = ApiClient.convertToType(data['nominatorNumber'], 'Number');
      }
      if (data.hasOwnProperty('votes')) {
        obj['votes'] = Votes.constructFromObject(data['votes']);
      }
      if (data.hasOwnProperty('abbreviation')) {
        obj['abbreviation'] = I18N.constructFromObject(data['abbreviation']);
      }
      if (data.hasOwnProperty('name')) {
        obj['name'] = I18N.constructFromObject(data['name']);
      }
      if (data.hasOwnProperty('electoralAllianceName')) {
        obj['electoralAllianceName'] = I18N.constructFromObject(data['electoralAllianceName']);
      }
      if (data.hasOwnProperty('seats')) {
        obj['seats'] = ApiClient.convertToType(data['seats'], 'Number');
      }
      if (data.hasOwnProperty('standardPartyNumber')) {
        obj['standardPartyNumber'] = ApiClient.convertToType(data['standardPartyNumber'], 'Number');
      }
      if (data.hasOwnProperty('candidates')) {
        obj['candidates'] = ApiClient.convertToType(data['candidates'], [Candidate]);
      }
      if (data.hasOwnProperty('electoralAllianceNumber')) {
        obj['electoralAllianceNumber'] = ApiClient.convertToType(data['electoralAllianceNumber'], 'Number');
      }
    }
    return obj;
  }

  /**
   * @member {String} partyIdentifier
   */
  exports.prototype['partyIdentifier'] = undefined;
  /**
   * @member {Number} nominatorNumber
   */
  exports.prototype['nominatorNumber'] = undefined;
  /**
   * @member {module:model/Votes} votes
   */
  exports.prototype['votes'] = undefined;
  /**
   * @member {module:model/I18N} abbreviation
   */
  exports.prototype['abbreviation'] = undefined;
  /**
   * @member {module:model/I18N} name
   */
  exports.prototype['name'] = undefined;
  /**
   * @member {module:model/I18N} electoralAllianceName
   */
  exports.prototype['electoralAllianceName'] = undefined;
  /**
   * @member {Number} seats
   */
  exports.prototype['seats'] = undefined;
  /**
   * @member {Number} standardPartyNumber
   */
  exports.prototype['standardPartyNumber'] = undefined;
  /**
   * @member {Array.<module:model/Candidate>} candidates
   */
  exports.prototype['candidates'] = undefined;
  /**
   * @member {Number} electoralAllianceNumber
   */
  exports.prototype['electoralAllianceNumber'] = undefined;



  return exports;
}));


