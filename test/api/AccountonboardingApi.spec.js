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

  beforeEach(function() {
    instance = new SendPostApi.AccountonboardingApi();
  });

  describe('(package)', function() {
    describe('AccountonboardingApi', function() {
      describe('onboardingRouterGetOnboardingChecklist', function() {
        it('should call onboardingRouterGetOnboardingChecklist successfully', function(done) {
          // TODO: uncomment, update parameter values for onboardingRouterGetOnboardingChecklist call and complete the assertions
          /*
          var xAccountApiKey = "xAccountApiKey_example";

          instance.onboardingRouterGetOnboardingChecklist(xAccountApiKey, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(SendPostApi.ModelsOnboardingChecklist);
            expect(data.id).to.be.a('number');
            expect(data.id).to.be("0");
            expect(data.isDomainAdded).to.be.a('boolean');
            expect(data.isDomainAdded).to.be(false);
            expect(data.isDomainVerified).to.be.a('boolean');
            expect(data.isDomainVerified).to.be(false);
            expect(data.isFirstEmailSent).to.be.a('boolean');
            expect(data.isFirstEmailSent).to.be(false);

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
    });
  });

}));
