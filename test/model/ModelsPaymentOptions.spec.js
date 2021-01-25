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
 * Swagger Codegen version: 2.4.18
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
    describe('ModelsPaymentOptions', function() {
      beforeEach(function() {
        instance = new SendPostApi.ModelsPaymentOptions();
      });

      it('should create an instance of ModelsPaymentOptions', function() {
        // TODO: update the code to test ModelsPaymentOptions
        expect(instance).to.be.a(SendPostApi.ModelsPaymentOptions);
      });

      it('should have the property customerId (base name: "customerId")', function() {
        // TODO: update the code to test the property customerId
        expect(instance).to.have.property('customerId');
        // expect(instance.customerId).to.be(expectedValueLiteral);
      });

      it('should have the property ipCount (base name: "ipCount")', function() {
        // TODO: update the code to test the property ipCount
        expect(instance).to.have.property('ipCount');
        // expect(instance.ipCount).to.be(expectedValueLiteral);
      });

      it('should have the property paymentMethodId (base name: "paymentMethodId")', function() {
        // TODO: update the code to test the property paymentMethodId
        expect(instance).to.have.property('paymentMethodId');
        // expect(instance.paymentMethodId).to.be(expectedValueLiteral);
      });

      it('should have the property priceId (base name: "priceId")', function() {
        // TODO: update the code to test the property priceId
        expect(instance).to.have.property('priceId');
        // expect(instance.priceId).to.be(expectedValueLiteral);
      });

    });
  });

}));
