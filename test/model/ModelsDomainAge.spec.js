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
    describe('ModelsDomainAge', function() {
      beforeEach(function() {
        instance = new SendPostApi.ModelsDomainAge();
      });

      it('should create an instance of ModelsDomainAge', function() {
        // TODO: update the code to test ModelsDomainAge
        expect(instance).to.be.a(SendPostApi.ModelsDomainAge);
      });

      it('should have the property domainAgeFound (base name: "domainAgeFound")', function() {
        // TODO: update the code to test the property domainAgeFound
        expect(instance).to.have.property('domainAgeFound');
        // expect(instance.domainAgeFound).to.be(expectedValueLiteral);
      });

      it('should have the property domainAgeInDays (base name: "domainAgeInDays")', function() {
        // TODO: update the code to test the property domainAgeInDays
        expect(instance).to.have.property('domainAgeInDays');
        // expect(instance.domainAgeInDays).to.be(expectedValueLiteral);
      });

      it('should have the property domainAgeInMonths (base name: "domainAgeInMonths")', function() {
        // TODO: update the code to test the property domainAgeInMonths
        expect(instance).to.have.property('domainAgeInMonths');
        // expect(instance.domainAgeInMonths).to.be(expectedValueLiteral);
      });

      it('should have the property domainAgeInYears (base name: "domainAgeInYears")', function() {
        // TODO: update the code to test the property domainAgeInYears
        expect(instance).to.have.property('domainAgeInYears');
        // expect(instance.domainAgeInYears).to.be(expectedValueLiteral);
      });

      it('should have the property domainCreationDate (base name: "domainCreationDate")', function() {
        // TODO: update the code to test the property domainCreationDate
        expect(instance).to.have.property('domainCreationDate');
        // expect(instance.domainCreationDate).to.be(expectedValueLiteral);
      });

      it('should have the property domainRegistered (base name: "domainRegistered")', function() {
        // TODO: update the code to test the property domainRegistered
        expect(instance).to.have.property('domainRegistered');
        // expect(instance.domainRegistered).to.be(expectedValueLiteral);
      });

      it('should have the property host (base name: "host")', function() {
        // TODO: update the code to test the property host
        expect(instance).to.have.property('host');
        // expect(instance.host).to.be(expectedValueLiteral);
      });

    });
  });

}));
