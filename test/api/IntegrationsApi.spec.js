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
    instance = new LaunchDarklyApi.IntegrationsApi();
  });

  describe('(package)', function() {
    describe('IntegrationsApi', function() {
      describe('deleteIntegrationSubscription', function() {
        it('should call deleteIntegrationSubscription successfully', function(done) {
          // TODO: uncomment, update parameter values for deleteIntegrationSubscription call
          /*
          var integrationKey = "integrationKey_example";
          var integrationId = "integrationId_example";

          instance.deleteIntegrationSubscription(integrationKey, integrationId, function(error, data, response) {
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
      describe('getIntegrationSubscription', function() {
        it('should call getIntegrationSubscription successfully', function(done) {
          // TODO: uncomment, update parameter values for getIntegrationSubscription call and complete the assertions
          /*
          var integrationKey = "integrationKey_example";
          var integrationId = "integrationId_example";

          instance.getIntegrationSubscription(integrationKey, integrationId, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(LaunchDarklyApi.IntegrationSubscription);
            expect(data.links).to.be.a(LaunchDarklyApi.HierarchicalLinks);
                  expect(data.links.parent).to.be.a(LaunchDarklyApi.Link);
                    expect(data.links.parent.href).to.be.a('string');
                expect(data.links.parent.href).to.be("/api/v2/endpoint");
                expect(data.links.parent.type).to.be.a('string');
                expect(data.links.parent.type).to.be("application/json");
              expect(data.links.self).to.be.a(LaunchDarklyApi.Link);
                    expect(data.links.self.href).to.be.a('string');
                expect(data.links.self.href).to.be("/api/v2/endpoint");
                expect(data.links.self.type).to.be.a('string');
                expect(data.links.self.type).to.be("application/json");
            expect(data.id).to.be.a(LaunchDarklyApi.Id);
                expect(data.kind).to.be.a('string');
            expect(data.kind).to.be("datadog");
            expect(data.name).to.be.a('string');
            expect(data.name).to.be("V2");
            expect(data.config).to.be.a(Object);
            expect(data.config).to.be({"apiKey":"582**************************116","hostURL":"https://api.datadoghq.com"});
            {
              let dataCtr = data.statements;
              expect(dataCtr).to.be.an(Array);
              expect(dataCtr).to.not.be.empty();
              for (let p in dataCtr) {
                let data = dataCtr[p];
                expect(data).to.be.a(LaunchDarklyApi.Statement);
                {
                  let dataCtr = data.resources;
                  expect(dataCtr).to.be.an(Array);
                  expect(dataCtr).to.not.be.empty();
                  for (let p in dataCtr) {
                    let data = dataCtr[p];
                    expect(data).to.be.a('string');
                    expect(data).to.be("proj/*:env/*:flag/my-flag");
                  }
                }
                {
                  let dataCtr = data.notResources;
                  expect(dataCtr).to.be.an(Array);
                  expect(dataCtr).to.not.be.empty();
                  for (let p in dataCtr) {
                    let data = dataCtr[p];
                    expect(data).to.be.a('string');
                    expect(data).to.be("proj/*:env/*:flag/my-flag");
                  }
                }
                {
                  let dataCtr = data.actions;
                  expect(dataCtr).to.be.an(Array);
                  expect(dataCtr).to.not.be.empty();
                  for (let p in dataCtr) {
                    let data = dataCtr[p];
                    expect(data).to.be.a('string');
                    expect(data).to.be("updateOn");
                  }
                }
                {
                  let dataCtr = data.notActions;
                  expect(dataCtr).to.be.an(Array);
                  expect(dataCtr).to.not.be.empty();
                  for (let p in dataCtr) {
                    let data = dataCtr[p];
                    expect(data).to.be.a('string');
                    expect(data).to.be("updateOn");
                  }
                }
                expect(data.effect).to.be.a('string');
                expect(data.effect).to.be("allow");

                      }
            }
            expect(data.on).to.be.a('boolean');
            expect(data.on).to.be(true);
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
            expect(data.status).to.be.a(LaunchDarklyApi.IntegrationSubscriptionStatus);
                  expect(data.status.successCount).to.be.a('number');
              expect(data.status.successCount).to.be(6);
              expect(data.status.lastSuccess).to.be.a('number');
              expect(data.status.lastSuccess).to.be(1443652232590);
              expect(data.status.errorCount).to.be.a('number');
              expect(data.status.errorCount).to.be(2);

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('getIntegrationSubscriptions', function() {
        it('should call getIntegrationSubscriptions successfully', function(done) {
          // TODO: uncomment, update parameter values for getIntegrationSubscriptions call and complete the assertions
          /*
          var integrationKey = "integrationKey_example";

          instance.getIntegrationSubscriptions(integrationKey, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(LaunchDarklyApi.Integration);
            expect(data.links).to.be.a(LaunchDarklyApi.DependentFlagLinks);
                  expect(data.links.self).to.be.a(LaunchDarklyApi.Link);
                    expect(data.links.self.href).to.be.a('string');
                expect(data.links.self.href).to.be("/api/v2/endpoint");
                expect(data.links.self.type).to.be.a('string');
                expect(data.links.self.type).to.be("application/json");
            {
              let dataCtr = data.items;
              expect(dataCtr).to.be.an(Array);
              expect(dataCtr).to.not.be.empty();
              for (let p in dataCtr) {
                let data = dataCtr[p];
                expect(data).to.be.a(LaunchDarklyApi.IntegrationSubscription);
                expect(data.links).to.be.a(LaunchDarklyApi.HierarchicalLinks);
                      expect(data.links.parent).to.be.a(LaunchDarklyApi.Link);
                        expect(data.links.parent.href).to.be.a('string');
                    expect(data.links.parent.href).to.be("/api/v2/endpoint");
                    expect(data.links.parent.type).to.be.a('string');
                    expect(data.links.parent.type).to.be("application/json");
                  expect(data.links.self).to.be.a(LaunchDarklyApi.Link);
                        expect(data.links.self.href).to.be.a('string');
                    expect(data.links.self.href).to.be("/api/v2/endpoint");
                    expect(data.links.self.type).to.be.a('string');
                    expect(data.links.self.type).to.be("application/json");
                expect(data.id).to.be.a(LaunchDarklyApi.Id);
                    expect(data.kind).to.be.a('string');
                expect(data.kind).to.be("datadog");
                expect(data.name).to.be.a('string');
                expect(data.name).to.be("V2");
                expect(data.config).to.be.a(Object);
                expect(data.config).to.be({"apiKey":"582**************************116","hostURL":"https://api.datadoghq.com"});
                {
                  let dataCtr = data.statements;
                  expect(dataCtr).to.be.an(Array);
                  expect(dataCtr).to.not.be.empty();
                  for (let p in dataCtr) {
                    let data = dataCtr[p];
                    expect(data).to.be.a(LaunchDarklyApi.Statement);
                    {
                      let dataCtr = data.resources;
                      expect(dataCtr).to.be.an(Array);
                      expect(dataCtr).to.not.be.empty();
                      for (let p in dataCtr) {
                        let data = dataCtr[p];
                        expect(data).to.be.a('string');
                        expect(data).to.be("proj/*:env/*:flag/my-flag");
                      }
                    }
                    {
                      let dataCtr = data.notResources;
                      expect(dataCtr).to.be.an(Array);
                      expect(dataCtr).to.not.be.empty();
                      for (let p in dataCtr) {
                        let data = dataCtr[p];
                        expect(data).to.be.a('string');
                        expect(data).to.be("proj/*:env/*:flag/my-flag");
                      }
                    }
                    {
                      let dataCtr = data.actions;
                      expect(dataCtr).to.be.an(Array);
                      expect(dataCtr).to.not.be.empty();
                      for (let p in dataCtr) {
                        let data = dataCtr[p];
                        expect(data).to.be.a('string');
                        expect(data).to.be("updateOn");
                      }
                    }
                    {
                      let dataCtr = data.notActions;
                      expect(dataCtr).to.be.an(Array);
                      expect(dataCtr).to.not.be.empty();
                      for (let p in dataCtr) {
                        let data = dataCtr[p];
                        expect(data).to.be.a('string');
                        expect(data).to.be("updateOn");
                      }
                    }
                    expect(data.effect).to.be.a('string');
                    expect(data.effect).to.be("allow");
    
                          }
                }
                expect(data.on).to.be.a('boolean');
                expect(data.on).to.be(true);
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
                expect(data.status).to.be.a(LaunchDarklyApi.IntegrationSubscriptionStatus);
                      expect(data.status.successCount).to.be.a('number');
                  expect(data.status.successCount).to.be(6);
                  expect(data.status.lastSuccess).to.be.a('number');
                  expect(data.status.lastSuccess).to.be(1443652232590);
                  expect(data.status.errorCount).to.be.a('number');
                  expect(data.status.errorCount).to.be(2);

                      }
            }

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('getIntegrations', function() {
        it('should call getIntegrations successfully', function(done) {
          // TODO: uncomment getIntegrations call and complete the assertions
          /*

          instance.getIntegrations(function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(LaunchDarklyApi.Integrations);
            expect(data.links).to.be.a(Object);
            expect(data.links).to.be({"appdynamics":{"href":"/api/v2/integrations/appdynamics","type":"application/json"},"splunk":{"href":"/api/v2/integrations/splunk","type":"application/json"}});
            {
              let dataCtr = data.items;
              expect(dataCtr).to.be.an(Array);
              expect(dataCtr).to.not.be.empty();
              for (let p in dataCtr) {
                let data = dataCtr[p];
                expect(data).to.be.a(LaunchDarklyApi.IntegrationSubscription);
                expect(data.links).to.be.a(LaunchDarklyApi.HierarchicalLinks);
                      expect(data.links.parent).to.be.a(LaunchDarklyApi.Link);
                        expect(data.links.parent.href).to.be.a('string');
                    expect(data.links.parent.href).to.be("/api/v2/endpoint");
                    expect(data.links.parent.type).to.be.a('string');
                    expect(data.links.parent.type).to.be("application/json");
                  expect(data.links.self).to.be.a(LaunchDarklyApi.Link);
                        expect(data.links.self.href).to.be.a('string');
                    expect(data.links.self.href).to.be("/api/v2/endpoint");
                    expect(data.links.self.type).to.be.a('string');
                    expect(data.links.self.type).to.be("application/json");
                expect(data.id).to.be.a(LaunchDarklyApi.Id);
                    expect(data.kind).to.be.a('string');
                expect(data.kind).to.be("datadog");
                expect(data.name).to.be.a('string');
                expect(data.name).to.be("V2");
                expect(data.config).to.be.a(Object);
                expect(data.config).to.be({"apiKey":"582**************************116","hostURL":"https://api.datadoghq.com"});
                {
                  let dataCtr = data.statements;
                  expect(dataCtr).to.be.an(Array);
                  expect(dataCtr).to.not.be.empty();
                  for (let p in dataCtr) {
                    let data = dataCtr[p];
                    expect(data).to.be.a(LaunchDarklyApi.Statement);
                    {
                      let dataCtr = data.resources;
                      expect(dataCtr).to.be.an(Array);
                      expect(dataCtr).to.not.be.empty();
                      for (let p in dataCtr) {
                        let data = dataCtr[p];
                        expect(data).to.be.a('string');
                        expect(data).to.be("proj/*:env/*:flag/my-flag");
                      }
                    }
                    {
                      let dataCtr = data.notResources;
                      expect(dataCtr).to.be.an(Array);
                      expect(dataCtr).to.not.be.empty();
                      for (let p in dataCtr) {
                        let data = dataCtr[p];
                        expect(data).to.be.a('string');
                        expect(data).to.be("proj/*:env/*:flag/my-flag");
                      }
                    }
                    {
                      let dataCtr = data.actions;
                      expect(dataCtr).to.be.an(Array);
                      expect(dataCtr).to.not.be.empty();
                      for (let p in dataCtr) {
                        let data = dataCtr[p];
                        expect(data).to.be.a('string');
                        expect(data).to.be("updateOn");
                      }
                    }
                    {
                      let dataCtr = data.notActions;
                      expect(dataCtr).to.be.an(Array);
                      expect(dataCtr).to.not.be.empty();
                      for (let p in dataCtr) {
                        let data = dataCtr[p];
                        expect(data).to.be.a('string');
                        expect(data).to.be("updateOn");
                      }
                    }
                    expect(data.effect).to.be.a('string');
                    expect(data.effect).to.be("allow");
    
                          }
                }
                expect(data.on).to.be.a('boolean');
                expect(data.on).to.be(true);
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
                expect(data.status).to.be.a(LaunchDarklyApi.IntegrationSubscriptionStatus);
                      expect(data.status.successCount).to.be.a('number');
                  expect(data.status.successCount).to.be(6);
                  expect(data.status.lastSuccess).to.be.a('number');
                  expect(data.status.lastSuccess).to.be(1443652232590);
                  expect(data.status.errorCount).to.be.a('number');
                  expect(data.status.errorCount).to.be(2);

                      }
            }

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('patchIntegrationSubscription', function() {
        it('should call patchIntegrationSubscription successfully', function(done) {
          // TODO: uncomment, update parameter values for patchIntegrationSubscription call and complete the assertions
          /*
          var integrationKey = "integrationKey_example";
          var integrationId = "integrationId_example";
          var patchDelta = [new LaunchDarklyApi.PatchOperation()];
          patchDelta[0].op = "replace";
          patchDelta[0].path = "/name";
          patchDelta[0].value = "My resource name";

          instance.patchIntegrationSubscription(integrationKey, integrationId, patchDelta, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(LaunchDarklyApi.IntegrationSubscription);
            expect(data.links).to.be.a(LaunchDarklyApi.HierarchicalLinks);
                  expect(data.links.parent).to.be.a(LaunchDarklyApi.Link);
                    expect(data.links.parent.href).to.be.a('string');
                expect(data.links.parent.href).to.be("/api/v2/endpoint");
                expect(data.links.parent.type).to.be.a('string');
                expect(data.links.parent.type).to.be("application/json");
              expect(data.links.self).to.be.a(LaunchDarklyApi.Link);
                    expect(data.links.self.href).to.be.a('string');
                expect(data.links.self.href).to.be("/api/v2/endpoint");
                expect(data.links.self.type).to.be.a('string');
                expect(data.links.self.type).to.be("application/json");
            expect(data.id).to.be.a(LaunchDarklyApi.Id);
                expect(data.kind).to.be.a('string');
            expect(data.kind).to.be("datadog");
            expect(data.name).to.be.a('string');
            expect(data.name).to.be("V2");
            expect(data.config).to.be.a(Object);
            expect(data.config).to.be({"apiKey":"582**************************116","hostURL":"https://api.datadoghq.com"});
            {
              let dataCtr = data.statements;
              expect(dataCtr).to.be.an(Array);
              expect(dataCtr).to.not.be.empty();
              for (let p in dataCtr) {
                let data = dataCtr[p];
                expect(data).to.be.a(LaunchDarklyApi.Statement);
                {
                  let dataCtr = data.resources;
                  expect(dataCtr).to.be.an(Array);
                  expect(dataCtr).to.not.be.empty();
                  for (let p in dataCtr) {
                    let data = dataCtr[p];
                    expect(data).to.be.a('string');
                    expect(data).to.be("proj/*:env/*:flag/my-flag");
                  }
                }
                {
                  let dataCtr = data.notResources;
                  expect(dataCtr).to.be.an(Array);
                  expect(dataCtr).to.not.be.empty();
                  for (let p in dataCtr) {
                    let data = dataCtr[p];
                    expect(data).to.be.a('string');
                    expect(data).to.be("proj/*:env/*:flag/my-flag");
                  }
                }
                {
                  let dataCtr = data.actions;
                  expect(dataCtr).to.be.an(Array);
                  expect(dataCtr).to.not.be.empty();
                  for (let p in dataCtr) {
                    let data = dataCtr[p];
                    expect(data).to.be.a('string');
                    expect(data).to.be("updateOn");
                  }
                }
                {
                  let dataCtr = data.notActions;
                  expect(dataCtr).to.be.an(Array);
                  expect(dataCtr).to.not.be.empty();
                  for (let p in dataCtr) {
                    let data = dataCtr[p];
                    expect(data).to.be.a('string');
                    expect(data).to.be("updateOn");
                  }
                }
                expect(data.effect).to.be.a('string');
                expect(data.effect).to.be("allow");

                      }
            }
            expect(data.on).to.be.a('boolean');
            expect(data.on).to.be(true);
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
            expect(data.status).to.be.a(LaunchDarklyApi.IntegrationSubscriptionStatus);
                  expect(data.status.successCount).to.be.a('number');
              expect(data.status.successCount).to.be(6);
              expect(data.status.lastSuccess).to.be.a('number');
              expect(data.status.lastSuccess).to.be(1443652232590);
              expect(data.status.errorCount).to.be.a('number');
              expect(data.status.errorCount).to.be(2);

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('postIntegrationSubscription', function() {
        it('should call postIntegrationSubscription successfully', function(done) {
          // TODO: uncomment, update parameter values for postIntegrationSubscription call and complete the assertions
          /*
          var integrationKey = "integrationKey_example";
          var subscriptionBody = new LaunchDarklyApi.SubscriptionBody();
          subscriptionBody.name = "Example Datadog Integration";
          subscriptionBody.statements = [new LaunchDarklyApi.Statement()];
          subscriptionBody.statements[0].resources = ["proj/*:env/*:flag/my-flag"];
          subscriptionBody.statements[0].notResources = ["proj/*:env/*:flag/my-flag"];
          subscriptionBody.statements[0].actions = ["updateOn"];
          subscriptionBody.statements[0].notActions = ["updateOn"];
          subscriptionBody.statements[0].effect = "allow";
          subscriptionBody.config = {"apiKey":"582**************************116","hostURL":"https://api.datadoghq.com"};
          subscriptionBody.on = true;
          subscriptionBody.tags = [];

          instance.postIntegrationSubscription(integrationKey, subscriptionBody, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(LaunchDarklyApi.IntegrationSubscription);
            expect(data.links).to.be.a(LaunchDarklyApi.HierarchicalLinks);
                  expect(data.links.parent).to.be.a(LaunchDarklyApi.Link);
                    expect(data.links.parent.href).to.be.a('string');
                expect(data.links.parent.href).to.be("/api/v2/endpoint");
                expect(data.links.parent.type).to.be.a('string');
                expect(data.links.parent.type).to.be("application/json");
              expect(data.links.self).to.be.a(LaunchDarklyApi.Link);
                    expect(data.links.self.href).to.be.a('string');
                expect(data.links.self.href).to.be("/api/v2/endpoint");
                expect(data.links.self.type).to.be.a('string');
                expect(data.links.self.type).to.be("application/json");
            expect(data.id).to.be.a(LaunchDarklyApi.Id);
                expect(data.kind).to.be.a('string');
            expect(data.kind).to.be("datadog");
            expect(data.name).to.be.a('string');
            expect(data.name).to.be("V2");
            expect(data.config).to.be.a(Object);
            expect(data.config).to.be({"apiKey":"582**************************116","hostURL":"https://api.datadoghq.com"});
            {
              let dataCtr = data.statements;
              expect(dataCtr).to.be.an(Array);
              expect(dataCtr).to.not.be.empty();
              for (let p in dataCtr) {
                let data = dataCtr[p];
                expect(data).to.be.a(LaunchDarklyApi.Statement);
                {
                  let dataCtr = data.resources;
                  expect(dataCtr).to.be.an(Array);
                  expect(dataCtr).to.not.be.empty();
                  for (let p in dataCtr) {
                    let data = dataCtr[p];
                    expect(data).to.be.a('string');
                    expect(data).to.be("proj/*:env/*:flag/my-flag");
                  }
                }
                {
                  let dataCtr = data.notResources;
                  expect(dataCtr).to.be.an(Array);
                  expect(dataCtr).to.not.be.empty();
                  for (let p in dataCtr) {
                    let data = dataCtr[p];
                    expect(data).to.be.a('string');
                    expect(data).to.be("proj/*:env/*:flag/my-flag");
                  }
                }
                {
                  let dataCtr = data.actions;
                  expect(dataCtr).to.be.an(Array);
                  expect(dataCtr).to.not.be.empty();
                  for (let p in dataCtr) {
                    let data = dataCtr[p];
                    expect(data).to.be.a('string');
                    expect(data).to.be("updateOn");
                  }
                }
                {
                  let dataCtr = data.notActions;
                  expect(dataCtr).to.be.an(Array);
                  expect(dataCtr).to.not.be.empty();
                  for (let p in dataCtr) {
                    let data = dataCtr[p];
                    expect(data).to.be.a('string');
                    expect(data).to.be("updateOn");
                  }
                }
                expect(data.effect).to.be.a('string');
                expect(data.effect).to.be("allow");

                      }
            }
            expect(data.on).to.be.a('boolean');
            expect(data.on).to.be(true);
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
            expect(data.status).to.be.a(LaunchDarklyApi.IntegrationSubscriptionStatus);
                  expect(data.status.successCount).to.be.a('number');
              expect(data.status.successCount).to.be(6);
              expect(data.status.lastSuccess).to.be.a('number');
              expect(data.status.lastSuccess).to.be(1443652232590);
              expect(data.status.errorCount).to.be.a('number');
              expect(data.status.errorCount).to.be(2);

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
