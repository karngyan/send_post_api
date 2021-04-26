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
    instance = new SendPostApi.AccountippoolApi();
  });

  describe('(package)', function() {
    describe('AccountippoolApi', function() {
      describe('accountIPPoolRouterCount', function() {
        it('should call accountIPPoolRouterCount successfully', function(done) {
          // TODO: uncomment, update parameter values for accountIPPoolRouterCount call and complete the assertions
          /*
          var xAccountApiKey = "xAccountApiKey_example";

          instance.accountIPPoolRouterCount(xAccountApiKey, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(SendPostApi.ModelsCountStat);
            expect(data.count).to.be.a('number');
            expect(data.count).to.be("0");

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('accountIPPoolRouterCreate', function() {
        it('should call accountIPPoolRouterCreate successfully', function(done) {
          // TODO: uncomment, update parameter values for accountIPPoolRouterCreate call and complete the assertions
          /*
          var xAccountApiKey = "xAccountApiKey_example";
          var body = new SendPostApi.ModelsEIPPool();
          body.ips = [new SendPostApi.ModelsEIP()];
          body.ips[0].publicIP = "";
          body.name = "";
          body.routingMapping = ;
          body.routingStrategy = "0";

          instance.accountIPPoolRouterCreate(xAccountApiKey, body, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(SendPostApi.ModelsAccountIPPool);
            expect(data.created).to.be.a('number');
            expect(data.created).to.be("0");
            expect(data.id).to.be.a('number');
            expect(data.id).to.be("0");
            {
              let dataCtr = data.ips;
              expect(dataCtr).to.be.an(Array);
              expect(dataCtr).to.not.be.empty();
              for (let p in dataCtr) {
                let data = dataCtr[p];
                expect(data).to.be.a(SendPostApi.ModelsIP);
                expect(data.aolSettings).to.be.a('string');
                expect(data.aolSettings).to.be("");
                expect(data.autoWarmupEnabled).to.be.a('boolean');
                expect(data.autoWarmupEnabled).to.be(false);
                expect(data.autoWarmupStage).to.be.a('number');
                expect(data.autoWarmupStage).to.be("0");
                expect(data.comcastSettings).to.be.a('string');
                expect(data.comcastSettings).to.be("");
                expect(data.created).to.be.a('number');
                expect(data.created).to.be("0");
                expect(data.defaultSettings).to.be.a('string');
                expect(data.defaultSettings).to.be("");
                expect(data.gmailSettings).to.be.a('string');
                expect(data.gmailSettings).to.be("");
                expect(data.gmxSettings).to.be.a('string');
                expect(data.gmxSettings).to.be("");
                expect(data.icloudSettings).to.be.a('string');
                expect(data.icloudSettings).to.be("");
                expect(data.id).to.be.a('number');
                expect(data.id).to.be("0");
                expect(data.mailruSettings).to.be.a('string');
                expect(data.mailruSettings).to.be("");
                expect(data.microsoftSettings).to.be.a('string');
                expect(data.microsoftSettings).to.be("");
                expect(data.publicIP).to.be.a('string');
                expect(data.publicIP).to.be("");
                expect(data.qqSettings).to.be.a('string');
                expect(data.qqSettings).to.be("");
                expect(data.reverseDNSHostname).to.be.a('string');
                expect(data.reverseDNSHostname).to.be("");
                expect(data.systemDomain).to.be.a(SendPostApi.ModelsSystemDomain);
                      expect(data.systemDomain.created).to.be.a('number');
                  expect(data.systemDomain.created).to.be("0");
                  expect(data.systemDomain.dkim).to.be.a(SendPostApi.ModelsSystemDNSRecord);
                        expect(data.systemDomain.dkim.host).to.be.a('string');
                    expect(data.systemDomain.dkim.host).to.be("");
                    expect(data.systemDomain.dkim.textValue).to.be.a('string');
                    expect(data.systemDomain.dkim.textValue).to.be("");
                    expect(data.systemDomain.dkim.type).to.be.a('string');
                    expect(data.systemDomain.dkim.type).to.be("");
                  expect(data.systemDomain.dkimConfig).to.be.a('string');
                  expect(data.systemDomain.dkimConfig).to.be("");
                  expect(data.systemDomain.dkimVerified).to.be.a('boolean');
                  expect(data.systemDomain.dkimVerified).to.be(false);
                  expect(data.systemDomain.id).to.be.a('number');
                  expect(data.systemDomain.id).to.be("0");
                  expect(data.systemDomain.mailboxVerified).to.be.a('boolean');
                  expect(data.systemDomain.mailboxVerified).to.be(false);
                  expect(data.systemDomain.name).to.be.a('string');
                  expect(data.systemDomain.name).to.be("");
                  expect(data.systemDomain.spf).to.be.a(SendPostApi.ModelsSystemDNSRecord);
                        expect(data.systemDomain.spf.host).to.be.a('string');
                    expect(data.systemDomain.spf.host).to.be("");
                    expect(data.systemDomain.spf.textValue).to.be.a('string');
                    expect(data.systemDomain.spf.textValue).to.be("");
                    expect(data.systemDomain.spf.type).to.be.a('string');
                    expect(data.systemDomain.spf.type).to.be("");
                  expect(data.systemDomain.spfVerified).to.be.a('boolean');
                  expect(data.systemDomain.spfVerified).to.be(false);
                  expect(data.systemDomain.track).to.be.a(SendPostApi.ModelsSystemDNSRecord);
                        expect(data.systemDomain.track.host).to.be.a('string');
                    expect(data.systemDomain.track.host).to.be("");
                    expect(data.systemDomain.track.textValue).to.be.a('string');
                    expect(data.systemDomain.track.textValue).to.be("");
                    expect(data.systemDomain.track.type).to.be.a('string');
                    expect(data.systemDomain.track.type).to.be("");
                  expect(data.systemDomain.trackVerified).to.be.a('boolean');
                  expect(data.systemDomain.trackVerified).to.be(false);
                expect(data.type).to.be.a(SendPostApi.ModelsIPType);
                    expect(data.yahooSettings).to.be.a('string');
                expect(data.yahooSettings).to.be("");
                expect(data.yandexSettings).to.be.a('string');
                expect(data.yandexSettings).to.be("");
                expect(data.zohoSettings).to.be.a('string');
                expect(data.zohoSettings).to.be("");

                      }
            }
            expect(data.name).to.be.a('string');
            expect(data.name).to.be("");
            expect(data.routingMetaData).to.be.a('string');
            expect(data.routingMetaData).to.be("");
            expect(data.routingStrategy).to.be.a('number');
            expect(data.routingStrategy).to.be("0");
            expect(data.type).to.be.a(SendPostApi.ModelsIPPoolType);
    
            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('accountIPPoolRouterDelete', function() {
        it('should call accountIPPoolRouterDelete successfully', function(done) {
          // TODO: uncomment, update parameter values for accountIPPoolRouterDelete call and complete the assertions
          /*
          var xAccountApiKey = "xAccountApiKey_example";
          var ippoolid = 789;

          instance.accountIPPoolRouterDelete(xAccountApiKey, ippoolid, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(SendPostApi.ModelsDeleteResponse);
            expect(data.id).to.be.a('number');
            expect(data.id).to.be("0");
            expect(data.message).to.be.a('string');
            expect(data.message).to.be("");

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('accountIPPoolRouterGet', function() {
        it('should call accountIPPoolRouterGet successfully', function(done) {
          // TODO: uncomment, update parameter values for accountIPPoolRouterGet call and complete the assertions
          /*
          var xAccountApiKey = "xAccountApiKey_example";
          var ippoolid = 789;

          instance.accountIPPoolRouterGet(xAccountApiKey, ippoolid, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(SendPostApi.ModelsAccountIPPool);
            expect(data.created).to.be.a('number');
            expect(data.created).to.be("0");
            expect(data.id).to.be.a('number');
            expect(data.id).to.be("0");
            {
              let dataCtr = data.ips;
              expect(dataCtr).to.be.an(Array);
              expect(dataCtr).to.not.be.empty();
              for (let p in dataCtr) {
                let data = dataCtr[p];
                expect(data).to.be.a(SendPostApi.ModelsIP);
                expect(data.aolSettings).to.be.a('string');
                expect(data.aolSettings).to.be("");
                expect(data.autoWarmupEnabled).to.be.a('boolean');
                expect(data.autoWarmupEnabled).to.be(false);
                expect(data.autoWarmupStage).to.be.a('number');
                expect(data.autoWarmupStage).to.be("0");
                expect(data.comcastSettings).to.be.a('string');
                expect(data.comcastSettings).to.be("");
                expect(data.created).to.be.a('number');
                expect(data.created).to.be("0");
                expect(data.defaultSettings).to.be.a('string');
                expect(data.defaultSettings).to.be("");
                expect(data.gmailSettings).to.be.a('string');
                expect(data.gmailSettings).to.be("");
                expect(data.gmxSettings).to.be.a('string');
                expect(data.gmxSettings).to.be("");
                expect(data.icloudSettings).to.be.a('string');
                expect(data.icloudSettings).to.be("");
                expect(data.id).to.be.a('number');
                expect(data.id).to.be("0");
                expect(data.mailruSettings).to.be.a('string');
                expect(data.mailruSettings).to.be("");
                expect(data.microsoftSettings).to.be.a('string');
                expect(data.microsoftSettings).to.be("");
                expect(data.publicIP).to.be.a('string');
                expect(data.publicIP).to.be("");
                expect(data.qqSettings).to.be.a('string');
                expect(data.qqSettings).to.be("");
                expect(data.reverseDNSHostname).to.be.a('string');
                expect(data.reverseDNSHostname).to.be("");
                expect(data.systemDomain).to.be.a(SendPostApi.ModelsSystemDomain);
                      expect(data.systemDomain.created).to.be.a('number');
                  expect(data.systemDomain.created).to.be("0");
                  expect(data.systemDomain.dkim).to.be.a(SendPostApi.ModelsSystemDNSRecord);
                        expect(data.systemDomain.dkim.host).to.be.a('string');
                    expect(data.systemDomain.dkim.host).to.be("");
                    expect(data.systemDomain.dkim.textValue).to.be.a('string');
                    expect(data.systemDomain.dkim.textValue).to.be("");
                    expect(data.systemDomain.dkim.type).to.be.a('string');
                    expect(data.systemDomain.dkim.type).to.be("");
                  expect(data.systemDomain.dkimConfig).to.be.a('string');
                  expect(data.systemDomain.dkimConfig).to.be("");
                  expect(data.systemDomain.dkimVerified).to.be.a('boolean');
                  expect(data.systemDomain.dkimVerified).to.be(false);
                  expect(data.systemDomain.id).to.be.a('number');
                  expect(data.systemDomain.id).to.be("0");
                  expect(data.systemDomain.mailboxVerified).to.be.a('boolean');
                  expect(data.systemDomain.mailboxVerified).to.be(false);
                  expect(data.systemDomain.name).to.be.a('string');
                  expect(data.systemDomain.name).to.be("");
                  expect(data.systemDomain.spf).to.be.a(SendPostApi.ModelsSystemDNSRecord);
                        expect(data.systemDomain.spf.host).to.be.a('string');
                    expect(data.systemDomain.spf.host).to.be("");
                    expect(data.systemDomain.spf.textValue).to.be.a('string');
                    expect(data.systemDomain.spf.textValue).to.be("");
                    expect(data.systemDomain.spf.type).to.be.a('string');
                    expect(data.systemDomain.spf.type).to.be("");
                  expect(data.systemDomain.spfVerified).to.be.a('boolean');
                  expect(data.systemDomain.spfVerified).to.be(false);
                  expect(data.systemDomain.track).to.be.a(SendPostApi.ModelsSystemDNSRecord);
                        expect(data.systemDomain.track.host).to.be.a('string');
                    expect(data.systemDomain.track.host).to.be("");
                    expect(data.systemDomain.track.textValue).to.be.a('string');
                    expect(data.systemDomain.track.textValue).to.be("");
                    expect(data.systemDomain.track.type).to.be.a('string');
                    expect(data.systemDomain.track.type).to.be("");
                  expect(data.systemDomain.trackVerified).to.be.a('boolean');
                  expect(data.systemDomain.trackVerified).to.be(false);
                expect(data.type).to.be.a(SendPostApi.ModelsIPType);
                    expect(data.yahooSettings).to.be.a('string');
                expect(data.yahooSettings).to.be("");
                expect(data.yandexSettings).to.be.a('string');
                expect(data.yandexSettings).to.be("");
                expect(data.zohoSettings).to.be.a('string');
                expect(data.zohoSettings).to.be("");

                      }
            }
            expect(data.name).to.be.a('string');
            expect(data.name).to.be("");
            expect(data.routingMetaData).to.be.a('string');
            expect(data.routingMetaData).to.be("");
            expect(data.routingStrategy).to.be.a('number');
            expect(data.routingStrategy).to.be("0");
            expect(data.type).to.be.a(SendPostApi.ModelsIPPoolType);
    
            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('accountIPPoolRouterGetAll', function() {
        it('should call accountIPPoolRouterGetAll successfully', function(done) {
          // TODO: uncomment, update parameter values for accountIPPoolRouterGetAll call and complete the assertions
          /*
          var xAccountApiKey = "xAccountApiKey_example";
          var opts = {};
          opts.offset = 789;
          opts.limit = 789;
          opts.search = "search_example";

          instance.accountIPPoolRouterGetAll(xAccountApiKey, opts, function(error, data, response) {
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
              expect(data).to.be.a(SendPostApi.ModelsAccountIPPool);
              expect(data.created).to.be.a('number');
              expect(data.created).to.be("0");
              expect(data.id).to.be.a('number');
              expect(data.id).to.be("0");
              {
                let dataCtr = data.ips;
                expect(dataCtr).to.be.an(Array);
                expect(dataCtr).to.not.be.empty();
                for (let p in dataCtr) {
                  let data = dataCtr[p];
                  expect(data).to.be.a(SendPostApi.ModelsIP);
                  expect(data.aolSettings).to.be.a('string');
                  expect(data.aolSettings).to.be("");
                  expect(data.autoWarmupEnabled).to.be.a('boolean');
                  expect(data.autoWarmupEnabled).to.be(false);
                  expect(data.autoWarmupStage).to.be.a('number');
                  expect(data.autoWarmupStage).to.be("0");
                  expect(data.comcastSettings).to.be.a('string');
                  expect(data.comcastSettings).to.be("");
                  expect(data.created).to.be.a('number');
                  expect(data.created).to.be("0");
                  expect(data.defaultSettings).to.be.a('string');
                  expect(data.defaultSettings).to.be("");
                  expect(data.gmailSettings).to.be.a('string');
                  expect(data.gmailSettings).to.be("");
                  expect(data.gmxSettings).to.be.a('string');
                  expect(data.gmxSettings).to.be("");
                  expect(data.icloudSettings).to.be.a('string');
                  expect(data.icloudSettings).to.be("");
                  expect(data.id).to.be.a('number');
                  expect(data.id).to.be("0");
                  expect(data.mailruSettings).to.be.a('string');
                  expect(data.mailruSettings).to.be("");
                  expect(data.microsoftSettings).to.be.a('string');
                  expect(data.microsoftSettings).to.be("");
                  expect(data.publicIP).to.be.a('string');
                  expect(data.publicIP).to.be("");
                  expect(data.qqSettings).to.be.a('string');
                  expect(data.qqSettings).to.be("");
                  expect(data.reverseDNSHostname).to.be.a('string');
                  expect(data.reverseDNSHostname).to.be("");
                  expect(data.systemDomain).to.be.a(SendPostApi.ModelsSystemDomain);
                        expect(data.systemDomain.created).to.be.a('number');
                    expect(data.systemDomain.created).to.be("0");
                    expect(data.systemDomain.dkim).to.be.a(SendPostApi.ModelsSystemDNSRecord);
                          expect(data.systemDomain.dkim.host).to.be.a('string');
                      expect(data.systemDomain.dkim.host).to.be("");
                      expect(data.systemDomain.dkim.textValue).to.be.a('string');
                      expect(data.systemDomain.dkim.textValue).to.be("");
                      expect(data.systemDomain.dkim.type).to.be.a('string');
                      expect(data.systemDomain.dkim.type).to.be("");
                    expect(data.systemDomain.dkimConfig).to.be.a('string');
                    expect(data.systemDomain.dkimConfig).to.be("");
                    expect(data.systemDomain.dkimVerified).to.be.a('boolean');
                    expect(data.systemDomain.dkimVerified).to.be(false);
                    expect(data.systemDomain.id).to.be.a('number');
                    expect(data.systemDomain.id).to.be("0");
                    expect(data.systemDomain.mailboxVerified).to.be.a('boolean');
                    expect(data.systemDomain.mailboxVerified).to.be(false);
                    expect(data.systemDomain.name).to.be.a('string');
                    expect(data.systemDomain.name).to.be("");
                    expect(data.systemDomain.spf).to.be.a(SendPostApi.ModelsSystemDNSRecord);
                          expect(data.systemDomain.spf.host).to.be.a('string');
                      expect(data.systemDomain.spf.host).to.be("");
                      expect(data.systemDomain.spf.textValue).to.be.a('string');
                      expect(data.systemDomain.spf.textValue).to.be("");
                      expect(data.systemDomain.spf.type).to.be.a('string');
                      expect(data.systemDomain.spf.type).to.be("");
                    expect(data.systemDomain.spfVerified).to.be.a('boolean');
                    expect(data.systemDomain.spfVerified).to.be(false);
                    expect(data.systemDomain.track).to.be.a(SendPostApi.ModelsSystemDNSRecord);
                          expect(data.systemDomain.track.host).to.be.a('string');
                      expect(data.systemDomain.track.host).to.be("");
                      expect(data.systemDomain.track.textValue).to.be.a('string');
                      expect(data.systemDomain.track.textValue).to.be("");
                      expect(data.systemDomain.track.type).to.be.a('string');
                      expect(data.systemDomain.track.type).to.be("");
                    expect(data.systemDomain.trackVerified).to.be.a('boolean');
                    expect(data.systemDomain.trackVerified).to.be(false);
                  expect(data.type).to.be.a(SendPostApi.ModelsIPType);
                      expect(data.yahooSettings).to.be.a('string');
                  expect(data.yahooSettings).to.be("");
                  expect(data.yandexSettings).to.be.a('string');
                  expect(data.yandexSettings).to.be("");
                  expect(data.zohoSettings).to.be.a('string');
                  expect(data.zohoSettings).to.be("");
  
                        }
              }
              expect(data.name).to.be.a('string');
              expect(data.name).to.be("");
              expect(data.routingMetaData).to.be.a('string');
              expect(data.routingMetaData).to.be("");
              expect(data.routingStrategy).to.be.a('number');
              expect(data.routingStrategy).to.be("0");
              expect(data.type).to.be.a(SendPostApi.ModelsIPPoolType);
      
            }

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('accountIPPoolRouterUpdate', function() {
        it('should call accountIPPoolRouterUpdate successfully', function(done) {
          // TODO: uncomment, update parameter values for accountIPPoolRouterUpdate call and complete the assertions
          /*
          var xAccountApiKey = "xAccountApiKey_example";
          var ippoolid = 789;
          var body = new SendPostApi.ModelsEIPPool();
          body.ips = [new SendPostApi.ModelsEIP()];
          body.ips[0].publicIP = "";
          body.name = "";
          body.routingMapping = ;
          body.routingStrategy = "0";

          instance.accountIPPoolRouterUpdate(xAccountApiKey, ippoolid, body, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(SendPostApi.ModelsAccountIPPool);
            expect(data.created).to.be.a('number');
            expect(data.created).to.be("0");
            expect(data.id).to.be.a('number');
            expect(data.id).to.be("0");
            {
              let dataCtr = data.ips;
              expect(dataCtr).to.be.an(Array);
              expect(dataCtr).to.not.be.empty();
              for (let p in dataCtr) {
                let data = dataCtr[p];
                expect(data).to.be.a(SendPostApi.ModelsIP);
                expect(data.aolSettings).to.be.a('string');
                expect(data.aolSettings).to.be("");
                expect(data.autoWarmupEnabled).to.be.a('boolean');
                expect(data.autoWarmupEnabled).to.be(false);
                expect(data.autoWarmupStage).to.be.a('number');
                expect(data.autoWarmupStage).to.be("0");
                expect(data.comcastSettings).to.be.a('string');
                expect(data.comcastSettings).to.be("");
                expect(data.created).to.be.a('number');
                expect(data.created).to.be("0");
                expect(data.defaultSettings).to.be.a('string');
                expect(data.defaultSettings).to.be("");
                expect(data.gmailSettings).to.be.a('string');
                expect(data.gmailSettings).to.be("");
                expect(data.gmxSettings).to.be.a('string');
                expect(data.gmxSettings).to.be("");
                expect(data.icloudSettings).to.be.a('string');
                expect(data.icloudSettings).to.be("");
                expect(data.id).to.be.a('number');
                expect(data.id).to.be("0");
                expect(data.mailruSettings).to.be.a('string');
                expect(data.mailruSettings).to.be("");
                expect(data.microsoftSettings).to.be.a('string');
                expect(data.microsoftSettings).to.be("");
                expect(data.publicIP).to.be.a('string');
                expect(data.publicIP).to.be("");
                expect(data.qqSettings).to.be.a('string');
                expect(data.qqSettings).to.be("");
                expect(data.reverseDNSHostname).to.be.a('string');
                expect(data.reverseDNSHostname).to.be("");
                expect(data.systemDomain).to.be.a(SendPostApi.ModelsSystemDomain);
                      expect(data.systemDomain.created).to.be.a('number');
                  expect(data.systemDomain.created).to.be("0");
                  expect(data.systemDomain.dkim).to.be.a(SendPostApi.ModelsSystemDNSRecord);
                        expect(data.systemDomain.dkim.host).to.be.a('string');
                    expect(data.systemDomain.dkim.host).to.be("");
                    expect(data.systemDomain.dkim.textValue).to.be.a('string');
                    expect(data.systemDomain.dkim.textValue).to.be("");
                    expect(data.systemDomain.dkim.type).to.be.a('string');
                    expect(data.systemDomain.dkim.type).to.be("");
                  expect(data.systemDomain.dkimConfig).to.be.a('string');
                  expect(data.systemDomain.dkimConfig).to.be("");
                  expect(data.systemDomain.dkimVerified).to.be.a('boolean');
                  expect(data.systemDomain.dkimVerified).to.be(false);
                  expect(data.systemDomain.id).to.be.a('number');
                  expect(data.systemDomain.id).to.be("0");
                  expect(data.systemDomain.mailboxVerified).to.be.a('boolean');
                  expect(data.systemDomain.mailboxVerified).to.be(false);
                  expect(data.systemDomain.name).to.be.a('string');
                  expect(data.systemDomain.name).to.be("");
                  expect(data.systemDomain.spf).to.be.a(SendPostApi.ModelsSystemDNSRecord);
                        expect(data.systemDomain.spf.host).to.be.a('string');
                    expect(data.systemDomain.spf.host).to.be("");
                    expect(data.systemDomain.spf.textValue).to.be.a('string');
                    expect(data.systemDomain.spf.textValue).to.be("");
                    expect(data.systemDomain.spf.type).to.be.a('string');
                    expect(data.systemDomain.spf.type).to.be("");
                  expect(data.systemDomain.spfVerified).to.be.a('boolean');
                  expect(data.systemDomain.spfVerified).to.be(false);
                  expect(data.systemDomain.track).to.be.a(SendPostApi.ModelsSystemDNSRecord);
                        expect(data.systemDomain.track.host).to.be.a('string');
                    expect(data.systemDomain.track.host).to.be("");
                    expect(data.systemDomain.track.textValue).to.be.a('string');
                    expect(data.systemDomain.track.textValue).to.be("");
                    expect(data.systemDomain.track.type).to.be.a('string');
                    expect(data.systemDomain.track.type).to.be("");
                  expect(data.systemDomain.trackVerified).to.be.a('boolean');
                  expect(data.systemDomain.trackVerified).to.be(false);
                expect(data.type).to.be.a(SendPostApi.ModelsIPType);
                    expect(data.yahooSettings).to.be.a('string');
                expect(data.yahooSettings).to.be("");
                expect(data.yandexSettings).to.be.a('string');
                expect(data.yandexSettings).to.be("");
                expect(data.zohoSettings).to.be.a('string');
                expect(data.zohoSettings).to.be("");

                      }
            }
            expect(data.name).to.be.a('string');
            expect(data.name).to.be("");
            expect(data.routingMetaData).to.be.a('string');
            expect(data.routingMetaData).to.be("");
            expect(data.routingStrategy).to.be.a('number');
            expect(data.routingStrategy).to.be("0");
            expect(data.type).to.be.a(SendPostApi.ModelsIPPoolType);
    
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
