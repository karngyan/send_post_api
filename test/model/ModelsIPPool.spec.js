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
    describe('ModelsIPPool', function() {
      beforeEach(function() {
        instance = new SendPostApi.ModelsIPPool();
      });

      it('should create an instance of ModelsIPPool', function() {
        // TODO: update the code to test ModelsIPPool
        expect(instance).to.be.a(SendPostApi.ModelsIPPool);
      });

      it('should have the property created (base name: "created")', function() {
        // TODO: update the code to test the property created
        expect(instance).to.have.property('created');
        // expect(instance.created).to.be(expectedValueLiteral);
      });

      it('should have the property id (base name: "id")', function() {
        // TODO: update the code to test the property id
        expect(instance).to.have.property('id');
        // expect(instance.id).to.be(expectedValueLiteral);
      });

      it('should have the property ips (base name: "ips")', function() {
        // TODO: update the code to test the property ips
        expect(instance).to.have.property('ips');
        // expect(instance.ips).to.be(expectedValueLiteral);
      });

      it('should have the property name (base name: "name")', function() {
        // TODO: update the code to test the property name
        expect(instance).to.have.property('name');
        // expect(instance.name).to.be(expectedValueLiteral);
      });

      it('should have the property routingMetaData (base name: "routingMetaData")', function() {
        // TODO: update the code to test the property routingMetaData
        expect(instance).to.have.property('routingMetaData');
        // expect(instance.routingMetaData).to.be(expectedValueLiteral);
      });

      it('should have the property routingStrategy (base name: "routingStrategy")', function() {
        // TODO: update the code to test the property routingStrategy
        expect(instance).to.have.property('routingStrategy');
        // expect(instance.routingStrategy).to.be(expectedValueLiteral);
      });

      it('should have the property type (base name: "type")', function() {
        // TODO: update the code to test the property type
        expect(instance).to.have.property('type');
        // expect(instance.type).to.be(expectedValueLiteral);
      });

    });
  });

}));
