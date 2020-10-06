/*
 * SendPost API
 * SendPost API to send transactional emails reliably
 *
 * OpenAPI spec version: 1.0.0
 * Contact: hello@sendx.io
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.4.16
 *
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/ModelsGlockappsBlacklist'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./ModelsGlockappsBlacklist'));
  } else {
    // Browser globals (root is window)
    if (!root.SendPostApi) {
      root.SendPostApi = {};
    }
    root.SendPostApi.ModelsGlockappsMonitorStat = factory(root.SendPostApi.ApiClient, root.SendPostApi.ModelsGlockappsBlacklist);
  }
}(this, function(ApiClient, ModelsGlockappsBlacklist) {
  'use strict';

  /**
   * The ModelsGlockappsMonitorStat model module.
   * @module model/ModelsGlockappsMonitorStat
   * @version 1.0.0
   */

  /**
   * Constructs a new <code>ModelsGlockappsMonitorStat</code>.
   * @alias module:model/ModelsGlockappsMonitorStat
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>ModelsGlockappsMonitorStat</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ModelsGlockappsMonitorStat} obj Optional instance to populate.
   * @return {module:model/ModelsGlockappsMonitorStat} The populated <code>ModelsGlockappsMonitorStat</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('day'))
        obj.day = ApiClient.convertToType(data['day'], 'Number');
      if (data.hasOwnProperty('listedCount'))
        obj.listedCount = ApiClient.convertToType(data['listedCount'], 'Number');
      if (data.hasOwnProperty('listedIn'))
        obj.listedIn = ApiClient.convertToType(data['listedIn'], [ModelsGlockappsBlacklist]);
      if (data.hasOwnProperty('month'))
        obj.month = ApiClient.convertToType(data['month'], 'Number');
      if (data.hasOwnProperty('senderScore'))
        obj.senderScore = ApiClient.convertToType(data['senderScore'], 'Number');
      if (data.hasOwnProperty('year'))
        obj.year = ApiClient.convertToType(data['year'], 'Number');
    }
    return obj;
  }

  /**
   * @member {Number} day
   */
  exports.prototype.day = undefined;

  /**
   * @member {Number} listedCount
   */
  exports.prototype.listedCount = undefined;

  /**
   * @member {Array.<module:model/ModelsGlockappsBlacklist>} listedIn
   */
  exports.prototype.listedIn = undefined;

  /**
   * @member {Number} month
   */
  exports.prototype.month = undefined;

  /**
   * @member {Number} senderScore
   */
  exports.prototype.senderScore = undefined;

  /**
   * @member {Number} year
   */
  exports.prototype.year = undefined;

  return exports;

}));
