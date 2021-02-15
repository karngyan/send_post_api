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
    describe('ModelsAGStat', function() {
      beforeEach(function() {
        instance = new SendPostApi.ModelsAGStat();
      });

      it('should create an instance of ModelsAGStat', function() {
        // TODO: update the code to test ModelsAGStat
        expect(instance).to.be.a(SendPostApi.ModelsAGStat);
      });

      it('should have the property group (base name: "group")', function() {
        // TODO: update the code to test the property group
        expect(instance).to.have.property('group');
        // expect(instance.group).to.be(expectedValueLiteral);
      });

      it('should have the property stat (base name: "stat")', function() {
        // TODO: update the code to test the property stat
        expect(instance).to.have.property('stat');
        // expect(instance.stat).to.be(expectedValueLiteral);
      });

    });
  });

}));
