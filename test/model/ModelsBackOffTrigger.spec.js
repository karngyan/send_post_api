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
    describe('ModelsBackOffTrigger', function() {
      beforeEach(function() {
        instance = new SendPostApi.ModelsBackOffTrigger();
      });

      it('should create an instance of ModelsBackOffTrigger', function() {
        // TODO: update the code to test ModelsBackOffTrigger
        expect(instance).to.be.a(SendPostApi.ModelsBackOffTrigger);
      });

      it('should have the property deferralPercentage (base name: "deferralPercentage")', function() {
        // TODO: update the code to test the property deferralPercentage
        expect(instance).to.have.property('deferralPercentage');
        // expect(instance.deferralPercentage).to.be(expectedValueLiteral);
      });

      it('should have the property durationInMinutes (base name: "durationInMinutes")', function() {
        // TODO: update the code to test the property durationInMinutes
        expect(instance).to.have.property('durationInMinutes');
        // expect(instance.durationInMinutes).to.be(expectedValueLiteral);
      });

      it('should have the property hardBouncePercentage (base name: "hardBouncePercentage")', function() {
        // TODO: update the code to test the property hardBouncePercentage
        expect(instance).to.have.property('hardBouncePercentage');
        // expect(instance.hardBouncePercentage).to.be(expectedValueLiteral);
      });

      it('should have the property minimumAttempts (base name: "minimumAttempts")', function() {
        // TODO: update the code to test the property minimumAttempts
        expect(instance).to.have.property('minimumAttempts');
        // expect(instance.minimumAttempts).to.be(expectedValueLiteral);
      });

    });
  });

}));
