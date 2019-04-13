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
    define(['ApiClient', 'model/AreaType', 'model/I18N', 'model/LanguageRation', 'model/MunicipalityType'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./AreaType'), require('./I18N'), require('./LanguageRation'), require('./MunicipalityType'));
  } else {
    // Browser globals (root is window)
    if (!root.Election) {
      root.Election = {};
    }
    root.Election.AreaInfo = factory(root.Election.ApiClient, root.Election.AreaType, root.Election.I18N, root.Election.LanguageRation, root.Election.MunicipalityType);
  }
}(this, function(ApiClient, AreaType, I18N, LanguageRation, MunicipalityType) {
  'use strict';



  /**
   * The AreaInfo model module.
   * @module model/AreaInfo
   * @version 1.0.0
   */

  /**
   * Constructs a new <code>AreaInfo</code>.
   * @alias module:model/AreaInfo
   * @class
   * @param identifier {String} 
   * @param abbreviation {module:model/I18N} 
   * @param areaType {module:model/AreaType} 
   */
  var exports = function(identifier, abbreviation, areaType) {
    var _this = this;

    _this['identifier'] = identifier;
    _this['abbreviation'] = abbreviation;
    _this['areaType'] = areaType;
  };

  /**
   * Constructs a <code>AreaInfo</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/AreaInfo} obj Optional instance to populate.
   * @return {module:model/AreaInfo} The populated <code>AreaInfo</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('calculationStatus')) {
        obj['calculationStatus'] = ApiClient.convertToType(data['calculationStatus'], 'Number');
      }
      if (data.hasOwnProperty('identifier')) {
        obj['identifier'] = ApiClient.convertToType(data['identifier'], 'String');
      }
      if (data.hasOwnProperty('joinedArea')) {
        obj['joinedArea'] = ApiClient.convertToType(data['joinedArea'], 'Boolean');
      }
      if (data.hasOwnProperty('abbreviation')) {
        obj['abbreviation'] = I18N.constructFromObject(data['abbreviation']);
      }
      if (data.hasOwnProperty('municipalityType')) {
        obj['municipalityType'] = MunicipalityType.constructFromObject(data['municipalityType']);
      }
      if (data.hasOwnProperty('name')) {
        obj['name'] = I18N.constructFromObject(data['name']);
      }
      if (data.hasOwnProperty('areaType')) {
        obj['areaType'] = AreaType.constructFromObject(data['areaType']);
      }
      if (data.hasOwnProperty('languageRation')) {
        obj['languageRation'] = LanguageRation.constructFromObject(data['languageRation']);
      }
      if (data.hasOwnProperty('numberOfPollingDistricts')) {
        obj['numberOfPollingDistricts'] = ApiClient.convertToType(data['numberOfPollingDistricts'], 'Number');
      }
    }
    return obj;
  }

  /**
   * @member {Number} calculationStatus
   */
  exports.prototype['calculationStatus'] = undefined;
  /**
   * @member {String} identifier
   */
  exports.prototype['identifier'] = undefined;
  /**
   * @member {Boolean} joinedArea
   */
  exports.prototype['joinedArea'] = undefined;
  /**
   * @member {module:model/I18N} abbreviation
   */
  exports.prototype['abbreviation'] = undefined;
  /**
   * @member {module:model/MunicipalityType} municipalityType
   */
  exports.prototype['municipalityType'] = undefined;
  /**
   * @member {module:model/I18N} name
   */
  exports.prototype['name'] = undefined;
  /**
   * @member {module:model/AreaType} areaType
   */
  exports.prototype['areaType'] = undefined;
  /**
   * @member {module:model/LanguageRation} languageRation
   */
  exports.prototype['languageRation'] = undefined;
  /**
   * @member {Number} numberOfPollingDistricts
   */
  exports.prototype['numberOfPollingDistricts'] = undefined;



  return exports;
}));


