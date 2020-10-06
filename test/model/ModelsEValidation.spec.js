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
    // AMD.
    define(['expect.js', '../../src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require('../../src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.SendPostApi);
  }
}(this, function(expect, SendPostApi) {
  'use strict';

  var instance;

  describe('(package)', function() {
    describe('ModelsEValidation', function() {
      beforeEach(function() {
        instance = new SendPostApi.ModelsEValidation();
      });

      it('should create an instance of ModelsEValidation', function() {
        // TODO: update the code to test ModelsEValidation
        expect(instance).to.be.a(SendPostApi.ModelsEValidation);
      });

      it('should have the property emails (base name: "emails")', function() {
        // TODO: update the code to test the property emails
        expect(instance).to.have.property('emails');
        // expect(instance.emails).to.be(expectedValueLiteral);
      });

    });
  });

}));
