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
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/Area', 'model/Nominator'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./Area'), require('./Nominator'));
  } else {
    // Browser globals (root is window)
    if (!root.Election) {
      root.Election = {};
    }
    root.Election.AreaResponse = factory(root.Election.ApiClient, root.Election.Area, root.Election.Nominator);
  }
}(this, function(ApiClient, Area, Nominator) {
  'use strict';



  /**
   * The AreaResponse model module.
   * @module model/AreaResponse
   * @version 1.0.0
   */

  /**
   * Constructs a new <code>AreaResponse</code>.
   * @alias module:model/AreaResponse
   * @class
   * @param area {module:model/Area} 
   * @param nominators {Array.<module:model/Nominator>} 
   * @param nominatorCount {Number} 
   * @param candidateCount {Number} 
   */
  var exports = function(area, nominators, nominatorCount, candidateCount) {
    var _this = this;

    _this['area'] = area;
    _this['nominators'] = nominators;
    _this['nominatorCount'] = nominatorCount;
    _this['candidateCount'] = candidateCount;
  };

  /**
   * Constructs a <code>AreaResponse</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/AreaResponse} obj Optional instance to populate.
   * @return {module:model/AreaResponse} The populated <code>AreaResponse</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('area')) {
        obj['area'] = Area.constructFromObject(data['area']);
      }
      if (data.hasOwnProperty('nominators')) {
        obj['nominators'] = ApiClient.convertToType(data['nominators'], [Nominator]);
      }
      if (data.hasOwnProperty('nominatorCount')) {
        obj['nominatorCount'] = ApiClient.convertToType(data['nominatorCount'], 'Number');
      }
      if (data.hasOwnProperty('candidateCount')) {
        obj['candidateCount'] = ApiClient.convertToType(data['candidateCount'], 'Number');
      }
    }
    return obj;
  }

  /**
   * @member {module:model/Area} area
   */
  exports.prototype['area'] = undefined;
  /**
   * @member {Array.<module:model/Nominator>} nominators
   */
  exports.prototype['nominators'] = undefined;
  /**
   * @member {Number} nominatorCount
   */
  exports.prototype['nominatorCount'] = undefined;
  /**
   * @member {Number} candidateCount
   */
  exports.prototype['candidateCount'] = undefined;



  return exports;
}));

