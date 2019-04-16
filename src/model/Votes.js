/**
 * Election
 * KSF Media's election service
 *
 * OpenAPI spec version: 1.0.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';

/**
 * The Votes model module.
 * @module model/Votes
 * @version 1.0.0
 */
class Votes {
    /**
     * Constructs a new <code>Votes</code>.
     * @alias module:model/Votes
     */
    constructor() { 
        
        Votes.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>Votes</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Votes} obj Optional instance to populate.
     * @return {module:model/Votes} The populated <code>Votes</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Votes();

            if (data.hasOwnProperty('advanceVotes')) {
                obj['advanceVotes'] = ApiClient.convertToType(data['advanceVotes'], 'Number');
            }
            if (data.hasOwnProperty('advancePercent')) {
                obj['advancePercent'] = ApiClient.convertToType(data['advancePercent'], 'Number');
            }
            if (data.hasOwnProperty('electionDayPercent')) {
                obj['electionDayPercent'] = ApiClient.convertToType(data['electionDayPercent'], 'Number');
            }
            if (data.hasOwnProperty('electionDayVotes')) {
                obj['electionDayVotes'] = ApiClient.convertToType(data['electionDayVotes'], 'Number');
            }
            if (data.hasOwnProperty('totalPercent')) {
                obj['totalPercent'] = ApiClient.convertToType(data['totalPercent'], 'Number');
            }
            if (data.hasOwnProperty('totalVotes')) {
                obj['totalVotes'] = ApiClient.convertToType(data['totalVotes'], 'Number');
            }
        }
        return obj;
    }


}

/**
 * @member {Number} advanceVotes
 */
Votes.prototype['advanceVotes'] = undefined;

/**
 * @member {Number} advancePercent
 */
Votes.prototype['advancePercent'] = undefined;

/**
 * @member {Number} electionDayPercent
 */
Votes.prototype['electionDayPercent'] = undefined;

/**
 * @member {Number} electionDayVotes
 */
Votes.prototype['electionDayVotes'] = undefined;

/**
 * @member {Number} totalPercent
 */
Votes.prototype['totalPercent'] = undefined;

/**
 * @member {Number} totalVotes
 */
Votes.prototype['totalVotes'] = undefined;






export default Votes;

