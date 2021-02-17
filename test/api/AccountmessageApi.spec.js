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
    instance = new SendPostApi.AccountmessageApi();
  });

  describe('(package)', function() {
    describe('AccountmessageApi', function() {
      describe('messageRouterGet', function() {
        it('should call messageRouterGet successfully', function(done) {
          // TODO: uncomment, update parameter values for messageRouterGet call and complete the assertions
          /*
          var xAccountApiKey = "xAccountApiKey_example";
          var messageId = "messageId_example";

          instance.messageRouterGet(xAccountApiKey, messageId, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(SendPostApi.ModelsQEmailMessage);
            expect(data.accountID).to.be.a('number');
            expect(data.accountID).to.be("0");
            expect(data.ampBody).to.be.a('string');
            expect(data.ampBody).to.be("");
            expect(data.attempt).to.be.a('number');
            expect(data.attempt).to.be("0");
            expect(data.customFields).to.be.a(Object);
            expect(data.customFields).to.be();
            expect(data.emailType).to.be.a('string');
            expect(data.emailType).to.be("");
            expect(data.from).to.be.a(SendPostApi.ModelsFrom);
                  expect(data.from.email).to.be.a('string');
              expect(data.from.email).to.be("");
              expect(data.from.name).to.be.a('string');
              expect(data.from.name).to.be("");
            expect(data.groups).to.be.a(Object);
            expect(data.groups).to.be();
            expect(data.headers).to.be.a(Object);
            expect(data.headers).to.be();
            expect(data.htmlBody).to.be.a('string');
            expect(data.htmlBody).to.be("");
            expect(data.ipID).to.be.a('number');
            expect(data.ipID).to.be("0");
            expect(data.ipPool).to.be.a('string');
            expect(data.ipPool).to.be("");
            expect(data.localIP).to.be.a('string');
            expect(data.localIP).to.be("");
            expect(data.messageID).to.be.a('string');
            expect(data.messageID).to.be("");
            expect(data.preText).to.be.a('string');
            expect(data.preText).to.be("");
            expect(data.publicIP).to.be.a('string');
            expect(data.publicIP).to.be("");
            expect(data.replyTo).to.be.a(SendPostApi.ModelsReplyTo);
                  expect(data.replyTo.email).to.be.a('string');
              expect(data.replyTo.email).to.be("");
              expect(data.replyTo.name).to.be.a('string');
              expect(data.replyTo.name).to.be("");
            expect(data.subAccountID).to.be.a('number');
            expect(data.subAccountID).to.be("0");
            expect(data.subject).to.be.a('string');
            expect(data.subject).to.be("");
            expect(data.submittedAt).to.be.a('number');
            expect(data.submittedAt).to.be("0");
            expect(data.textBody).to.be.a('string');
            expect(data.textBody).to.be("");
            expect(data.to).to.be.a(SendPostApi.ModelsTo);
                  expect(data.to.customFields).to.be.a(Object);
              expect(data.to.customFields).to.be();
              expect(data.to.email).to.be.a('string');
              expect(data.to.email).to.be("");
              expect(data.to.name).to.be.a('string');
              expect(data.to.name).to.be("");
            expect(data.trackClicks).to.be.a('boolean');
            expect(data.trackClicks).to.be(false);
            expect(data.trackOpens).to.be.a('boolean');
            expect(data.trackOpens).to.be(false);

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('messageRouterGetAllEventsForAMessageId', function() {
        it('should call messageRouterGetAllEventsForAMessageId successfully', function(done) {
          // TODO: uncomment, update parameter values for messageRouterGetAllEventsForAMessageId call and complete the assertions
          /*
          var xAccountApiKey = "xAccountApiKey_example";
          var messageId = "messageId_example";

          instance.messageRouterGetAllEventsForAMessageId(xAccountApiKey, messageId, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            let dataCtr = data;
            expect(dataCtr).to.be.an(Array);
            expect(dataCtr).to.not.be.empty();
            for (let p in dataCtr) {
              let data = dataCtr[p];
              expect(data).to.be.a(SendPostApi.ModelsQEvent);
              expect(data.accountID).to.be.a('number');
              expect(data.accountID).to.be("0");
              expect(data.eventID).to.be.a('string');
              expect(data.eventID).to.be("");
              expect(data.eventMetadata).to.be.a(SendPostApi.ModelsEventMetadata);
                    expect(data.eventMetadata.clickedURL).to.be.a('string');
                expect(data.eventMetadata.clickedURL).to.be("");
                expect(data.eventMetadata.device).to.be.a(SendPostApi.UaparserDevice);
                      expect(data.eventMetadata.device.family).to.be.a('string');
                  expect(data.eventMetadata.device.family).to.be("");
                expect(data.eventMetadata.geo).to.be.a(SendPostApi.ModelsCity);
                      expect(data.eventMetadata.geo.cityID).to.be.a('number');
                  expect(data.eventMetadata.geo.cityID).to.be(0);
                  expect(data.eventMetadata.geo.continentCode).to.be.a('string');
                  expect(data.eventMetadata.geo.continentCode).to.be("");
                  expect(data.eventMetadata.geo.countryCode).to.be.a('string');
                  expect(data.eventMetadata.geo.countryCode).to.be("");
                  expect(data.eventMetadata.geo.postalCode).to.be.a('string');
                  expect(data.eventMetadata.geo.postalCode).to.be("");
                  expect(data.eventMetadata.geo.timeZone).to.be.a('string');
                  expect(data.eventMetadata.geo.timeZone).to.be("");
                expect(data.eventMetadata.os).to.be.a(SendPostApi.UaparserOs);
                      expect(data.eventMetadata.os.family).to.be.a('string');
                  expect(data.eventMetadata.os.family).to.be("");
                  expect(data.eventMetadata.os.major).to.be.a('string');
                  expect(data.eventMetadata.os.major).to.be("");
                  expect(data.eventMetadata.os.minor).to.be.a('string');
                  expect(data.eventMetadata.os.minor).to.be("");
                  expect(data.eventMetadata.os.patch).to.be.a('string');
                  expect(data.eventMetadata.os.patch).to.be("");
                  expect(data.eventMetadata.os.patchMinor).to.be.a('string');
                  expect(data.eventMetadata.os.patchMinor).to.be("");
                expect(data.eventMetadata.smtpCode).to.be.a('number');
                expect(data.eventMetadata.smtpCode).to.be("0");
                expect(data.eventMetadata.smtpDescription).to.be.a('string');
                expect(data.eventMetadata.smtpDescription).to.be("");
                expect(data.eventMetadata.userAgent).to.be.a(SendPostApi.UaparserUserAgent);
                      expect(data.eventMetadata.userAgent.family).to.be.a('string');
                  expect(data.eventMetadata.userAgent.family).to.be("");
                  expect(data.eventMetadata.userAgent.major).to.be.a('string');
                  expect(data.eventMetadata.userAgent.major).to.be("");
                  expect(data.eventMetadata.userAgent.minor).to.be.a('string');
                  expect(data.eventMetadata.userAgent.minor).to.be("");
                  expect(data.eventMetadata.userAgent.patch).to.be.a('string');
                  expect(data.eventMetadata.userAgent.patch).to.be("");
              expect(data.from).to.be.a('string');
              expect(data.from).to.be("");
              expect(data.groups).to.be.a(Object);
              expect(data.groups).to.be();
              expect(data.ipID).to.be.a('number');
              expect(data.ipID).to.be("0");
              expect(data.messageID).to.be.a('string');
              expect(data.messageID).to.be("");
              expect(data.messageType).to.be.a('string');
              expect(data.messageType).to.be("");
              expect(data.subAccountID).to.be.a('number');
              expect(data.subAccountID).to.be("0");
              expect(data.submittedAt).to.be.a('number');
              expect(data.submittedAt).to.be("0");
              expect(data.to).to.be.a('string');
              expect(data.to).to.be("");
              expect(data.type).to.be.a('number');
              expect(data.type).to.be("0");
            }

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('messageRouterGetAllEventsForAMessageIdFromANode', function() {
        it('should call messageRouterGetAllEventsForAMessageIdFromANode successfully', function(done) {
          // TODO: uncomment, update parameter values for messageRouterGetAllEventsForAMessageIdFromANode call and complete the assertions
          /*
          var xAccountApiKey = "xAccountApiKey_example";
          var messageId = "messageId_example";

          instance.messageRouterGetAllEventsForAMessageIdFromANode(xAccountApiKey, messageId, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            let dataCtr = data;
            expect(dataCtr).to.be.an(Array);
            expect(dataCtr).to.not.be.empty();
            for (let p in dataCtr) {
              let data = dataCtr[p];
              expect(data).to.be.a(SendPostApi.ModelsQEvent);
              expect(data.accountID).to.be.a('number');
              expect(data.accountID).to.be("0");
              expect(data.eventID).to.be.a('string');
              expect(data.eventID).to.be("");
              expect(data.eventMetadata).to.be.a(SendPostApi.ModelsEventMetadata);
                    expect(data.eventMetadata.clickedURL).to.be.a('string');
                expect(data.eventMetadata.clickedURL).to.be("");
                expect(data.eventMetadata.device).to.be.a(SendPostApi.UaparserDevice);
                      expect(data.eventMetadata.device.family).to.be.a('string');
                  expect(data.eventMetadata.device.family).to.be("");
                expect(data.eventMetadata.geo).to.be.a(SendPostApi.ModelsCity);
                      expect(data.eventMetadata.geo.cityID).to.be.a('number');
                  expect(data.eventMetadata.geo.cityID).to.be(0);
                  expect(data.eventMetadata.geo.continentCode).to.be.a('string');
                  expect(data.eventMetadata.geo.continentCode).to.be("");
                  expect(data.eventMetadata.geo.countryCode).to.be.a('string');
                  expect(data.eventMetadata.geo.countryCode).to.be("");
                  expect(data.eventMetadata.geo.postalCode).to.be.a('string');
                  expect(data.eventMetadata.geo.postalCode).to.be("");
                  expect(data.eventMetadata.geo.timeZone).to.be.a('string');
                  expect(data.eventMetadata.geo.timeZone).to.be("");
                expect(data.eventMetadata.os).to.be.a(SendPostApi.UaparserOs);
                      expect(data.eventMetadata.os.family).to.be.a('string');
                  expect(data.eventMetadata.os.family).to.be("");
                  expect(data.eventMetadata.os.major).to.be.a('string');
                  expect(data.eventMetadata.os.major).to.be("");
                  expect(data.eventMetadata.os.minor).to.be.a('string');
                  expect(data.eventMetadata.os.minor).to.be("");
                  expect(data.eventMetadata.os.patch).to.be.a('string');
                  expect(data.eventMetadata.os.patch).to.be("");
                  expect(data.eventMetadata.os.patchMinor).to.be.a('string');
                  expect(data.eventMetadata.os.patchMinor).to.be("");
                expect(data.eventMetadata.smtpCode).to.be.a('number');
                expect(data.eventMetadata.smtpCode).to.be("0");
                expect(data.eventMetadata.smtpDescription).to.be.a('string');
                expect(data.eventMetadata.smtpDescription).to.be("");
                expect(data.eventMetadata.userAgent).to.be.a(SendPostApi.UaparserUserAgent);
                      expect(data.eventMetadata.userAgent.family).to.be.a('string');
                  expect(data.eventMetadata.userAgent.family).to.be("");
                  expect(data.eventMetadata.userAgent.major).to.be.a('string');
                  expect(data.eventMetadata.userAgent.major).to.be("");
                  expect(data.eventMetadata.userAgent.minor).to.be.a('string');
                  expect(data.eventMetadata.userAgent.minor).to.be("");
                  expect(data.eventMetadata.userAgent.patch).to.be.a('string');
                  expect(data.eventMetadata.userAgent.patch).to.be("");
              expect(data.from).to.be.a('string');
              expect(data.from).to.be("");
              expect(data.groups).to.be.a(Object);
              expect(data.groups).to.be();
              expect(data.ipID).to.be.a('number');
              expect(data.ipID).to.be("0");
              expect(data.messageID).to.be.a('string');
              expect(data.messageID).to.be("");
              expect(data.messageType).to.be.a('string');
              expect(data.messageType).to.be("");
              expect(data.subAccountID).to.be.a('number');
              expect(data.subAccountID).to.be("0");
              expect(data.submittedAt).to.be.a('number');
              expect(data.submittedAt).to.be("0");
              expect(data.to).to.be.a('string');
              expect(data.to).to.be("");
              expect(data.type).to.be.a('number');
              expect(data.type).to.be("0");
            }

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('messageRouterGetMessageFromNode', function() {
        it('should call messageRouterGetMessageFromNode successfully', function(done) {
          // TODO: uncomment, update parameter values for messageRouterGetMessageFromNode call and complete the assertions
          /*
          var xAccountApiKey = "xAccountApiKey_example";
          var messageId = "messageId_example";

          instance.messageRouterGetMessageFromNode(xAccountApiKey, messageId, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(SendPostApi.ModelsQEmailMessage);
            expect(data.accountID).to.be.a('number');
            expect(data.accountID).to.be("0");
            expect(data.ampBody).to.be.a('string');
            expect(data.ampBody).to.be("");
            expect(data.attempt).to.be.a('number');
            expect(data.attempt).to.be("0");
            expect(data.customFields).to.be.a(Object);
            expect(data.customFields).to.be();
            expect(data.emailType).to.be.a('string');
            expect(data.emailType).to.be("");
            expect(data.from).to.be.a(SendPostApi.ModelsFrom);
                  expect(data.from.email).to.be.a('string');
              expect(data.from.email).to.be("");
              expect(data.from.name).to.be.a('string');
              expect(data.from.name).to.be("");
            expect(data.groups).to.be.a(Object);
            expect(data.groups).to.be();
            expect(data.headers).to.be.a(Object);
            expect(data.headers).to.be();
            expect(data.htmlBody).to.be.a('string');
            expect(data.htmlBody).to.be("");
            expect(data.ipID).to.be.a('number');
            expect(data.ipID).to.be("0");
            expect(data.ipPool).to.be.a('string');
            expect(data.ipPool).to.be("");
            expect(data.localIP).to.be.a('string');
            expect(data.localIP).to.be("");
            expect(data.messageID).to.be.a('string');
            expect(data.messageID).to.be("");
            expect(data.preText).to.be.a('string');
            expect(data.preText).to.be("");
            expect(data.publicIP).to.be.a('string');
            expect(data.publicIP).to.be("");
            expect(data.replyTo).to.be.a(SendPostApi.ModelsReplyTo);
                  expect(data.replyTo.email).to.be.a('string');
              expect(data.replyTo.email).to.be("");
              expect(data.replyTo.name).to.be.a('string');
              expect(data.replyTo.name).to.be("");
            expect(data.subAccountID).to.be.a('number');
            expect(data.subAccountID).to.be("0");
            expect(data.subject).to.be.a('string');
            expect(data.subject).to.be("");
            expect(data.submittedAt).to.be.a('number');
            expect(data.submittedAt).to.be("0");
            expect(data.textBody).to.be.a('string');
            expect(data.textBody).to.be("");
            expect(data.to).to.be.a(SendPostApi.ModelsTo);
                  expect(data.to.customFields).to.be.a(Object);
              expect(data.to.customFields).to.be();
              expect(data.to.email).to.be.a('string');
              expect(data.to.email).to.be("");
              expect(data.to.name).to.be.a('string');
              expect(data.to.name).to.be("");
            expect(data.trackClicks).to.be.a('boolean');
            expect(data.trackClicks).to.be(false);
            expect(data.trackOpens).to.be.a('boolean');
            expect(data.trackOpens).to.be(false);

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
