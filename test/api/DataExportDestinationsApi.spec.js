/*
 * LaunchDarkly REST API
 * Build custom integrations with the LaunchDarkly REST API
 *
 * OpenAPI spec version: 5.0.2
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
    instance = new LaunchDarklyApi.DataExportDestinationsApi();
  });

  describe('(package)', function() {
    describe('DataExportDestinationsApi', function() {
      describe('deleteDestination', function() {
        it('should call deleteDestination successfully', function(done) {
          // TODO: uncomment, update parameter values for deleteDestination call
          /*
          var projectKey = "projectKey_example";
          var environmentKey = "environmentKey_example";
          var destinationId = "destinationId_example";

          instance.deleteDestination(projectKey, environmentKey, destinationId, function(error, data, response) {
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
      describe('getDestination', function() {
        it('should call getDestination successfully', function(done) {
          // TODO: uncomment, update parameter values for getDestination call and complete the assertions
          /*
          var projectKey = "projectKey_example";
          var environmentKey = "environmentKey_example";
          var destinationId = "destinationId_example";

          instance.getDestination(projectKey, environmentKey, destinationId, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(LaunchDarklyApi.Destination);
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
            expect(data.id).to.be.a('string');
            expect(data.id).to.be("37ed9aad-de0a-4665-932e-41c35587aeea");
            expect(data.name).to.be.a('string');
            expect(data.name).to.be("Example Google Pub/Sub Destination");
            expect(data.kind).to.be.a('string');
            expect(data.kind).to.be("google-pubsub");
            expect(data.config).to.be.a(Object);
            expect(data.config).to.be({"project":"cool-project","topic":"test"});
            expect(data.on).to.be.a('boolean');
            expect(data.on).to.be(true);
            expect(data.version).to.be.a('number');
            expect(data.version).to.be(2);

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('getDestinations', function() {
        it('should call getDestinations successfully', function(done) {
          // TODO: uncomment getDestinations call and complete the assertions
          /*

          instance.getDestinations(function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(LaunchDarklyApi.Destinations);
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
                expect(data).to.be.a(LaunchDarklyApi.Destination);
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
                expect(data.id).to.be.a('string');
                expect(data.id).to.be("37ed9aad-de0a-4665-932e-41c35587aeea");
                expect(data.name).to.be.a('string');
                expect(data.name).to.be("Example Google Pub/Sub Destination");
                expect(data.kind).to.be.a('string');
                expect(data.kind).to.be("google-pubsub");
                expect(data.config).to.be.a(Object);
                expect(data.config).to.be({"project":"cool-project","topic":"test"});
                expect(data.on).to.be.a('boolean');
                expect(data.on).to.be(true);
                expect(data.version).to.be.a('number');
                expect(data.version).to.be(2);

                      }
            }

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('patchDestination', function() {
        it('should call patchDestination successfully', function(done) {
          // TODO: uncomment, update parameter values for patchDestination call and complete the assertions
          /*
          var projectKey = "projectKey_example";
          var environmentKey = "environmentKey_example";
          var destinationId = "destinationId_example";
          var patchOnly = [new LaunchDarklyApi.PatchOperation()];
          patchOnly[0].op = "replace";
          patchOnly[0].path = "/name";
          patchOnly[0].value = "My resource name";

          instance.patchDestination(projectKey, environmentKey, destinationId, patchOnly, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(LaunchDarklyApi.Destination);
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
            expect(data.id).to.be.a('string');
            expect(data.id).to.be("37ed9aad-de0a-4665-932e-41c35587aeea");
            expect(data.name).to.be.a('string');
            expect(data.name).to.be("Example Google Pub/Sub Destination");
            expect(data.kind).to.be.a('string');
            expect(data.kind).to.be("google-pubsub");
            expect(data.config).to.be.a(Object);
            expect(data.config).to.be({"project":"cool-project","topic":"test"});
            expect(data.on).to.be.a('boolean');
            expect(data.on).to.be(true);
            expect(data.version).to.be.a('number');
            expect(data.version).to.be(2);

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('postDestination', function() {
        it('should call postDestination successfully', function(done) {
          // TODO: uncomment, update parameter values for postDestination call and complete the assertions
          /*
          var projectKey = "projectKey_example";
          var environmentKey = "environmentKey_example";
          var destinationBody = new LaunchDarklyApi.DestinationBody();
          destinationBody.name = "Example Google Pub/Sub Destination";
          destinationBody.kind = "google-pubsub";
          destinationBody.config = {"project":"cool-project","topic":"test"};
          destinationBody.on = true;

          instance.postDestination(projectKey, environmentKey, destinationBody, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(LaunchDarklyApi.Destination);
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
            expect(data.id).to.be.a('string');
            expect(data.id).to.be("37ed9aad-de0a-4665-932e-41c35587aeea");
            expect(data.name).to.be.a('string');
            expect(data.name).to.be("Example Google Pub/Sub Destination");
            expect(data.kind).to.be.a('string');
            expect(data.kind).to.be("google-pubsub");
            expect(data.config).to.be.a(Object);
            expect(data.config).to.be({"project":"cool-project","topic":"test"});
            expect(data.on).to.be.a('boolean');
            expect(data.on).to.be(true);
            expect(data.version).to.be.a('number');
            expect(data.version).to.be(2);

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
