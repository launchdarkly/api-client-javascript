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
    instance = new LaunchDarklyApi.AuditLogApi();
  });

  describe('(package)', function() {
    describe('AuditLogApi', function() {
      describe('getAuditLogEntries', function() {
        it('should call getAuditLogEntries successfully', function(done) {
          // TODO: uncomment, update parameter values for getAuditLogEntries call and complete the assertions
          /*
          var opts = {};
          opts.before = 789;
          opts.after = 789;
          opts.q = "q_example";
          opts.limit = 8.14;
          opts.spec = "spec_example";

          instance.getAuditLogEntries(opts, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(LaunchDarklyApi.AuditLogEntries);
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
                expect(data).to.be.a(LaunchDarklyApi.AuditLogEntry);
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
                    expect(data._date).to.be.a('number');
                expect(data._date).to.be(1472243938774);
                expect(data.kind).to.be.a('string');
                expect(data.kind).to.be("environment");
                expect(data.name).to.be.a('string');
                expect(data.name).to.be("Testing");
                expect(data.description).to.be.a('string');
                expect(data.description).to.be("Changed the name from Test to Testing");
                expect(data.shortDescription).to.be.a('string');
                expect(data.shortDescription).to.be("");
                expect(data.comment).to.be.a('string');
                expect(data.comment).to.be("This is a comment string");
                expect(data.member).to.be.a(LaunchDarklyApi.Member);
                      expect(data.member.links).to.be.a(LaunchDarklyApi.Links);
                        expect(data.member.links.self).to.be.a(LaunchDarklyApi.Link);
                          expect(data.member.links.self.href).to.be.a('string');
                      expect(data.member.links.self.href).to.be("/api/v2/endpoint");
                      expect(data.member.links.self.type).to.be.a('string');
                      expect(data.member.links.self.type).to.be("application/json");
                    expect(data.member.links.next).to.be.a(LaunchDarklyApi.Link);
                          expect(data.member.links.next.href).to.be.a('string');
                      expect(data.member.links.next.href).to.be("/api/v2/endpoint");
                      expect(data.member.links.next.type).to.be.a('string');
                      expect(data.member.links.next.type).to.be("application/json");
                  expect(data.member.id).to.be.a(LaunchDarklyApi.Id);
                      expect(data.member.role).to.be.a(LaunchDarklyApi.Role);
                      expect(data.member.email).to.be.a('string');
                  expect(data.member.email).to.be("user@launchdarkly.com");
                  expect(data.member.firstName).to.be.a('string');
                  expect(data.member.firstName).to.be("Alan");
                  expect(data.member.lastName).to.be.a('string');
                  expect(data.member.lastName).to.be("Turing");
                  expect(data.member.verified).to.be.a('boolean');
                  expect(data.member.verified).to.be(false);
                  expect(data.member.pendingInvite).to.be.a('boolean');
                  expect(data.member.pendingInvite).to.be(false);
                  expect(data.member.isBeta).to.be.a('boolean');
                  expect(data.member.isBeta).to.be(false);
                  {
                    let dataCtr = data.member.customRoles;
                    expect(dataCtr).to.be.an(Array);
                    expect(dataCtr).to.not.be.empty();
                    for (let p in dataCtr) {
                      let data = dataCtr[p];
                      expect(data).to.be.a(LaunchDarklyApi.Id);
      
                            }
                  }
                  expect(data.member.lastSeen).to.be.a('number');
                  expect(data.member.lastSeen).to.be(1469326565348);
                  expect(data.member.lastSeenMetadata).to.be.a(LaunchDarklyApi.MemberLastSeenMetadata);
                        expect(data.member.lastSeenMetadata.tokenId).to.be.a('string');
                    expect(data.member.lastSeenMetadata.tokenId).to.be("5fd2a1ee05600316d5cb3e96");
                expect(data.titleVerb).to.be.a('string');
                expect(data.titleVerb).to.be("changed the name of");
                expect(data.title).to.be.a('string');
                expect(data.title).to.be("[Reese Applebaum](mailto:refapp@launchdarkly.com) changed the name of [Testing](https://app.launchdarkly.com/settings#/projects)");
                expect(data.target).to.be.a(LaunchDarklyApi.AuditLogEntryTarget);
                      expect(data.target.links).to.be.a(LaunchDarklyApi.Links);
                        expect(data.target.links.self).to.be.a(LaunchDarklyApi.Link);
                          expect(data.target.links.self.href).to.be.a('string');
                      expect(data.target.links.self.href).to.be("/api/v2/endpoint");
                      expect(data.target.links.self.type).to.be.a('string');
                      expect(data.target.links.self.type).to.be("application/json");
                    expect(data.target.links.next).to.be.a(LaunchDarklyApi.Link);
                          expect(data.target.links.next.href).to.be.a('string');
                      expect(data.target.links.next.href).to.be("/api/v2/endpoint");
                      expect(data.target.links.next.type).to.be.a('string');
                      expect(data.target.links.next.type).to.be("application/json");
                  expect(data.target.name).to.be.a('string');
                  expect(data.target.name).to.be("Testing");
                  {
                    let dataCtr = data.target.resources;
                    expect(dataCtr).to.be.an(Array);
                    expect(dataCtr).to.not.be.empty();
                    for (let p in dataCtr) {
                      let data = dataCtr[p];
                      expect(data).to.be.a('string');
                      expect(data).to.be("proj/alexis:env/test");
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
      describe('getAuditLogEntry', function() {
        it('should call getAuditLogEntry successfully', function(done) {
          // TODO: uncomment, update parameter values for getAuditLogEntry call and complete the assertions
          /*
          var resourceId = "resourceId_example";

          instance.getAuditLogEntry(resourceId, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(LaunchDarklyApi.AuditLogEntry);
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
                expect(data._date).to.be.a('number');
            expect(data._date).to.be(1472243938774);
            expect(data.kind).to.be.a('string');
            expect(data.kind).to.be("environment");
            expect(data.name).to.be.a('string');
            expect(data.name).to.be("Testing");
            expect(data.description).to.be.a('string');
            expect(data.description).to.be("Changed the name from Test to Testing");
            expect(data.shortDescription).to.be.a('string');
            expect(data.shortDescription).to.be("");
            expect(data.comment).to.be.a('string');
            expect(data.comment).to.be("This is a comment string");
            expect(data.member).to.be.a(LaunchDarklyApi.Member);
                  expect(data.member.links).to.be.a(LaunchDarklyApi.Links);
                    expect(data.member.links.self).to.be.a(LaunchDarklyApi.Link);
                      expect(data.member.links.self.href).to.be.a('string');
                  expect(data.member.links.self.href).to.be("/api/v2/endpoint");
                  expect(data.member.links.self.type).to.be.a('string');
                  expect(data.member.links.self.type).to.be("application/json");
                expect(data.member.links.next).to.be.a(LaunchDarklyApi.Link);
                      expect(data.member.links.next.href).to.be.a('string');
                  expect(data.member.links.next.href).to.be("/api/v2/endpoint");
                  expect(data.member.links.next.type).to.be.a('string');
                  expect(data.member.links.next.type).to.be("application/json");
              expect(data.member.id).to.be.a(LaunchDarklyApi.Id);
                  expect(data.member.role).to.be.a(LaunchDarklyApi.Role);
                  expect(data.member.email).to.be.a('string');
              expect(data.member.email).to.be("user@launchdarkly.com");
              expect(data.member.firstName).to.be.a('string');
              expect(data.member.firstName).to.be("Alan");
              expect(data.member.lastName).to.be.a('string');
              expect(data.member.lastName).to.be("Turing");
              expect(data.member.verified).to.be.a('boolean');
              expect(data.member.verified).to.be(false);
              expect(data.member.pendingInvite).to.be.a('boolean');
              expect(data.member.pendingInvite).to.be(false);
              expect(data.member.isBeta).to.be.a('boolean');
              expect(data.member.isBeta).to.be(false);
              {
                let dataCtr = data.member.customRoles;
                expect(dataCtr).to.be.an(Array);
                expect(dataCtr).to.not.be.empty();
                for (let p in dataCtr) {
                  let data = dataCtr[p];
                  expect(data).to.be.a(LaunchDarklyApi.Id);
  
                        }
              }
              expect(data.member.lastSeen).to.be.a('number');
              expect(data.member.lastSeen).to.be(1469326565348);
              expect(data.member.lastSeenMetadata).to.be.a(LaunchDarklyApi.MemberLastSeenMetadata);
                    expect(data.member.lastSeenMetadata.tokenId).to.be.a('string');
                expect(data.member.lastSeenMetadata.tokenId).to.be("5fd2a1ee05600316d5cb3e96");
            expect(data.titleVerb).to.be.a('string');
            expect(data.titleVerb).to.be("changed the name of");
            expect(data.title).to.be.a('string');
            expect(data.title).to.be("[Reese Applebaum](mailto:refapp@launchdarkly.com) changed the name of [Testing](https://app.launchdarkly.com/settings#/projects)");
            expect(data.target).to.be.a(LaunchDarklyApi.AuditLogEntryTarget);
                  expect(data.target.links).to.be.a(LaunchDarklyApi.Links);
                    expect(data.target.links.self).to.be.a(LaunchDarklyApi.Link);
                      expect(data.target.links.self.href).to.be.a('string');
                  expect(data.target.links.self.href).to.be("/api/v2/endpoint");
                  expect(data.target.links.self.type).to.be.a('string');
                  expect(data.target.links.self.type).to.be("application/json");
                expect(data.target.links.next).to.be.a(LaunchDarklyApi.Link);
                      expect(data.target.links.next.href).to.be.a('string');
                  expect(data.target.links.next.href).to.be("/api/v2/endpoint");
                  expect(data.target.links.next.type).to.be.a('string');
                  expect(data.target.links.next.type).to.be("application/json");
              expect(data.target.name).to.be.a('string');
              expect(data.target.name).to.be("Testing");
              {
                let dataCtr = data.target.resources;
                expect(dataCtr).to.be.an(Array);
                expect(dataCtr).to.not.be.empty();
                for (let p in dataCtr) {
                  let data = dataCtr[p];
                  expect(data).to.be.a('string');
                  expect(data).to.be("proj/alexis:env/test");
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
