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
    describe('ModelsBillingPortalSession', function() {
      beforeEach(function() {
        instance = new SendPostApi.ModelsBillingPortalSession();
      });

      it('should create an instance of ModelsBillingPortalSession', function() {
        // TODO: update the code to test ModelsBillingPortalSession
        expect(instance).to.be.a(SendPostApi.ModelsBillingPortalSession);
      });

      it('should have the property created (base name: "created")', function() {
        // TODO: update the code to test the property created
        expect(instance).to.have.property('created');
        // expect(instance.created).to.be(expectedValueLiteral);
      });

      it('should have the property customer (base name: "customer")', function() {
        // TODO: update the code to test the property customer
        expect(instance).to.have.property('customer');
        // expect(instance.customer).to.be(expectedValueLiteral);
      });

      it('should have the property id (base name: "id")', function() {
        // TODO: update the code to test the property id
        expect(instance).to.have.property('id');
        // expect(instance.id).to.be(expectedValueLiteral);
      });

      it('should have the property livemode (base name: "livemode")', function() {
        // TODO: update the code to test the property livemode
        expect(instance).to.have.property('livemode');
        // expect(instance.livemode).to.be(expectedValueLiteral);
      });

      it('should have the property _object (base name: "object")', function() {
        // TODO: update the code to test the property _object
        expect(instance).to.have.property('_object');
        // expect(instance._object).to.be(expectedValueLiteral);
      });

      it('should have the property returnUrl (base name: "return_url")', function() {
        // TODO: update the code to test the property returnUrl
        expect(instance).to.have.property('returnUrl');
        // expect(instance.returnUrl).to.be(expectedValueLiteral);
      });

      it('should have the property url (base name: "url")', function() {
        // TODO: update the code to test the property url
        expect(instance).to.have.property('url');
        // expect(instance.url).to.be(expectedValueLiteral);
      });

    });
  });

}));
