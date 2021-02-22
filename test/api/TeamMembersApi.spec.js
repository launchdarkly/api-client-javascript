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
    instance = new LaunchDarklyApi.TeamMembersApi();
  });

  describe('(package)', function() {
    describe('TeamMembersApi', function() {
      describe('deleteMember', function() {
        it('should call deleteMember successfully', function(done) {
          // TODO: uncomment, update parameter values for deleteMember call
          /*
          var memberId = "memberId_example";

          instance.deleteMember(memberId, function(error, data, response) {
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
      describe('getMe', function() {
        it('should call getMe successfully', function(done) {
          // TODO: uncomment getMe call and complete the assertions
          /*

          instance.getMe(function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(LaunchDarklyApi.Member);
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
                expect(data.role).to.be.a(LaunchDarklyApi.Role);
                expect(data.email).to.be.a('string');
            expect(data.email).to.be("user@launchdarkly.com");
            expect(data.firstName).to.be.a('string');
            expect(data.firstName).to.be("Alan");
            expect(data.lastName).to.be.a('string');
            expect(data.lastName).to.be("Turing");
            expect(data.verified).to.be.a('boolean');
            expect(data.verified).to.be(false);
            expect(data.pendingInvite).to.be.a('boolean');
            expect(data.pendingInvite).to.be(false);
            expect(data.isBeta).to.be.a('boolean');
            expect(data.isBeta).to.be(false);
            {
              let dataCtr = data.customRoles;
              expect(dataCtr).to.be.an(Array);
              expect(dataCtr).to.not.be.empty();
              for (let p in dataCtr) {
                let data = dataCtr[p];
                expect(data).to.be.a(LaunchDarklyApi.Id);

                      }
            }
            expect(data.lastSeen).to.be.a('number');
            expect(data.lastSeen).to.be(1469326565348);
            expect(data.lastSeenMetadata).to.be.a(LaunchDarklyApi.MemberLastSeenMetadata);
                  expect(data.lastSeenMetadata.tokenId).to.be.a('string');
              expect(data.lastSeenMetadata.tokenId).to.be("5fd2a1ee05600316d5cb3e96");

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('getMember', function() {
        it('should call getMember successfully', function(done) {
          // TODO: uncomment, update parameter values for getMember call and complete the assertions
          /*
          var memberId = "memberId_example";

          instance.getMember(memberId, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(LaunchDarklyApi.Member);
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
                expect(data.role).to.be.a(LaunchDarklyApi.Role);
                expect(data.email).to.be.a('string');
            expect(data.email).to.be("user@launchdarkly.com");
            expect(data.firstName).to.be.a('string');
            expect(data.firstName).to.be("Alan");
            expect(data.lastName).to.be.a('string');
            expect(data.lastName).to.be("Turing");
            expect(data.verified).to.be.a('boolean');
            expect(data.verified).to.be(false);
            expect(data.pendingInvite).to.be.a('boolean');
            expect(data.pendingInvite).to.be(false);
            expect(data.isBeta).to.be.a('boolean');
            expect(data.isBeta).to.be(false);
            {
              let dataCtr = data.customRoles;
              expect(dataCtr).to.be.an(Array);
              expect(dataCtr).to.not.be.empty();
              for (let p in dataCtr) {
                let data = dataCtr[p];
                expect(data).to.be.a(LaunchDarklyApi.Id);

                      }
            }
            expect(data.lastSeen).to.be.a('number');
            expect(data.lastSeen).to.be(1469326565348);
            expect(data.lastSeenMetadata).to.be.a(LaunchDarklyApi.MemberLastSeenMetadata);
                  expect(data.lastSeenMetadata.tokenId).to.be.a('string');
              expect(data.lastSeenMetadata.tokenId).to.be("5fd2a1ee05600316d5cb3e96");

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('getMembers', function() {
        it('should call getMembers successfully', function(done) {
          // TODO: uncomment, update parameter values for getMembers call and complete the assertions
          /*
          var opts = {};
          opts.limit = 8.14;
          opts.offset = 8.14;
          opts.filter = "filter_example";
          opts.sort = "sort_example";

          instance.getMembers(opts, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(LaunchDarklyApi.Members);
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
                expect(data).to.be.a(LaunchDarklyApi.Member);
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
                    expect(data.role).to.be.a(LaunchDarklyApi.Role);
                    expect(data.email).to.be.a('string');
                expect(data.email).to.be("user@launchdarkly.com");
                expect(data.firstName).to.be.a('string');
                expect(data.firstName).to.be("Alan");
                expect(data.lastName).to.be.a('string');
                expect(data.lastName).to.be("Turing");
                expect(data.verified).to.be.a('boolean');
                expect(data.verified).to.be(false);
                expect(data.pendingInvite).to.be.a('boolean');
                expect(data.pendingInvite).to.be(false);
                expect(data.isBeta).to.be.a('boolean');
                expect(data.isBeta).to.be(false);
                {
                  let dataCtr = data.customRoles;
                  expect(dataCtr).to.be.an(Array);
                  expect(dataCtr).to.not.be.empty();
                  for (let p in dataCtr) {
                    let data = dataCtr[p];
                    expect(data).to.be.a(LaunchDarklyApi.Id);
    
                          }
                }
                expect(data.lastSeen).to.be.a('number');
                expect(data.lastSeen).to.be(1469326565348);
                expect(data.lastSeenMetadata).to.be.a(LaunchDarklyApi.MemberLastSeenMetadata);
                      expect(data.lastSeenMetadata.tokenId).to.be.a('string');
                  expect(data.lastSeenMetadata.tokenId).to.be("5fd2a1ee05600316d5cb3e96");

                      }
            }
            expect(data.totalCount).to.be.a('number');
            expect(data.totalCount).to.be();

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('patchMember', function() {
        it('should call patchMember successfully', function(done) {
          // TODO: uncomment, update parameter values for patchMember call and complete the assertions
          /*
          var memberId = "memberId_example";
          var patchDelta = [new LaunchDarklyApi.PatchOperation()];
          patchDelta[0].op = "replace";
          patchDelta[0].path = "/name";
          patchDelta[0].value = "My resource name";

          instance.patchMember(memberId, patchDelta, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(LaunchDarklyApi.Member);
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
                expect(data.role).to.be.a(LaunchDarklyApi.Role);
                expect(data.email).to.be.a('string');
            expect(data.email).to.be("user@launchdarkly.com");
            expect(data.firstName).to.be.a('string');
            expect(data.firstName).to.be("Alan");
            expect(data.lastName).to.be.a('string');
            expect(data.lastName).to.be("Turing");
            expect(data.verified).to.be.a('boolean');
            expect(data.verified).to.be(false);
            expect(data.pendingInvite).to.be.a('boolean');
            expect(data.pendingInvite).to.be(false);
            expect(data.isBeta).to.be.a('boolean');
            expect(data.isBeta).to.be(false);
            {
              let dataCtr = data.customRoles;
              expect(dataCtr).to.be.an(Array);
              expect(dataCtr).to.not.be.empty();
              for (let p in dataCtr) {
                let data = dataCtr[p];
                expect(data).to.be.a(LaunchDarklyApi.Id);

                      }
            }
            expect(data.lastSeen).to.be.a('number');
            expect(data.lastSeen).to.be(1469326565348);
            expect(data.lastSeenMetadata).to.be.a(LaunchDarklyApi.MemberLastSeenMetadata);
                  expect(data.lastSeenMetadata.tokenId).to.be.a('string');
              expect(data.lastSeenMetadata.tokenId).to.be("5fd2a1ee05600316d5cb3e96");

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('postMembers', function() {
        it('should call postMembers successfully', function(done) {
          // TODO: uncomment, update parameter values for postMembers call and complete the assertions
          /*
          var membersBody = [new LaunchDarklyApi.MembersBody()];
          membersBody[0].email = "exampleuser@email.com";
          membersBody[0].firstName = "Bob";
          membersBody[0].lastName = "Loblaw";
          membersBody[0].role = new LaunchDarklyApi.Role();
          membersBody[0].customRoles = ["revenue-team"];
          membersBody[0].inlineRole = [new LaunchDarklyApi.Statement()];
          membersBody[0].inlineRole[0].resources = ["proj/*:env/*:flag/my-flag"];
          membersBody[0].inlineRole[0].notResources = ["proj/*:env/*:flag/my-flag"];
          membersBody[0].inlineRole[0].actions = ["updateOn"];
          membersBody[0].inlineRole[0].notActions = ["updateOn"];
          membersBody[0].inlineRole[0].effect = "allow";

          instance.postMembers(membersBody, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(LaunchDarklyApi.Members);
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
                expect(data).to.be.a(LaunchDarklyApi.Member);
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
                    expect(data.role).to.be.a(LaunchDarklyApi.Role);
                    expect(data.email).to.be.a('string');
                expect(data.email).to.be("user@launchdarkly.com");
                expect(data.firstName).to.be.a('string');
                expect(data.firstName).to.be("Alan");
                expect(data.lastName).to.be.a('string');
                expect(data.lastName).to.be("Turing");
                expect(data.verified).to.be.a('boolean');
                expect(data.verified).to.be(false);
                expect(data.pendingInvite).to.be.a('boolean');
                expect(data.pendingInvite).to.be(false);
                expect(data.isBeta).to.be.a('boolean');
                expect(data.isBeta).to.be(false);
                {
                  let dataCtr = data.customRoles;
                  expect(dataCtr).to.be.an(Array);
                  expect(dataCtr).to.not.be.empty();
                  for (let p in dataCtr) {
                    let data = dataCtr[p];
                    expect(data).to.be.a(LaunchDarklyApi.Id);
    
                          }
                }
                expect(data.lastSeen).to.be.a('number');
                expect(data.lastSeen).to.be(1469326565348);
                expect(data.lastSeenMetadata).to.be.a(LaunchDarklyApi.MemberLastSeenMetadata);
                      expect(data.lastSeenMetadata.tokenId).to.be.a('string');
                  expect(data.lastSeenMetadata.tokenId).to.be("5fd2a1ee05600316d5cb3e96");

                      }
            }
            expect(data.totalCount).to.be.a('number');
            expect(data.totalCount).to.be();

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
