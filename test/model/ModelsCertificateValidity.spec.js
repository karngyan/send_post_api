/*
 * SendPost API
 * Email API and SMTP relay to not just send and measure email sending, but also alert and optimise. We provide you with tools, expertise and support needed to reliably deliver emails to your customers inboxes on time, every time.
 *
 * OpenAPI spec version: 1.0.0
 * Contact: hello@sendpost.io
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.4.23
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
    describe('ModelsCertificateValidity', function() {
      beforeEach(function() {
        instance = new SendPostApi.ModelsCertificateValidity();
      });

      it('should create an instance of ModelsCertificateValidity', function() {
        // TODO: update the code to test ModelsCertificateValidity
        expect(instance).to.be.a(SendPostApi.ModelsCertificateValidity);
      });

      it('should have the property daysLeft (base name: "daysLeft")', function() {
        // TODO: update the code to test the property daysLeft
        expect(instance).to.have.property('daysLeft');
        // expect(instance.daysLeft).to.be(expectedValueLiteral);
      });

      it('should have the property validFrom (base name: "validFrom")', function() {
        // TODO: update the code to test the property validFrom
        expect(instance).to.have.property('validFrom');
        // expect(instance.validFrom).to.be(expectedValueLiteral);
      });

      it('should have the property validFromTimestamp (base name: "validFromTimestamp")', function() {
        // TODO: update the code to test the property validFromTimestamp
        expect(instance).to.have.property('validFromTimestamp');
        // expect(instance.validFromTimestamp).to.be(expectedValueLiteral);
      });

      it('should have the property validTo (base name: "validTo")', function() {
        // TODO: update the code to test the property validTo
        expect(instance).to.have.property('validTo');
        // expect(instance.validTo).to.be(expectedValueLiteral);
      });

      it('should have the property validToTimestamp (base name: "validToTimestamp")', function() {
        // TODO: update the code to test the property validToTimestamp
        expect(instance).to.have.property('validToTimestamp');
        // expect(instance.validToTimestamp).to.be(expectedValueLiteral);
      });

    });
  });

}));
