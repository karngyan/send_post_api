/*
 * SendPost API
 * SendPost API to send emails reliably
 *
 * OpenAPI spec version: 1.0.0
 * Contact: hello@sendpost.io
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.4.18
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
    if (!root.SendPostApi) {
      root.SendPostApi = {};
    }
    root.SendPostApi.ModelsCouponOptions = factory(root.SendPostApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The ModelsCouponOptions model module.
   * @module model/ModelsCouponOptions
   * @version 1.0.0
   */

  /**
   * Constructs a new <code>ModelsCouponOptions</code>.
   * @alias module:model/ModelsCouponOptions
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>ModelsCouponOptions</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ModelsCouponOptions} obj Optional instance to populate.
   * @return {module:model/ModelsCouponOptions} The populated <code>ModelsCouponOptions</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('couponCode'))
        obj.couponCode = ApiClient.convertToType(data['couponCode'], 'String');
    }
    return obj;
  }

  /**
   * @member {String} couponCode
   */
  exports.prototype.couponCode = undefined;


  return exports;

}));
