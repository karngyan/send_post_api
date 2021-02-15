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
    instance = new SendPostApi.AccountdomainApi();
  });

  describe('(package)', function() {
    describe('AccountdomainApi', function() {
      describe('accountDomainRouterCount', function() {
        it('should call accountDomainRouterCount successfully', function(done) {
          // TODO: uncomment, update parameter values for accountDomainRouterCount call and complete the assertions
          /*
          var xAccountApiKey = "xAccountApiKey_example";
          var opts = {};
          opts.search = "search_example";

          instance.accountDomainRouterCount(xAccountApiKey, opts, function(error, data, response) {
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
      describe('accountDomainRouterGetAll', function() {
        it('should call accountDomainRouterGetAll successfully', function(done) {
          // TODO: uncomment, update parameter values for accountDomainRouterGetAll call and complete the assertions
          /*
          var xAccountApiKey = "xAccountApiKey_example";
          var opts = {};
          opts.offset = 789;
          opts.limit = 789;
          opts.search = "search_example";

          instance.accountDomainRouterGetAll(xAccountApiKey, opts, function(error, data, response) {
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
              expect(data).to.be.a(SendPostApi.ModelsAccountDomain);
              expect(data.created).to.be.a('number');
              expect(data.created).to.be("0");
              expect(data.dkim).to.be.a(SendPostApi.ModelsDNSRecord);
                    expect(data.dkim.host).to.be.a('string');
                expect(data.dkim.host).to.be("");
                expect(data.dkim.textValue).to.be.a('string');
                expect(data.dkim.textValue).to.be("");
                expect(data.dkim.type).to.be.a('string');
                expect(data.dkim.type).to.be("");
              expect(data.dkimConfig).to.be.a('string');
              expect(data.dkimConfig).to.be("");
              expect(data.dkimVerified).to.be.a('boolean');
              expect(data.dkimVerified).to.be(false);
              expect(data.id).to.be.a('number');
              expect(data.id).to.be("0");
              expect(data.name).to.be.a('string');
              expect(data.name).to.be("");
              expect(data.returnPath).to.be.a(SendPostApi.ModelsDNSRecord);
                    expect(data.returnPath.host).to.be.a('string');
                expect(data.returnPath.host).to.be("");
                expect(data.returnPath.textValue).to.be.a('string');
                expect(data.returnPath.textValue).to.be("");
                expect(data.returnPath.type).to.be.a('string');
                expect(data.returnPath.type).to.be("");
              expect(data.returnPathVerified).to.be.a('boolean');
              expect(data.returnPathVerified).to.be(false);
              expect(data.subAccount).to.be.a(SendPostApi.ModelsSubAccount);
                    expect(data.subAccount.apiKey).to.be.a('string');
                expect(data.subAccount.apiKey).to.be("");
                expect(data.subAccount.created).to.be.a('number');
                expect(data.subAccount.created).to.be("0");
                expect(data.subAccount.id).to.be.a('number');
                expect(data.subAccount.id).to.be("0");
                {
                  let dataCtr = data.subAccount.labels;
                  expect(dataCtr).to.be.an(Array);
                  expect(dataCtr).to.not.be.empty();
                  for (let p in dataCtr) {
                    let data = dataCtr[p];
                    expect(data).to.be.a(SendPostApi.ModelsLabel);
                    expect(data.color).to.be.a('string');
                    expect(data.color).to.be("");
                    expect(data.created).to.be.a('number');
                    expect(data.created).to.be("0");
                    expect(data.id).to.be.a('number');
                    expect(data.id).to.be("0");
                    expect(data.name).to.be.a('string');
                    expect(data.name).to.be("");
    
                          }
                }
                expect(data.subAccount.name).to.be.a('string');
                expect(data.subAccount.name).to.be("");
                {
                  let dataCtr = data.subAccount.smtpAuths;
                  expect(dataCtr).to.be.an(Array);
                  expect(dataCtr).to.not.be.empty();
                  for (let p in dataCtr) {
                    let data = dataCtr[p];
                    expect(data).to.be.a(SendPostApi.ModelsSMTPAuth);
                    expect(data.created).to.be.a('number');
                    expect(data.created).to.be("0");
                    expect(data.id).to.be.a('number');
                    expect(data.id).to.be("0");
                    expect(data.password).to.be.a('string');
                    expect(data.password).to.be("");
                    expect(data.updated).to.be.a('number');
                    expect(data.updated).to.be("0");
                    expect(data.username).to.be.a('string');
                    expect(data.username).to.be("");
    
                          }
                }
                expect(data.subAccount.type).to.be.a(SendPostApi.ModelsSubAccountType);
        
              expect(data.track).to.be.a(SendPostApi.ModelsDNSRecord);
                    expect(data.track.host).to.be.a('string');
                expect(data.track.host).to.be("");
                expect(data.track.textValue).to.be.a('string');
                expect(data.track.textValue).to.be("");
                expect(data.track.type).to.be.a('string');
                expect(data.track.type).to.be("");
              expect(data.trackVerified).to.be.a('boolean');
              expect(data.trackVerified).to.be(false);
              expect(data.verified).to.be.a('boolean');
              expect(data.verified).to.be(false);
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
