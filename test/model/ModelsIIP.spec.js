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
 * Swagger Codegen version: 2.4.19
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
    describe('ModelsIIP', function() {
      beforeEach(function() {
        instance = new SendPostApi.ModelsIIP();
      });

      it('should create an instance of ModelsIIP', function() {
        // TODO: update the code to test ModelsIIP
        expect(instance).to.be.a(SendPostApi.ModelsIIP);
      });

      it('should have the property labels (base name: "labels")', function() {
        // TODO: update the code to test the property labels
        expect(instance).to.have.property('labels');
        // expect(instance.labels).to.be(expectedValueLiteral);
      });

      it('should have the property providerSettings (base name: "providerSettings")', function() {
        // TODO: update the code to test the property providerSettings
        expect(instance).to.have.property('providerSettings');
        // expect(instance.providerSettings).to.be(expectedValueLiteral);
      });

      it('should have the property type (base name: "type")', function() {
        // TODO: update the code to test the property type
        expect(instance).to.have.property('type');
        // expect(instance.type).to.be(expectedValueLiteral);
      });

    });
  });

}));
