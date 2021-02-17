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
    instance = new SendPostApi.AccountintegrationApi();
  });

  describe('(package)', function() {
    describe('AccountintegrationApi', function() {
      describe('accountIntegrationRouterCount', function() {
        it('should call accountIntegrationRouterCount successfully', function(done) {
          // TODO: uncomment, update parameter values for accountIntegrationRouterCount call and complete the assertions
          /*
          var xAccountApiKey = "xAccountApiKey_example";

          instance.accountIntegrationRouterCount(xAccountApiKey, function(error, data, response) {
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
      describe('accountIntegrationRouterCreate', function() {
        it('should call accountIntegrationRouterCreate successfully', function(done) {
          // TODO: uncomment, update parameter values for accountIntegrationRouterCreate call and complete the assertions
          /*
          var xAccountApiKey = "xAccountApiKey_example";
          var itype = "itype_example";
          var body = new SendPostApi.ModelsEIntegration();
          body.key = "";
          body.settings = new SendPostApi.ModelsIntegrationSettings();
          body.settings.autoEnableMonitoring = false;
          body.settings.emailTo = [""];
          body.settings.frequency = new SendPostApi.ModelsFrequencyType();
          body.settings.receiveReports = false;

          instance.accountIntegrationRouterCreate(xAccountApiKey, itype, body, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(SendPostApi.ModelsIntegration);
            expect(data.created).to.be.a('number');
            expect(data.created).to.be("0");
            expect(data.id).to.be.a('number');
            expect(data.id).to.be("0");
            expect(data.key).to.be.a('string');
            expect(data.key).to.be("");
            expect(data.settings).to.be.a('string');
            expect(data.settings).to.be("");
            expect(data.type).to.be.a(SendPostApi.ModelsIntegrationType);
    
            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('accountIntegrationRouterDelete', function() {
        it('should call accountIntegrationRouterDelete successfully', function(done) {
          // TODO: uncomment, update parameter values for accountIntegrationRouterDelete call and complete the assertions
          /*
          var xAccountApiKey = "xAccountApiKey_example";
          var itype = "itype_example";

          instance.accountIntegrationRouterDelete(xAccountApiKey, itype, function(error, data, response) {
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
      describe('accountIntegrationRouterDisableGlockappsIPMonitoring', function() {
        it('should call accountIntegrationRouterDisableGlockappsIPMonitoring successfully', function(done) {
          // TODO: uncomment, update parameter values for accountIntegrationRouterDisableGlockappsIPMonitoring call and complete the assertions
          /*
          var xAccountApiKey = "xAccountApiKey_example";
          var ipid = 789;

          instance.accountIntegrationRouterDisableGlockappsIPMonitoring(xAccountApiKey, ipid, function(error, data, response) {
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
      describe('accountIntegrationRouterEnableGlockappsIPMonitoring', function() {
        it('should call accountIntegrationRouterEnableGlockappsIPMonitoring successfully', function(done) {
          // TODO: uncomment, update parameter values for accountIntegrationRouterEnableGlockappsIPMonitoring call and complete the assertions
          /*
          var xAccountApiKey = "xAccountApiKey_example";
          var ipid = 789;

          instance.accountIntegrationRouterEnableGlockappsIPMonitoring(xAccountApiKey, ipid, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(SendPostApi.ModelsResponse);
            expect(data.message).to.be.a('string');
            expect(data.message).to.be("");
            expect(data.status).to.be.a('string');
            expect(data.status).to.be("");

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('accountIntegrationRouterGetAll', function() {
        it('should call accountIntegrationRouterGetAll successfully', function(done) {
          // TODO: uncomment, update parameter values for accountIntegrationRouterGetAll call and complete the assertions
          /*
          var xAccountApiKey = "xAccountApiKey_example";

          instance.accountIntegrationRouterGetAll(xAccountApiKey, function(error, data, response) {
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
              expect(data).to.be.a(SendPostApi.ModelsIntegration);
              expect(data.created).to.be.a('number');
              expect(data.created).to.be("0");
              expect(data.id).to.be.a('number');
              expect(data.id).to.be("0");
              expect(data.key).to.be.a('string');
              expect(data.key).to.be("");
              expect(data.settings).to.be.a('string');
              expect(data.settings).to.be("");
              expect(data.type).to.be.a(SendPostApi.ModelsIntegrationType);
      
            }

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('accountIntegrationRouterGetMonitoredIPStats', function() {
        it('should call accountIntegrationRouterGetMonitoredIPStats successfully', function(done) {
          // TODO: uncomment, update parameter values for accountIntegrationRouterGetMonitoredIPStats call and complete the assertions
          /*
          var xAccountApiKey = "xAccountApiKey_example";
          var ipid = 789;
          var opts = {};
          opts.from = "from_example";
          opts.to = "to_example";

          instance.accountIntegrationRouterGetMonitoredIPStats(xAccountApiKey, ipid, opts, function(error, data, response) {
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
              expect(data).to.be.a(SendPostApi.ModelsRGlockappsMonitorStat);
              expect(data._date).to.be.a('string');
              expect(data._date).to.be("");
              expect(data.stat).to.be.a(SendPostApi.ModelsGlockappsMonitorStat);
                    expect(data.stat.day).to.be.a('number');
                expect(data.stat.day).to.be("0");
                expect(data.stat.listedCount).to.be.a('number');
                expect(data.stat.listedCount).to.be("0");
                {
                  let dataCtr = data.stat.listedIn;
                  expect(dataCtr).to.be.an(Array);
                  expect(dataCtr).to.not.be.empty();
                  for (let p in dataCtr) {
                    let data = dataCtr[p];
                    expect(data).to.be.a(SendPostApi.ModelsGlockappsBlacklist);
                    expect(data.server).to.be.a('string');
                    expect(data.server).to.be("");
                    expect(data.status).to.be.a(SendPostApi.ModelsBlacklistStatus);
                        expect(data.txt).to.be.a('string');
                    expect(data.txt).to.be("");
    
                          }
                }
                expect(data.stat.month).to.be.a('number');
                expect(data.stat.month).to.be("0");
                expect(data.stat.senderScore).to.be.a('number');
                expect(data.stat.senderScore).to.be("0");
                expect(data.stat.year).to.be.a('number');
                expect(data.stat.year).to.be("0");
            }

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('accountIntegrationRouterUpdate', function() {
        it('should call accountIntegrationRouterUpdate successfully', function(done) {
          // TODO: uncomment, update parameter values for accountIntegrationRouterUpdate call and complete the assertions
          /*
          var xAccountApiKey = "xAccountApiKey_example";
          var itype = "itype_example";
          var body = new SendPostApi.ModelsEIntegration();
          body.key = "";
          body.settings = new SendPostApi.ModelsIntegrationSettings();
          body.settings.autoEnableMonitoring = false;
          body.settings.emailTo = [""];
          body.settings.frequency = new SendPostApi.ModelsFrequencyType();
          body.settings.receiveReports = false;

          instance.accountIntegrationRouterUpdate(xAccountApiKey, itype, body, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(SendPostApi.ModelsIntegration);
            expect(data.created).to.be.a('number');
            expect(data.created).to.be("0");
            expect(data.id).to.be.a('number');
            expect(data.id).to.be("0");
            expect(data.key).to.be.a('string');
            expect(data.key).to.be("");
            expect(data.settings).to.be.a('string');
            expect(data.settings).to.be("");
            expect(data.type).to.be.a(SendPostApi.ModelsIntegrationType);
    
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
