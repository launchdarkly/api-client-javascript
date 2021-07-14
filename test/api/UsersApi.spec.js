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
    instance = new LaunchDarklyApi.UsersApi();
  });

  describe('(package)', function() {
    describe('UsersApi', function() {
      describe('deleteUser', function() {
        it('should call deleteUser successfully', function(done) {
          // TODO: uncomment, update parameter values for deleteUser call
          /*
          var projectKey = "projectKey_example";
          var environmentKey = "environmentKey_example";
          var userKey = "userKey_example";

          instance.deleteUser(projectKey, environmentKey, userKey, function(error, data, response) {
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
      describe('getSearchUsers', function() {
        it('should call getSearchUsers successfully', function(done) {
          // TODO: uncomment, update parameter values for getSearchUsers call and complete the assertions
          /*
          var projectKey = "projectKey_example";
          var environmentKey = "environmentKey_example";
          var opts = {};
          opts.q = "q_example";
          opts.limit = 56;
          opts.offset = 56;
          opts.after = 789;

          instance.getSearchUsers(projectKey, environmentKey, opts, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(LaunchDarklyApi.Users);
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
            expect(data.totalCount).to.be.a('number');
            expect(data.totalCount).to.be(3.0);
            {
              let dataCtr = data.items;
              expect(dataCtr).to.be.an(Array);
              expect(dataCtr).to.not.be.empty();
              for (let p in dataCtr) {
                let data = dataCtr[p];
                expect(data).to.be.a(LaunchDarklyApi.UserRecord);
                expect(data.lastPing).to.be.a('string');
                expect(data.lastPing).to.be("2015-03-03T02:37:22.492Z");
                expect(data.environmentId).to.be.a('string');
                expect(data.environmentId).to.be("54ac2d97de674204ddd61096");
                expect(data.ownerId).to.be.a(LaunchDarklyApi.Id);
                    expect(data.user).to.be.a(LaunchDarklyApi.User);
                      expect(data.user.key).to.be.a('string');
                  expect(data.user.key).to.be("a00bea");
                  expect(data.user.secondary).to.be.a('string');
                  expect(data.user.secondary).to.be("");
                  expect(data.user.ip).to.be.a('string');
                  expect(data.user.ip).to.be("");
                  expect(data.user.country).to.be.a('string');
                  expect(data.user.country).to.be("");
                  expect(data.user.email).to.be.a('string');
                  expect(data.user.email).to.be("");
                  expect(data.user.firstName).to.be.a('string');
                  expect(data.user.firstName).to.be("");
                  expect(data.user.lastName).to.be.a('string');
                  expect(data.user.lastName).to.be("");
                  expect(data.user.avatar).to.be.a('string');
                  expect(data.user.avatar).to.be("");
                  expect(data.user.name).to.be.a('string');
                  expect(data.user.name).to.be("Bob Loblaw");
                  expect(data.user.anonymous).to.be.a('boolean');
                  expect(data.user.anonymous).to.be(false);
                  expect(data.user.custom).to.be.a(Object);
                  expect(data.user.custom).to.be({"company":"example.com"});
                expect(data.avatar).to.be.a('string');
                expect(data.avatar).to.be("https://s3.amazonaws.com/uifaces/faces/twitter/shylockjoy/73.jpg");

                      }
            }

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('getUser', function() {
        it('should call getUser successfully', function(done) {
          // TODO: uncomment, update parameter values for getUser call and complete the assertions
          /*
          var projectKey = "projectKey_example";
          var environmentKey = "environmentKey_example";
          var userKey = "userKey_example";

          instance.getUser(projectKey, environmentKey, userKey, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(LaunchDarklyApi.UserRecord);
            expect(data.lastPing).to.be.a('string');
            expect(data.lastPing).to.be("2015-03-03T02:37:22.492Z");
            expect(data.environmentId).to.be.a('string');
            expect(data.environmentId).to.be("54ac2d97de674204ddd61096");
            expect(data.ownerId).to.be.a(LaunchDarklyApi.Id);
                expect(data.user).to.be.a(LaunchDarklyApi.User);
                  expect(data.user.key).to.be.a('string');
              expect(data.user.key).to.be("a00bea");
              expect(data.user.secondary).to.be.a('string');
              expect(data.user.secondary).to.be("");
              expect(data.user.ip).to.be.a('string');
              expect(data.user.ip).to.be("");
              expect(data.user.country).to.be.a('string');
              expect(data.user.country).to.be("");
              expect(data.user.email).to.be.a('string');
              expect(data.user.email).to.be("");
              expect(data.user.firstName).to.be.a('string');
              expect(data.user.firstName).to.be("");
              expect(data.user.lastName).to.be.a('string');
              expect(data.user.lastName).to.be("");
              expect(data.user.avatar).to.be.a('string');
              expect(data.user.avatar).to.be("");
              expect(data.user.name).to.be.a('string');
              expect(data.user.name).to.be("Bob Loblaw");
              expect(data.user.anonymous).to.be.a('boolean');
              expect(data.user.anonymous).to.be(false);
              expect(data.user.custom).to.be.a(Object);
              expect(data.user.custom).to.be({"company":"example.com"});
            expect(data.avatar).to.be.a('string');
            expect(data.avatar).to.be("https://s3.amazonaws.com/uifaces/faces/twitter/shylockjoy/73.jpg");

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('getUsers', function() {
        it('should call getUsers successfully', function(done) {
          // TODO: uncomment, update parameter values for getUsers call and complete the assertions
          /*
          var projectKey = "projectKey_example";
          var environmentKey = "environmentKey_example";
          var opts = {};
          opts.limit = 56;
          opts.h = "h_example";
          opts.scrollId = "scrollId_example";

          instance.getUsers(projectKey, environmentKey, opts, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(LaunchDarklyApi.Users);
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
            expect(data.totalCount).to.be.a('number');
            expect(data.totalCount).to.be(3.0);
            {
              let dataCtr = data.items;
              expect(dataCtr).to.be.an(Array);
              expect(dataCtr).to.not.be.empty();
              for (let p in dataCtr) {
                let data = dataCtr[p];
                expect(data).to.be.a(LaunchDarklyApi.UserRecord);
                expect(data.lastPing).to.be.a('string');
                expect(data.lastPing).to.be("2015-03-03T02:37:22.492Z");
                expect(data.environmentId).to.be.a('string');
                expect(data.environmentId).to.be("54ac2d97de674204ddd61096");
                expect(data.ownerId).to.be.a(LaunchDarklyApi.Id);
                    expect(data.user).to.be.a(LaunchDarklyApi.User);
                      expect(data.user.key).to.be.a('string');
                  expect(data.user.key).to.be("a00bea");
                  expect(data.user.secondary).to.be.a('string');
                  expect(data.user.secondary).to.be("");
                  expect(data.user.ip).to.be.a('string');
                  expect(data.user.ip).to.be("");
                  expect(data.user.country).to.be.a('string');
                  expect(data.user.country).to.be("");
                  expect(data.user.email).to.be.a('string');
                  expect(data.user.email).to.be("");
                  expect(data.user.firstName).to.be.a('string');
                  expect(data.user.firstName).to.be("");
                  expect(data.user.lastName).to.be.a('string');
                  expect(data.user.lastName).to.be("");
                  expect(data.user.avatar).to.be.a('string');
                  expect(data.user.avatar).to.be("");
                  expect(data.user.name).to.be.a('string');
                  expect(data.user.name).to.be("Bob Loblaw");
                  expect(data.user.anonymous).to.be.a('boolean');
                  expect(data.user.anonymous).to.be(false);
                  expect(data.user.custom).to.be.a(Object);
                  expect(data.user.custom).to.be({"company":"example.com"});
                expect(data.avatar).to.be.a('string');
                expect(data.avatar).to.be("https://s3.amazonaws.com/uifaces/faces/twitter/shylockjoy/73.jpg");

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
