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
    instance = new SendPostApi.SmtpApi();
  });

  describe('(package)', function() {
    describe('SmtpApi', function() {
      describe('sMTPRouterReceiveWebhooksRaisedFromSMTPServers', function() {
        it('should call sMTPRouterReceiveWebhooksRaisedFromSMTPServers successfully', function(done) {
          // TODO: uncomment, update parameter values for sMTPRouterReceiveWebhooksRaisedFromSMTPServers call
          /*
          var body = new SendPostApi.ModelsWMessage();
          body.accountID = "0";
          body.groups = ;
          body.IPID = "0";
          body.messageType = "";
          body.messageUUID = "";
          body.mockMessage = false;
          body.mockTimeShift = "0";
          body.sMTPCode = "0";
          body.sMTPDescription = "";
          body.subAccountID = "0";
          body.submittedAt = "0";
          body.to = "";
          body.type = new SendPostApi.ModelsEventType();

          instance.sMTPRouterReceiveWebhooksRaisedFromSMTPServers(body, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }

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
