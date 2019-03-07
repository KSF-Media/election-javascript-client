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
    define(['ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.Election) {
      root.Election = {};
    }
    root.Election.MunicipalityType = factory(root.Election.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';


  /**
   * Enum class MunicipalityType.
   * @enum {}
   * @readonly
   */
  var exports = {
    /**
     * value: "CITY"
     * @const
     */
    "CITY": "CITY",
    /**
     * value: "OTHER"
     * @const
     */
    "OTHER": "OTHER"  };

  /**
   * Returns a <code>MunicipalityType</code> enum value from a Javascript object name.
   * @param {Object} data The plain JavaScript object containing the name of the enum value.
   * @return {module:model/MunicipalityType} The enum <code>MunicipalityType</code> value.
   */
  exports.constructFromObject = function(object) {
    return object;
  }

  return exports;
}));


