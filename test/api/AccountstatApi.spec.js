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
 * Swagger Codegen version: 2.4.13
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
    instance = new SendPostApi.AccountstatApi();
  });

  describe('(package)', function() {
    describe('AccountstatApi', function() {
      describe('accountStatsRouterGetAllAccountStats', function() {
        it('should call accountStatsRouterGetAllAccountStats successfully', function(done) {
          // TODO: uncomment, update parameter values for accountStatsRouterGetAllAccountStats call and complete the assertions
          /*
          var xAccountApiKey = "xAccountApiKey_example";

          instance.accountStatsRouterGetAllAccountStats(xAccountApiKey, function(error, data, response) {
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
              expect(data).to.be.a(SendPostApi.ModelsRStats);
              expect(data._date).to.be.a('string');
              expect(data._date).to.be("");
              expect(data.stats).to.be.a(SendPostApi.ModelsStats);
                    expect(data.stats.clicked).to.be.a('number');
                expect(data.stats.clicked).to.be("0");
                expect(data.stats.delivered).to.be.a('number');
                expect(data.stats.delivered).to.be("0");
                expect(data.stats.dropped).to.be.a('number');
                expect(data.stats.dropped).to.be("0");
                expect(data.stats.hardBounced).to.be.a('number');
                expect(data.stats.hardBounced).to.be("0");
                expect(data.stats.opened).to.be.a('number');
                expect(data.stats.opened).to.be("0");
                expect(data.stats.processed).to.be.a('number');
                expect(data.stats.processed).to.be("0");
                expect(data.stats.softBounced).to.be.a('number');
                expect(data.stats.softBounced).to.be("0");
                expect(data.stats.spam).to.be.a('number');
                expect(data.stats.spam).to.be("0");
                expect(data.stats.unsubscribed).to.be.a('number');
                expect(data.stats.unsubscribed).to.be("0");
            }

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('accountStatsRouterGetAllAccountStatsByGroup', function() {
        it('should call accountStatsRouterGetAllAccountStatsByGroup successfully', function(done) {
          // TODO: uncomment, update parameter values for accountStatsRouterGetAllAccountStatsByGroup call and complete the assertions
          /*
          var xAccountApiKey = "xAccountApiKey_example";
          var group = "group_example";

          instance.accountStatsRouterGetAllAccountStatsByGroup(xAccountApiKey, group, function(error, data, response) {
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
              expect(data).to.be.a(SendPostApi.ModelsRStats);
              expect(data._date).to.be.a('string');
              expect(data._date).to.be("");
              expect(data.stats).to.be.a(SendPostApi.ModelsStats);
                    expect(data.stats.clicked).to.be.a('number');
                expect(data.stats.clicked).to.be("0");
                expect(data.stats.delivered).to.be.a('number');
                expect(data.stats.delivered).to.be("0");
                expect(data.stats.dropped).to.be.a('number');
                expect(data.stats.dropped).to.be("0");
                expect(data.stats.hardBounced).to.be.a('number');
                expect(data.stats.hardBounced).to.be("0");
                expect(data.stats.opened).to.be.a('number');
                expect(data.stats.opened).to.be("0");
                expect(data.stats.processed).to.be.a('number');
                expect(data.stats.processed).to.be("0");
                expect(data.stats.softBounced).to.be.a('number');
                expect(data.stats.softBounced).to.be("0");
                expect(data.stats.spam).to.be.a('number');
                expect(data.stats.spam).to.be("0");
                expect(data.stats.unsubscribed).to.be.a('number');
                expect(data.stats.unsubscribed).to.be("0");
            }

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('accountStatsRouterGetAllAggregateAccountStats', function() {
        it('should call accountStatsRouterGetAllAggregateAccountStats successfully', function(done) {
          // TODO: uncomment, update parameter values for accountStatsRouterGetAllAggregateAccountStats call and complete the assertions
          /*
          var xAccountApiKey = "xAccountApiKey_example";

          instance.accountStatsRouterGetAllAggregateAccountStats(xAccountApiKey, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(SendPostApi.ModelsStats);
            expect(data.clicked).to.be.a('number');
            expect(data.clicked).to.be("0");
            expect(data.delivered).to.be.a('number');
            expect(data.delivered).to.be("0");
            expect(data.dropped).to.be.a('number');
            expect(data.dropped).to.be("0");
            expect(data.hardBounced).to.be.a('number');
            expect(data.hardBounced).to.be("0");
            expect(data.opened).to.be.a('number');
            expect(data.opened).to.be("0");
            expect(data.processed).to.be.a('number');
            expect(data.processed).to.be("0");
            expect(data.softBounced).to.be.a('number');
            expect(data.softBounced).to.be("0");
            expect(data.spam).to.be.a('number');
            expect(data.spam).to.be("0");
            expect(data.unsubscribed).to.be.a('number');
            expect(data.unsubscribed).to.be("0");

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('accountStatsRouterGetAllAggregateAccountStatsByGroup', function() {
        it('should call accountStatsRouterGetAllAggregateAccountStatsByGroup successfully', function(done) {
          // TODO: uncomment, update parameter values for accountStatsRouterGetAllAggregateAccountStatsByGroup call and complete the assertions
          /*
          var xAccountApiKey = "xAccountApiKey_example";
          var group = "group_example";

          instance.accountStatsRouterGetAllAggregateAccountStatsByGroup(xAccountApiKey, group, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(SendPostApi.ModelsStats);
            expect(data.clicked).to.be.a('number');
            expect(data.clicked).to.be("0");
            expect(data.delivered).to.be.a('number');
            expect(data.delivered).to.be("0");
            expect(data.dropped).to.be.a('number');
            expect(data.dropped).to.be("0");
            expect(data.hardBounced).to.be.a('number');
            expect(data.hardBounced).to.be("0");
            expect(data.opened).to.be.a('number');
            expect(data.opened).to.be("0");
            expect(data.processed).to.be.a('number');
            expect(data.processed).to.be("0");
            expect(data.softBounced).to.be.a('number');
            expect(data.softBounced).to.be("0");
            expect(data.spam).to.be.a('number');
            expect(data.spam).to.be("0");
            expect(data.unsubscribed).to.be.a('number');
            expect(data.unsubscribed).to.be("0");

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
