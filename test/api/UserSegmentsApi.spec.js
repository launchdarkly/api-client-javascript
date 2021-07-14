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
    instance = new LaunchDarklyApi.UserSegmentsApi();
  });

  describe('(package)', function() {
    describe('UserSegmentsApi', function() {
      describe('deleteUserSegment', function() {
        it('should call deleteUserSegment successfully', function(done) {
          // TODO: uncomment, update parameter values for deleteUserSegment call
          /*
          var projectKey = "projectKey_example";
          var environmentKey = "environmentKey_example";
          var userSegmentKey = "userSegmentKey_example";

          instance.deleteUserSegment(projectKey, environmentKey, userSegmentKey, function(error, data, response) {
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
      describe('getExpiringUserTargetsOnSegment', function() {
        it('should call getExpiringUserTargetsOnSegment successfully', function(done) {
          // TODO: uncomment, update parameter values for getExpiringUserTargetsOnSegment call and complete the assertions
          /*
          var projectKey = "projectKey_example";
          var environmentKey = "environmentKey_example";
          var userSegmentKey = "userSegmentKey_example";

          instance.getExpiringUserTargetsOnSegment(projectKey, environmentKey, userSegmentKey, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(LaunchDarklyApi.UserTargetingExpirationForSegment);
            expect(data.expirationDate).to.be.a('number');
            expect(data.expirationDate).to.be(1735689600000);
            expect(data.targetType).to.be.a('string');
            expect(data.targetType).to.be("");
            expect(data.userKey).to.be.a('string');
            expect(data.userKey).to.be("");
            expect(data.id).to.be.a('string');
            expect(data.id).to.be("");
            expect(data.resourceId).to.be.a(LaunchDarklyApi.UserTargetingExpirationResourceIdForFlag);
                  expect(data.resourceId.kind).to.be.a('string');
              expect(data.resourceId.kind).to.be("");
              expect(data.resourceId.projectKey).to.be.a('string');
              expect(data.resourceId.projectKey).to.be("");
              expect(data.resourceId.environmentKey).to.be.a('string');
              expect(data.resourceId.environmentKey).to.be("");
              expect(data.resourceId.flagKey).to.be.a('string');
              expect(data.resourceId.flagKey).to.be("");
              expect(data.resourceId.key).to.be.a('string');
              expect(data.resourceId.key).to.be("");
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
            expect(data.version).to.be.a('number');
            expect(data.version).to.be(0);

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('getUserSegment', function() {
        it('should call getUserSegment successfully', function(done) {
          // TODO: uncomment, update parameter values for getUserSegment call and complete the assertions
          /*
          var projectKey = "projectKey_example";
          var environmentKey = "environmentKey_example";
          var userSegmentKey = "userSegmentKey_example";

          instance.getUserSegment(projectKey, environmentKey, userSegmentKey, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(LaunchDarklyApi.UserSegment);
            expect(data.key).to.be.a('string');
            expect(data.key).to.be("beta-testers");
            expect(data.name).to.be.a('string');
            expect(data.name).to.be("Beta Testers");
            expect(data.description).to.be.a('string');
            expect(data.description).to.be("Users in this segment can access beta features.");
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
            expect(data.creationDate).to.be.a('number');
            expect(data.creationDate).to.be(1443652232590);
            {
              let dataCtr = data.included;
              expect(dataCtr).to.be.an(Array);
              expect(dataCtr).to.not.be.empty();
              for (let p in dataCtr) {
                let data = dataCtr[p];
                expect(data).to.be.a('string');
                expect(data).to.be("");
              }
            }
            {
              let dataCtr = data.excluded;
              expect(dataCtr).to.be.an(Array);
              expect(dataCtr).to.not.be.empty();
              for (let p in dataCtr) {
                let data = dataCtr[p];
                expect(data).to.be.a('string');
                expect(data).to.be("");
              }
            }
            {
              let dataCtr = data.rules;
              expect(dataCtr).to.be.an(Array);
              expect(dataCtr).to.not.be.empty();
              for (let p in dataCtr) {
                let data = dataCtr[p];
                expect(data).to.be.a(LaunchDarklyApi.UserSegmentRule);
                {
                  let dataCtr = data.clauses;
                  expect(dataCtr).to.be.an(Array);
                  expect(dataCtr).to.not.be.empty();
                  for (let p in dataCtr) {
                    let data = dataCtr[p];
                    expect(data).to.be.a(LaunchDarklyApi.Clause);
                    expect(data.id).to.be.a('string');
                    expect(data.id).to.be("");
                    expect(data.attribute).to.be.a('string');
                    expect(data.attribute).to.be("groups");
                    expect(data.op).to.be.a('string');
                    expect(data.op).to.be("in");
                    {
                      let dataCtr = data.values;
                      expect(dataCtr).to.be.an(Array);
                      expect(dataCtr).to.not.be.empty();
                      for (let p in dataCtr) {
                        let data = dataCtr[p];
                        expect(data).to.be.a(Object);
                        expect(data).to.be("Top Customers");
                      }
                    }
                    expect(data.negate).to.be.a('boolean');
                    expect(data.negate).to.be(false);
    
                          }
                }
                expect(data.weight).to.be.a('number');
                expect(data.weight).to.be(0);
                expect(data.bucketBy).to.be.a('string');
                expect(data.bucketBy).to.be("");

                      }
            }
            expect(data.unbounded).to.be.a('boolean');
            expect(data.unbounded).to.be(false);
            expect(data.version).to.be.a('number');
            expect(data.version).to.be(0);
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
              let dataCtr = data.flags;
              expect(dataCtr).to.be.an(Array);
              expect(dataCtr).to.not.be.empty();
              for (let p in dataCtr) {
                let data = dataCtr[p];
                expect(data).to.be.a(LaunchDarklyApi.FlagListItem);
                expect(data.name).to.be.a('string');
                expect(data.name).to.be("");
                expect(data.key).to.be.a('string');
                expect(data.key).to.be("");
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
                expect(data.site).to.be.a(LaunchDarklyApi.Site);
                      expect(data.site.href).to.be.a('string');
                  expect(data.site.href).to.be("/features/sort.order");
                  expect(data.site.type).to.be.a('string');
                  expect(data.site.type).to.be("text/html");

                      }
            }

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('getUserSegments', function() {
        it('should call getUserSegments successfully', function(done) {
          // TODO: uncomment, update parameter values for getUserSegments call and complete the assertions
          /*
          var projectKey = "projectKey_example";
          var environmentKey = "environmentKey_example";
          var opts = {};
          opts.tag = "tag_example";

          instance.getUserSegments(projectKey, environmentKey, opts, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(LaunchDarklyApi.UserSegments);
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
                expect(data).to.be.a(LaunchDarklyApi.UserSegment);
                expect(data.key).to.be.a('string');
                expect(data.key).to.be("beta-testers");
                expect(data.name).to.be.a('string');
                expect(data.name).to.be("Beta Testers");
                expect(data.description).to.be.a('string');
                expect(data.description).to.be("Users in this segment can access beta features.");
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
                expect(data.creationDate).to.be.a('number');
                expect(data.creationDate).to.be(1443652232590);
                {
                  let dataCtr = data.included;
                  expect(dataCtr).to.be.an(Array);
                  expect(dataCtr).to.not.be.empty();
                  for (let p in dataCtr) {
                    let data = dataCtr[p];
                    expect(data).to.be.a('string');
                    expect(data).to.be("");
                  }
                }
                {
                  let dataCtr = data.excluded;
                  expect(dataCtr).to.be.an(Array);
                  expect(dataCtr).to.not.be.empty();
                  for (let p in dataCtr) {
                    let data = dataCtr[p];
                    expect(data).to.be.a('string');
                    expect(data).to.be("");
                  }
                }
                {
                  let dataCtr = data.rules;
                  expect(dataCtr).to.be.an(Array);
                  expect(dataCtr).to.not.be.empty();
                  for (let p in dataCtr) {
                    let data = dataCtr[p];
                    expect(data).to.be.a(LaunchDarklyApi.UserSegmentRule);
                    {
                      let dataCtr = data.clauses;
                      expect(dataCtr).to.be.an(Array);
                      expect(dataCtr).to.not.be.empty();
                      for (let p in dataCtr) {
                        let data = dataCtr[p];
                        expect(data).to.be.a(LaunchDarklyApi.Clause);
                        expect(data.id).to.be.a('string');
                        expect(data.id).to.be("");
                        expect(data.attribute).to.be.a('string');
                        expect(data.attribute).to.be("groups");
                        expect(data.op).to.be.a('string');
                        expect(data.op).to.be("in");
                        {
                          let dataCtr = data.values;
                          expect(dataCtr).to.be.an(Array);
                          expect(dataCtr).to.not.be.empty();
                          for (let p in dataCtr) {
                            let data = dataCtr[p];
                            expect(data).to.be.a(Object);
                            expect(data).to.be("Top Customers");
                          }
                        }
                        expect(data.negate).to.be.a('boolean');
                        expect(data.negate).to.be(false);
        
                              }
                    }
                    expect(data.weight).to.be.a('number');
                    expect(data.weight).to.be(0);
                    expect(data.bucketBy).to.be.a('string');
                    expect(data.bucketBy).to.be("");
    
                          }
                }
                expect(data.unbounded).to.be.a('boolean');
                expect(data.unbounded).to.be(false);
                expect(data.version).to.be.a('number');
                expect(data.version).to.be(0);
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
                  let dataCtr = data.flags;
                  expect(dataCtr).to.be.an(Array);
                  expect(dataCtr).to.not.be.empty();
                  for (let p in dataCtr) {
                    let data = dataCtr[p];
                    expect(data).to.be.a(LaunchDarklyApi.FlagListItem);
                    expect(data.name).to.be.a('string');
                    expect(data.name).to.be("");
                    expect(data.key).to.be.a('string');
                    expect(data.key).to.be("");
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
                    expect(data.site).to.be.a(LaunchDarklyApi.Site);
                          expect(data.site.href).to.be.a('string');
                      expect(data.site.href).to.be("/features/sort.order");
                      expect(data.site.type).to.be.a('string');
                      expect(data.site.type).to.be("text/html");
    
                          }
                }

                      }
            }

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('patchExpiringUserTargetsOnSegment', function() {
        it('should call patchExpiringUserTargetsOnSegment successfully', function(done) {
          // TODO: uncomment, update parameter values for patchExpiringUserTargetsOnSegment call and complete the assertions
          /*
          var projectKey = "projectKey_example";
          var environmentKey = "environmentKey_example";
          var userSegmentKey = "userSegmentKey_example";
          var semanticPatchWithComment = null;

          instance.patchExpiringUserTargetsOnSegment(projectKey, environmentKey, userSegmentKey, semanticPatchWithComment, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(LaunchDarklyApi.UserTargetingExpirationForSegment);
            expect(data.expirationDate).to.be.a('number');
            expect(data.expirationDate).to.be(1735689600000);
            expect(data.targetType).to.be.a('string');
            expect(data.targetType).to.be("");
            expect(data.userKey).to.be.a('string');
            expect(data.userKey).to.be("");
            expect(data.id).to.be.a('string');
            expect(data.id).to.be("");
            expect(data.resourceId).to.be.a(LaunchDarklyApi.UserTargetingExpirationResourceIdForFlag);
                  expect(data.resourceId.kind).to.be.a('string');
              expect(data.resourceId.kind).to.be("");
              expect(data.resourceId.projectKey).to.be.a('string');
              expect(data.resourceId.projectKey).to.be("");
              expect(data.resourceId.environmentKey).to.be.a('string');
              expect(data.resourceId.environmentKey).to.be("");
              expect(data.resourceId.flagKey).to.be.a('string');
              expect(data.resourceId.flagKey).to.be("");
              expect(data.resourceId.key).to.be.a('string');
              expect(data.resourceId.key).to.be("");
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
            expect(data.version).to.be.a('number');
            expect(data.version).to.be(0);

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('patchUserSegment', function() {
        it('should call patchUserSegment successfully', function(done) {
          // TODO: uncomment, update parameter values for patchUserSegment call and complete the assertions
          /*
          var projectKey = "projectKey_example";
          var environmentKey = "environmentKey_example";
          var userSegmentKey = "userSegmentKey_example";
          var patchOnly = [new LaunchDarklyApi.PatchOperation()];
          patchOnly[0].op = "replace";
          patchOnly[0].path = "/name";
          patchOnly[0].value = "My resource name";

          instance.patchUserSegment(projectKey, environmentKey, userSegmentKey, patchOnly, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(LaunchDarklyApi.UserSegment);
            expect(data.key).to.be.a('string');
            expect(data.key).to.be("beta-testers");
            expect(data.name).to.be.a('string');
            expect(data.name).to.be("Beta Testers");
            expect(data.description).to.be.a('string');
            expect(data.description).to.be("Users in this segment can access beta features.");
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
            expect(data.creationDate).to.be.a('number');
            expect(data.creationDate).to.be(1443652232590);
            {
              let dataCtr = data.included;
              expect(dataCtr).to.be.an(Array);
              expect(dataCtr).to.not.be.empty();
              for (let p in dataCtr) {
                let data = dataCtr[p];
                expect(data).to.be.a('string');
                expect(data).to.be("");
              }
            }
            {
              let dataCtr = data.excluded;
              expect(dataCtr).to.be.an(Array);
              expect(dataCtr).to.not.be.empty();
              for (let p in dataCtr) {
                let data = dataCtr[p];
                expect(data).to.be.a('string');
                expect(data).to.be("");
              }
            }
            {
              let dataCtr = data.rules;
              expect(dataCtr).to.be.an(Array);
              expect(dataCtr).to.not.be.empty();
              for (let p in dataCtr) {
                let data = dataCtr[p];
                expect(data).to.be.a(LaunchDarklyApi.UserSegmentRule);
                {
                  let dataCtr = data.clauses;
                  expect(dataCtr).to.be.an(Array);
                  expect(dataCtr).to.not.be.empty();
                  for (let p in dataCtr) {
                    let data = dataCtr[p];
                    expect(data).to.be.a(LaunchDarklyApi.Clause);
                    expect(data.id).to.be.a('string');
                    expect(data.id).to.be("");
                    expect(data.attribute).to.be.a('string');
                    expect(data.attribute).to.be("groups");
                    expect(data.op).to.be.a('string');
                    expect(data.op).to.be("in");
                    {
                      let dataCtr = data.values;
                      expect(dataCtr).to.be.an(Array);
                      expect(dataCtr).to.not.be.empty();
                      for (let p in dataCtr) {
                        let data = dataCtr[p];
                        expect(data).to.be.a(Object);
                        expect(data).to.be("Top Customers");
                      }
                    }
                    expect(data.negate).to.be.a('boolean');
                    expect(data.negate).to.be(false);
    
                          }
                }
                expect(data.weight).to.be.a('number');
                expect(data.weight).to.be(0);
                expect(data.bucketBy).to.be.a('string');
                expect(data.bucketBy).to.be("");

                      }
            }
            expect(data.unbounded).to.be.a('boolean');
            expect(data.unbounded).to.be(false);
            expect(data.version).to.be.a('number');
            expect(data.version).to.be(0);
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
              let dataCtr = data.flags;
              expect(dataCtr).to.be.an(Array);
              expect(dataCtr).to.not.be.empty();
              for (let p in dataCtr) {
                let data = dataCtr[p];
                expect(data).to.be.a(LaunchDarklyApi.FlagListItem);
                expect(data.name).to.be.a('string');
                expect(data.name).to.be("");
                expect(data.key).to.be.a('string');
                expect(data.key).to.be("");
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
                expect(data.site).to.be.a(LaunchDarklyApi.Site);
                      expect(data.site.href).to.be.a('string');
                  expect(data.site.href).to.be("/features/sort.order");
                  expect(data.site.type).to.be.a('string');
                  expect(data.site.type).to.be("text/html");

                      }
            }

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('postUserSegment', function() {
        it('should call postUserSegment successfully', function(done) {
          // TODO: uncomment, update parameter values for postUserSegment call and complete the assertions
          /*
          var projectKey = "projectKey_example";
          var environmentKey = "environmentKey_example";
          var userSegmentBody = new LaunchDarklyApi.UserSegmentBody();
          userSegmentBody.name = "new segment";
          userSegmentBody.key = "new-segment";
          userSegmentBody.description = "Users in this segment will have access to beta features.";
          userSegmentBody.unbounded = false;
          userSegmentBody.tags = [""];

          instance.postUserSegment(projectKey, environmentKey, userSegmentBody, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(LaunchDarklyApi.UserSegment);
            expect(data.key).to.be.a('string');
            expect(data.key).to.be("beta-testers");
            expect(data.name).to.be.a('string');
            expect(data.name).to.be("Beta Testers");
            expect(data.description).to.be.a('string');
            expect(data.description).to.be("Users in this segment can access beta features.");
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
            expect(data.creationDate).to.be.a('number');
            expect(data.creationDate).to.be(1443652232590);
            {
              let dataCtr = data.included;
              expect(dataCtr).to.be.an(Array);
              expect(dataCtr).to.not.be.empty();
              for (let p in dataCtr) {
                let data = dataCtr[p];
                expect(data).to.be.a('string');
                expect(data).to.be("");
              }
            }
            {
              let dataCtr = data.excluded;
              expect(dataCtr).to.be.an(Array);
              expect(dataCtr).to.not.be.empty();
              for (let p in dataCtr) {
                let data = dataCtr[p];
                expect(data).to.be.a('string');
                expect(data).to.be("");
              }
            }
            {
              let dataCtr = data.rules;
              expect(dataCtr).to.be.an(Array);
              expect(dataCtr).to.not.be.empty();
              for (let p in dataCtr) {
                let data = dataCtr[p];
                expect(data).to.be.a(LaunchDarklyApi.UserSegmentRule);
                {
                  let dataCtr = data.clauses;
                  expect(dataCtr).to.be.an(Array);
                  expect(dataCtr).to.not.be.empty();
                  for (let p in dataCtr) {
                    let data = dataCtr[p];
                    expect(data).to.be.a(LaunchDarklyApi.Clause);
                    expect(data.id).to.be.a('string');
                    expect(data.id).to.be("");
                    expect(data.attribute).to.be.a('string');
                    expect(data.attribute).to.be("groups");
                    expect(data.op).to.be.a('string');
                    expect(data.op).to.be("in");
                    {
                      let dataCtr = data.values;
                      expect(dataCtr).to.be.an(Array);
                      expect(dataCtr).to.not.be.empty();
                      for (let p in dataCtr) {
                        let data = dataCtr[p];
                        expect(data).to.be.a(Object);
                        expect(data).to.be("Top Customers");
                      }
                    }
                    expect(data.negate).to.be.a('boolean');
                    expect(data.negate).to.be(false);
    
                          }
                }
                expect(data.weight).to.be.a('number');
                expect(data.weight).to.be(0);
                expect(data.bucketBy).to.be.a('string');
                expect(data.bucketBy).to.be("");

                      }
            }
            expect(data.unbounded).to.be.a('boolean');
            expect(data.unbounded).to.be(false);
            expect(data.version).to.be.a('number');
            expect(data.version).to.be(0);
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
              let dataCtr = data.flags;
              expect(dataCtr).to.be.an(Array);
              expect(dataCtr).to.not.be.empty();
              for (let p in dataCtr) {
                let data = dataCtr[p];
                expect(data).to.be.a(LaunchDarklyApi.FlagListItem);
                expect(data.name).to.be.a('string');
                expect(data.name).to.be("");
                expect(data.key).to.be.a('string');
                expect(data.key).to.be("");
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
                expect(data.site).to.be.a(LaunchDarklyApi.Site);
                      expect(data.site.href).to.be.a('string');
                  expect(data.site.href).to.be("/features/sort.order");
                  expect(data.site.type).to.be.a('string');
                  expect(data.site.type).to.be("text/html");

                      }
            }

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('updateBigSegmentTargets', function() {
        it('should call updateBigSegmentTargets successfully', function(done) {
          // TODO: uncomment, update parameter values for updateBigSegmentTargets call
          /*
          var projectKey = "projectKey_example";
          var environmentKey = "environmentKey_example";
          var userSegmentKey = "userSegmentKey_example";
          var bigSegmentTargetsBody = new LaunchDarklyApi.BigSegmentTargetsBody();
          bigSegmentTargetsBody.included = new LaunchDarklyApi.BigSegmentTargetChanges();
          bigSegmentTargetsBody.included.add = ["user@launchdarkly.com"];
          bigSegmentTargetsBody.included.remove = [];
          bigSegmentTargetsBody.excluded = new LaunchDarklyApi.BigSegmentTargetChanges();
          bigSegmentTargetsBody.excluded.add = ["user@launchdarkly.com"];
          bigSegmentTargetsBody.excluded.remove = [];

          instance.updateBigSegmentTargets(projectKey, environmentKey, userSegmentKey, bigSegmentTargetsBody, function(error, data, response) {
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
