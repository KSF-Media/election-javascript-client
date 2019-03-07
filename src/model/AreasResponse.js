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
    define(['ApiClient', 'model/Area'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./Area'));
  } else {
    // Browser globals (root is window)
    if (!root.Election) {
      root.Election = {};
    }
    root.Election.AreasResponse = factory(root.Election.ApiClient, root.Election.Area);
  }
}(this, function(ApiClient, Area) {
  'use strict';



  /**
   * The AreasResponse model module.
   * @module model/AreasResponse
   * @version 1.0.0
   */

  /**
   * Constructs a new <code>AreasResponse</code>.
   * @alias module:model/AreasResponse
   * @class
   * @param areas {Array.<module:model/Area>} 
   */
  var exports = function(areas) {
    var _this = this;

    _this['areas'] = areas;
  };

  /**
   * Constructs a <code>AreasResponse</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/AreasResponse} obj Optional instance to populate.
   * @return {module:model/AreasResponse} The populated <code>AreasResponse</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('areas')) {
        obj['areas'] = ApiClient.convertToType(data['areas'], [Area]);
      }
    }
    return obj;
  }

  /**
   * @member {Array.<module:model/Area>} areas
   */
  exports.prototype['areas'] = undefined;



  return exports;
}));


