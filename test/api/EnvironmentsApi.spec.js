/*
 * LaunchDarkly REST API
 * Build custom integrations with the LaunchDarkly REST API
 *
 * OpenAPI spec version: 5.3.0
 * Contact: support@launchdarkly.com
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.4.17
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
    factory(root.expect, root.LaunchDarklyApi);
  }
}(this, function(expect, LaunchDarklyApi) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new LaunchDarklyApi.EnvironmentsApi();
  });

  describe('(package)', function() {
    describe('EnvironmentsApi', function() {
      describe('deleteEnvironment', function() {
        it('should call deleteEnvironment successfully', function(done) {
          // TODO: uncomment, update parameter values for deleteEnvironment call
          /*
          var projectKey = "projectKey_example";
          var environmentKey = "environmentKey_example";

          instance.deleteEnvironment(projectKey, environmentKey, function(error, data, response) {
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
      describe('getEnvironment', function() {
        it('should call getEnvironment successfully', function(done) {
          // TODO: uncomment, update parameter values for getEnvironment call and complete the assertions
          /*
          var projectKey = "projectKey_example";
          var environmentKey = "environmentKey_example";

          instance.getEnvironment(projectKey, environmentKey, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(LaunchDarklyApi.Environment);
            expect(data.links).to.be.a(LaunchDarklyApi.Links);
                  expect(data.links.self).to.be.a(LaunchDarklyApi.Link);
                    expect(data.links.self.href).to.be.a('string');
                expect(data.links.self.href).to.be("/api/v2/endpoint");
                expect(data.links.self.type).to.be.a('string');
                expect(data.links.self.type).to.be("application/json");
              expect(data.links.next).to.be.a(LaunchDarklyApi.Link);
                    expect(data.links.next.href).to.be.a('string');
                expect(data.links.next.href).to.be("/api/v2/endpoint");
                expect(data.links.next.type).to.be.a('string');
                expect(data.links.next.type).to.be("application/json");
            expect(data.id).to.be.a(LaunchDarklyApi.Id);
                expect(data.key).to.be.a('string');
            expect(data.key).to.be("production");
            expect(data.name).to.be.a('string');
            expect(data.name).to.be("Production");
            expect(data.apiKey).to.be.a('string');
            expect(data.apiKey).to.be("XXX");
            expect(data.mobileKey).to.be.a('string');
            expect(data.mobileKey).to.be("XXX");
            expect(data.color).to.be.a('string');
            expect(data.color).to.be("417505");
            expect(data.defaultTtl).to.be.a('number');
            expect(data.defaultTtl).to.be(0.0);
            expect(data.secureMode).to.be.a('boolean');
            expect(data.secureMode).to.be(false);
            expect(data.defaultTrackEvents).to.be.a('boolean');
            expect(data.defaultTrackEvents).to.be(false);
            {
              let dataCtr = data.tags;
              expect(dataCtr).to.be.an(Array);
              expect(dataCtr).to.not.be.empty();
              for (let p in dataCtr) {
                let data = dataCtr[p];
                expect(data).to.be.a('string');
                expect(data).to.be("");
              }
            }
            expect(data.requireComments).to.be.a('boolean');
            expect(data.requireComments).to.be(false);
            expect(data.confirmChanges).to.be.a('boolean');
            expect(data.confirmChanges).to.be(false);
            expect(data.approvalSettings).to.be.a(LaunchDarklyApi.EnvironmentApprovalSettings);
                  expect(data.approvalSettings.serviceKind).to.be.a('string');
              expect(data.approvalSettings.serviceKind).to.be("launchdarkly");
              expect(data.approvalSettings.required).to.be.a('boolean');
              expect(data.approvalSettings.required).to.be(false);
              expect(data.approvalSettings.canReviewOwnRequest).to.be.a('boolean');
              expect(data.approvalSettings.canReviewOwnRequest).to.be(false);
              expect(data.approvalSettings.minNumApprovals).to.be.a('number');
              expect(data.approvalSettings.minNumApprovals).to.be(2);
              expect(data.approvalSettings.canApplyDeclinedChanges).to.be.a('boolean');
              expect(data.approvalSettings.canApplyDeclinedChanges).to.be(false);
              {
                let dataCtr = data.approvalSettings.requiredApprovalTags;
                expect(dataCtr).to.be.an(Array);
                expect(dataCtr).to.not.be.empty();
                for (let p in dataCtr) {
                  let data = dataCtr[p];
                  expect(data).to.be.a('string');
                  expect(data).to.be("");
                }
              }

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('patchEnvironment', function() {
        it('should call patchEnvironment successfully', function(done) {
          // TODO: uncomment, update parameter values for patchEnvironment call and complete the assertions
          /*
          var projectKey = "projectKey_example";
          var environmentKey = "environmentKey_example";
          var patchDelta = [new LaunchDarklyApi.PatchOperation()];
          patchDelta[0].op = "replace";
          patchDelta[0].path = "/name";
          patchDelta[0].value = "My resource name";

          instance.patchEnvironment(projectKey, environmentKey, patchDelta, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(LaunchDarklyApi.Environment);
            expect(data.links).to.be.a(LaunchDarklyApi.Links);
                  expect(data.links.self).to.be.a(LaunchDarklyApi.Link);
                    expect(data.links.self.href).to.be.a('string');
                expect(data.links.self.href).to.be("/api/v2/endpoint");
                expect(data.links.self.type).to.be.a('string');
                expect(data.links.self.type).to.be("application/json");
              expect(data.links.next).to.be.a(LaunchDarklyApi.Link);
                    expect(data.links.next.href).to.be.a('string');
                expect(data.links.next.href).to.be("/api/v2/endpoint");
                expect(data.links.next.type).to.be.a('string');
                expect(data.links.next.type).to.be("application/json");
            expect(data.id).to.be.a(LaunchDarklyApi.Id);
                expect(data.key).to.be.a('string');
            expect(data.key).to.be("production");
            expect(data.name).to.be.a('string');
            expect(data.name).to.be("Production");
            expect(data.apiKey).to.be.a('string');
            expect(data.apiKey).to.be("XXX");
            expect(data.mobileKey).to.be.a('string');
            expect(data.mobileKey).to.be("XXX");
            expect(data.color).to.be.a('string');
            expect(data.color).to.be("417505");
            expect(data.defaultTtl).to.be.a('number');
            expect(data.defaultTtl).to.be(0.0);
            expect(data.secureMode).to.be.a('boolean');
            expect(data.secureMode).to.be(false);
            expect(data.defaultTrackEvents).to.be.a('boolean');
            expect(data.defaultTrackEvents).to.be(false);
            {
              let dataCtr = data.tags;
              expect(dataCtr).to.be.an(Array);
              expect(dataCtr).to.not.be.empty();
              for (let p in dataCtr) {
                let data = dataCtr[p];
                expect(data).to.be.a('string');
                expect(data).to.be("");
              }
            }
            expect(data.requireComments).to.be.a('boolean');
            expect(data.requireComments).to.be(false);
            expect(data.confirmChanges).to.be.a('boolean');
            expect(data.confirmChanges).to.be(false);
            expect(data.approvalSettings).to.be.a(LaunchDarklyApi.EnvironmentApprovalSettings);
                  expect(data.approvalSettings.serviceKind).to.be.a('string');
              expect(data.approvalSettings.serviceKind).to.be("launchdarkly");
              expect(data.approvalSettings.required).to.be.a('boolean');
              expect(data.approvalSettings.required).to.be(false);
              expect(data.approvalSettings.canReviewOwnRequest).to.be.a('boolean');
              expect(data.approvalSettings.canReviewOwnRequest).to.be(false);
              expect(data.approvalSettings.minNumApprovals).to.be.a('number');
              expect(data.approvalSettings.minNumApprovals).to.be(2);
              expect(data.approvalSettings.canApplyDeclinedChanges).to.be.a('boolean');
              expect(data.approvalSettings.canApplyDeclinedChanges).to.be(false);
              {
                let dataCtr = data.approvalSettings.requiredApprovalTags;
                expect(dataCtr).to.be.an(Array);
                expect(dataCtr).to.not.be.empty();
                for (let p in dataCtr) {
                  let data = dataCtr[p];
                  expect(data).to.be.a('string');
                  expect(data).to.be("");
                }
              }

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('postEnvironment', function() {
        it('should call postEnvironment successfully', function(done) {
          // TODO: uncomment, update parameter values for postEnvironment call and complete the assertions
          /*
          var projectKey = "projectKey_example";
          var environmentBody = new LaunchDarklyApi.EnvironmentPost();
          environmentBody.name = "Development";
          environmentBody.key = "dev";
          environmentBody.color = "417505";
          environmentBody.defaultTtl = 0.0;
          environmentBody.secureMode = false;
          environmentBody.defaultTrackEvents = false;
          environmentBody.tags = ["tag1","tag2"];
          environmentBody.requireComments = false;
          environmentBody.confirmChanges = false;

          instance.postEnvironment(projectKey, environmentBody, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(LaunchDarklyApi.Environment);
            expect(data.links).to.be.a(LaunchDarklyApi.Links);
                  expect(data.links.self).to.be.a(LaunchDarklyApi.Link);
                    expect(data.links.self.href).to.be.a('string');
                expect(data.links.self.href).to.be("/api/v2/endpoint");
                expect(data.links.self.type).to.be.a('string');
                expect(data.links.self.type).to.be("application/json");
              expect(data.links.next).to.be.a(LaunchDarklyApi.Link);
                    expect(data.links.next.href).to.be.a('string');
                expect(data.links.next.href).to.be("/api/v2/endpoint");
                expect(data.links.next.type).to.be.a('string');
                expect(data.links.next.type).to.be("application/json");
            expect(data.id).to.be.a(LaunchDarklyApi.Id);
                expect(data.key).to.be.a('string');
            expect(data.key).to.be("production");
            expect(data.name).to.be.a('string');
            expect(data.name).to.be("Production");
            expect(data.apiKey).to.be.a('string');
            expect(data.apiKey).to.be("XXX");
            expect(data.mobileKey).to.be.a('string');
            expect(data.mobileKey).to.be("XXX");
            expect(data.color).to.be.a('string');
            expect(data.color).to.be("417505");
            expect(data.defaultTtl).to.be.a('number');
            expect(data.defaultTtl).to.be(0.0);
            expect(data.secureMode).to.be.a('boolean');
            expect(data.secureMode).to.be(false);
            expect(data.defaultTrackEvents).to.be.a('boolean');
            expect(data.defaultTrackEvents).to.be(false);
            {
              let dataCtr = data.tags;
              expect(dataCtr).to.be.an(Array);
              expect(dataCtr).to.not.be.empty();
              for (let p in dataCtr) {
                let data = dataCtr[p];
                expect(data).to.be.a('string');
                expect(data).to.be("");
              }
            }
            expect(data.requireComments).to.be.a('boolean');
            expect(data.requireComments).to.be(false);
            expect(data.confirmChanges).to.be.a('boolean');
            expect(data.confirmChanges).to.be(false);
            expect(data.approvalSettings).to.be.a(LaunchDarklyApi.EnvironmentApprovalSettings);
                  expect(data.approvalSettings.serviceKind).to.be.a('string');
              expect(data.approvalSettings.serviceKind).to.be("launchdarkly");
              expect(data.approvalSettings.required).to.be.a('boolean');
              expect(data.approvalSettings.required).to.be(false);
              expect(data.approvalSettings.canReviewOwnRequest).to.be.a('boolean');
              expect(data.approvalSettings.canReviewOwnRequest).to.be(false);
              expect(data.approvalSettings.minNumApprovals).to.be.a('number');
              expect(data.approvalSettings.minNumApprovals).to.be(2);
              expect(data.approvalSettings.canApplyDeclinedChanges).to.be.a('boolean');
              expect(data.approvalSettings.canApplyDeclinedChanges).to.be(false);
              {
                let dataCtr = data.approvalSettings.requiredApprovalTags;
                expect(dataCtr).to.be.an(Array);
                expect(dataCtr).to.not.be.empty();
                for (let p in dataCtr) {
                  let data = dataCtr[p];
                  expect(data).to.be.a('string');
                  expect(data).to.be("");
                }
              }

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('resetEnvironmentMobileKey', function() {
        it('should call resetEnvironmentMobileKey successfully', function(done) {
          // TODO: uncomment, update parameter values for resetEnvironmentMobileKey call and complete the assertions
          /*
          var projectKey = "projectKey_example";
          var environmentKey = "environmentKey_example";
          var opts = {};
          opts.expiry = 789;

          instance.resetEnvironmentMobileKey(projectKey, environmentKey, opts, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(LaunchDarklyApi.Environment);
            expect(data.links).to.be.a(LaunchDarklyApi.Links);
                  expect(data.links.self).to.be.a(LaunchDarklyApi.Link);
                    expect(data.links.self.href).to.be.a('string');
                expect(data.links.self.href).to.be("/api/v2/endpoint");
                expect(data.links.self.type).to.be.a('string');
                expect(data.links.self.type).to.be("application/json");
              expect(data.links.next).to.be.a(LaunchDarklyApi.Link);
                    expect(data.links.next.href).to.be.a('string');
                expect(data.links.next.href).to.be("/api/v2/endpoint");
                expect(data.links.next.type).to.be.a('string');
                expect(data.links.next.type).to.be("application/json");
            expect(data.id).to.be.a(LaunchDarklyApi.Id);
                expect(data.key).to.be.a('string');
            expect(data.key).to.be("production");
            expect(data.name).to.be.a('string');
            expect(data.name).to.be("Production");
            expect(data.apiKey).to.be.a('string');
            expect(data.apiKey).to.be("XXX");
            expect(data.mobileKey).to.be.a('string');
            expect(data.mobileKey).to.be("XXX");
            expect(data.color).to.be.a('string');
            expect(data.color).to.be("417505");
            expect(data.defaultTtl).to.be.a('number');
            expect(data.defaultTtl).to.be(0.0);
            expect(data.secureMode).to.be.a('boolean');
            expect(data.secureMode).to.be(false);
            expect(data.defaultTrackEvents).to.be.a('boolean');
            expect(data.defaultTrackEvents).to.be(false);
            {
              let dataCtr = data.tags;
              expect(dataCtr).to.be.an(Array);
              expect(dataCtr).to.not.be.empty();
              for (let p in dataCtr) {
                let data = dataCtr[p];
                expect(data).to.be.a('string');
                expect(data).to.be("");
              }
            }
            expect(data.requireComments).to.be.a('boolean');
            expect(data.requireComments).to.be(false);
            expect(data.confirmChanges).to.be.a('boolean');
            expect(data.confirmChanges).to.be(false);
            expect(data.approvalSettings).to.be.a(LaunchDarklyApi.EnvironmentApprovalSettings);
                  expect(data.approvalSettings.serviceKind).to.be.a('string');
              expect(data.approvalSettings.serviceKind).to.be("launchdarkly");
              expect(data.approvalSettings.required).to.be.a('boolean');
              expect(data.approvalSettings.required).to.be(false);
              expect(data.approvalSettings.canReviewOwnRequest).to.be.a('boolean');
              expect(data.approvalSettings.canReviewOwnRequest).to.be(false);
              expect(data.approvalSettings.minNumApprovals).to.be.a('number');
              expect(data.approvalSettings.minNumApprovals).to.be(2);
              expect(data.approvalSettings.canApplyDeclinedChanges).to.be.a('boolean');
              expect(data.approvalSettings.canApplyDeclinedChanges).to.be(false);
              {
                let dataCtr = data.approvalSettings.requiredApprovalTags;
                expect(dataCtr).to.be.an(Array);
                expect(dataCtr).to.not.be.empty();
                for (let p in dataCtr) {
                  let data = dataCtr[p];
                  expect(data).to.be.a('string');
                  expect(data).to.be("");
                }
              }

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('resetEnvironmentSDKKey', function() {
        it('should call resetEnvironmentSDKKey successfully', function(done) {
          // TODO: uncomment, update parameter values for resetEnvironmentSDKKey call and complete the assertions
          /*
          var projectKey = "projectKey_example";
          var environmentKey = "environmentKey_example";
          var opts = {};
          opts.expiry = 789;

          instance.resetEnvironmentSDKKey(projectKey, environmentKey, opts, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(LaunchDarklyApi.Environment);
            expect(data.links).to.be.a(LaunchDarklyApi.Links);
                  expect(data.links.self).to.be.a(LaunchDarklyApi.Link);
                    expect(data.links.self.href).to.be.a('string');
                expect(data.links.self.href).to.be("/api/v2/endpoint");
                expect(data.links.self.type).to.be.a('string');
                expect(data.links.self.type).to.be("application/json");
              expect(data.links.next).to.be.a(LaunchDarklyApi.Link);
                    expect(data.links.next.href).to.be.a('string');
                expect(data.links.next.href).to.be("/api/v2/endpoint");
                expect(data.links.next.type).to.be.a('string');
                expect(data.links.next.type).to.be("application/json");
            expect(data.id).to.be.a(LaunchDarklyApi.Id);
                expect(data.key).to.be.a('string');
            expect(data.key).to.be("production");
            expect(data.name).to.be.a('string');
            expect(data.name).to.be("Production");
            expect(data.apiKey).to.be.a('string');
            expect(data.apiKey).to.be("XXX");
            expect(data.mobileKey).to.be.a('string');
            expect(data.mobileKey).to.be("XXX");
            expect(data.color).to.be.a('string');
            expect(data.color).to.be("417505");
            expect(data.defaultTtl).to.be.a('number');
            expect(data.defaultTtl).to.be(0.0);
            expect(data.secureMode).to.be.a('boolean');
            expect(data.secureMode).to.be(false);
            expect(data.defaultTrackEvents).to.be.a('boolean');
            expect(data.defaultTrackEvents).to.be(false);
            {
              let dataCtr = data.tags;
              expect(dataCtr).to.be.an(Array);
              expect(dataCtr).to.not.be.empty();
              for (let p in dataCtr) {
                let data = dataCtr[p];
                expect(data).to.be.a('string');
                expect(data).to.be("");
              }
            }
            expect(data.requireComments).to.be.a('boolean');
            expect(data.requireComments).to.be(false);
            expect(data.confirmChanges).to.be.a('boolean');
            expect(data.confirmChanges).to.be(false);
            expect(data.approvalSettings).to.be.a(LaunchDarklyApi.EnvironmentApprovalSettings);
                  expect(data.approvalSettings.serviceKind).to.be.a('string');
              expect(data.approvalSettings.serviceKind).to.be("launchdarkly");
              expect(data.approvalSettings.required).to.be.a('boolean');
              expect(data.approvalSettings.required).to.be(false);
              expect(data.approvalSettings.canReviewOwnRequest).to.be.a('boolean');
              expect(data.approvalSettings.canReviewOwnRequest).to.be(false);
              expect(data.approvalSettings.minNumApprovals).to.be.a('number');
              expect(data.approvalSettings.minNumApprovals).to.be(2);
              expect(data.approvalSettings.canApplyDeclinedChanges).to.be.a('boolean');
              expect(data.approvalSettings.canApplyDeclinedChanges).to.be(false);
              {
                let dataCtr = data.approvalSettings.requiredApprovalTags;
                expect(dataCtr).to.be.an(Array);
                expect(dataCtr).to.not.be.empty();
                for (let p in dataCtr) {
                  let data = dataCtr[p];
                  expect(data).to.be.a('string');
                  expect(data).to.be("");
                }
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
