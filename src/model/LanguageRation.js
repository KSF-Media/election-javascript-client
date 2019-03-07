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
    root.Election.LanguageRation = factory(root.Election.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';


  /**
   * Enum class LanguageRation.
   * @enum {}
   * @readonly
   */
  var exports = {
    /**
     * value: "FI"
     * @const
     */
    "FI": "FI",
    /**
     * value: "SV"
     * @const
     */
    "SV": "SV",
    /**
     * value: "FI_SV"
     * @const
     */
    "FI_SV": "FI_SV",
    /**
     * value: "SV_FI"
     * @const
     */
    "SV_FI": "SV_FI"  };

  /**
   * Returns a <code>LanguageRation</code> enum value from a Javascript object name.
   * @param {Object} data The plain JavaScript object containing the name of the enum value.
   * @return {module:model/LanguageRation} The enum <code>LanguageRation</code> value.
   */
  exports.constructFromObject = function(object) {
    return object;
  }

  return exports;
}));

