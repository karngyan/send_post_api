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
    define(['ApiClient', 'model/ModelsIEMember'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./ModelsIEMember'));
  } else {
    // Browser globals (root is window)
    if (!root.SendPostApi) {
      root.SendPostApi = {};
    }
    root.SendPostApi.ModelsEComment = factory(root.SendPostApi.ApiClient, root.SendPostApi.ModelsIEMember);
  }
}(this, function(ApiClient, ModelsIEMember) {
  'use strict';

  /**
   * The ModelsEComment model module.
   * @module model/ModelsEComment
   * @version 1.0.0
   */

  /**
   * Constructs a new <code>ModelsEComment</code>.
   * @alias module:model/ModelsEComment
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>ModelsEComment</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ModelsEComment} obj Optional instance to populate.
   * @return {module:model/ModelsEComment} The populated <code>ModelsEComment</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('author'))
        obj.author = ModelsIEMember.constructFromObject(data['author']);
      if (data.hasOwnProperty('content'))
        obj.content = ApiClient.convertToType(data['content'], 'String');
    }
    return obj;
  }

  /**
   * @member {module:model/ModelsIEMember} author
   */
  exports.prototype.author = undefined;

  /**
   * @member {String} content
   */
  exports.prototype.content = undefined;


  return exports;

}));
