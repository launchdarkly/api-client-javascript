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

  describe('(package)', function() {
    describe('MemberLastSeenMetadata', function() {
      beforeEach(function() {
        instance = new LaunchDarklyApi.MemberLastSeenMetadata();
      });

      it('should create an instance of MemberLastSeenMetadata', function() {
        // TODO: update the code to test MemberLastSeenMetadata
        expect(instance).to.be.a(LaunchDarklyApi.MemberLastSeenMetadata);
      });

      it('should have the property tokenId (base name: "tokenId")', function() {
        // TODO: update the code to test the property tokenId
        expect(instance).to.have.property('tokenId');
        // expect(instance.tokenId).to.be(expectedValueLiteral);
      });

    });
  });

}));
