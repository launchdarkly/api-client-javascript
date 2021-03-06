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
    instance = new LaunchDarklyApi.ProjectsApi();
  });

  describe('(package)', function() {
    describe('ProjectsApi', function() {
      describe('deleteProject', function() {
        it('should call deleteProject successfully', function(done) {
          // TODO: uncomment, update parameter values for deleteProject call
          /*
          var projectKey = "projectKey_example";

          instance.deleteProject(projectKey, function(error, data, response) {
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
      describe('getProject', function() {
        it('should call getProject successfully', function(done) {
          // TODO: uncomment, update parameter values for getProject call and complete the assertions
          /*
          var projectKey = "projectKey_example";

          instance.getProject(projectKey, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(LaunchDarklyApi.Project);
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
            expect(data.key).to.be("zentasks");
            expect(data.name).to.be.a('string');
            expect(data.name).to.be("Zentasks");
            expect(data.includeInSnippetByDefault).to.be.a('boolean');
            expect(data.includeInSnippetByDefault).to.be(true);
            {
              let dataCtr = data.environments;
              expect(dataCtr).to.be.an(Array);
              expect(dataCtr).to.not.be.empty();
              for (let p in dataCtr) {
                let data = dataCtr[p];
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

                      }
            }
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
            expect(data.defaultClientSideAvailability).to.be.a(LaunchDarklyApi.ClientSideAvailability);
                  expect(data.defaultClientSideAvailability.usingEnvironmentId).to.be.a('boolean');
              expect(data.defaultClientSideAvailability.usingEnvironmentId).to.be(false);
              expect(data.defaultClientSideAvailability.usingMobileKey).to.be.a('boolean');
              expect(data.defaultClientSideAvailability.usingMobileKey).to.be(false);

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('getProjects', function() {
        it('should call getProjects successfully', function(done) {
          // TODO: uncomment getProjects call and complete the assertions
          /*

          instance.getProjects(function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(LaunchDarklyApi.Projects);
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
            {
              let dataCtr = data.items;
              expect(dataCtr).to.be.an(Array);
              expect(dataCtr).to.not.be.empty();
              for (let p in dataCtr) {
                let data = dataCtr[p];
                expect(data).to.be.a(LaunchDarklyApi.Project);
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
                expect(data.key).to.be("zentasks");
                expect(data.name).to.be.a('string');
                expect(data.name).to.be("Zentasks");
                expect(data.includeInSnippetByDefault).to.be.a('boolean');
                expect(data.includeInSnippetByDefault).to.be(true);
                {
                  let dataCtr = data.environments;
                  expect(dataCtr).to.be.an(Array);
                  expect(dataCtr).to.not.be.empty();
                  for (let p in dataCtr) {
                    let data = dataCtr[p];
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
    
                          }
                }
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
                expect(data.defaultClientSideAvailability).to.be.a(LaunchDarklyApi.ClientSideAvailability);
                      expect(data.defaultClientSideAvailability.usingEnvironmentId).to.be.a('boolean');
                  expect(data.defaultClientSideAvailability.usingEnvironmentId).to.be(false);
                  expect(data.defaultClientSideAvailability.usingMobileKey).to.be.a('boolean');
                  expect(data.defaultClientSideAvailability.usingMobileKey).to.be(false);

                      }
            }

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('patchProject', function() {
        it('should call patchProject successfully', function(done) {
          // TODO: uncomment, update parameter values for patchProject call and complete the assertions
          /*
          var projectKey = "projectKey_example";
          var patchDelta = [new LaunchDarklyApi.PatchOperation()];
          patchDelta[0].op = "replace";
          patchDelta[0].path = "/name";
          patchDelta[0].value = "My resource name";

          instance.patchProject(projectKey, patchDelta, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(LaunchDarklyApi.Project);
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
            expect(data.key).to.be("zentasks");
            expect(data.name).to.be.a('string');
            expect(data.name).to.be("Zentasks");
            expect(data.includeInSnippetByDefault).to.be.a('boolean');
            expect(data.includeInSnippetByDefault).to.be(true);
            {
              let dataCtr = data.environments;
              expect(dataCtr).to.be.an(Array);
              expect(dataCtr).to.not.be.empty();
              for (let p in dataCtr) {
                let data = dataCtr[p];
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

                      }
            }
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
            expect(data.defaultClientSideAvailability).to.be.a(LaunchDarklyApi.ClientSideAvailability);
                  expect(data.defaultClientSideAvailability.usingEnvironmentId).to.be.a('boolean');
              expect(data.defaultClientSideAvailability.usingEnvironmentId).to.be(false);
              expect(data.defaultClientSideAvailability.usingMobileKey).to.be.a('boolean');
              expect(data.defaultClientSideAvailability.usingMobileKey).to.be(false);

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('postProject', function() {
        it('should call postProject successfully', function(done) {
          // TODO: uncomment, update parameter values for postProject call and complete the assertions
          /*
          var projectBody = new LaunchDarklyApi.ProjectBody();
          projectBody.name = "New Project";
          projectBody.key = "new-project";
          projectBody.includeInSnippetByDefault = false;
          projectBody.tags = ["ops","dev"];
          projectBody.environments = [new LaunchDarklyApi.EnvironmentPost()];
          projectBody.environments[0].name = "Development";
          projectBody.environments[0].key = "dev";
          projectBody.environments[0].color = "417505";
          projectBody.environments[0].defaultTtl = 0.0;
          projectBody.environments[0].secureMode = false;
          projectBody.environments[0].defaultTrackEvents = false;
          projectBody.environments[0].tags = ["tag1","tag2"];
          projectBody.environments[0].requireComments = false;
          projectBody.environments[0].confirmChanges = false;
          projectBody.defaultClientSideAvailability = new LaunchDarklyApi.ClientSideAvailability();
          projectBody.defaultClientSideAvailability.usingEnvironmentId = false;
          projectBody.defaultClientSideAvailability.usingMobileKey = false;

          instance.postProject(projectBody, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(LaunchDarklyApi.Project);
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
            expect(data.key).to.be("zentasks");
            expect(data.name).to.be.a('string');
            expect(data.name).to.be("Zentasks");
            expect(data.includeInSnippetByDefault).to.be.a('boolean');
            expect(data.includeInSnippetByDefault).to.be(true);
            {
              let dataCtr = data.environments;
              expect(dataCtr).to.be.an(Array);
              expect(dataCtr).to.not.be.empty();
              for (let p in dataCtr) {
                let data = dataCtr[p];
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

                      }
            }
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
            expect(data.defaultClientSideAvailability).to.be.a(LaunchDarklyApi.ClientSideAvailability);
                  expect(data.defaultClientSideAvailability.usingEnvironmentId).to.be.a('boolean');
              expect(data.defaultClientSideAvailability.usingEnvironmentId).to.be(false);
              expect(data.defaultClientSideAvailability.usingMobileKey).to.be.a('boolean');
              expect(data.defaultClientSideAvailability.usingMobileKey).to.be(false);

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
