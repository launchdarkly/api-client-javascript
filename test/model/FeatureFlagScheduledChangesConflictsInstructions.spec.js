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
    describe('FeatureFlagScheduledChangesConflictsInstructions', function() {
      beforeEach(function() {
        instance = new LaunchDarklyApi.FeatureFlagScheduledChangesConflictsInstructions();
      });

      it('should create an instance of FeatureFlagScheduledChangesConflictsInstructions', function() {
        // TODO: update the code to test FeatureFlagScheduledChangesConflictsInstructions
        expect(instance).to.be.a(LaunchDarklyApi.FeatureFlagScheduledChangesConflictsInstructions);
      });

      it('should have the property kind (base name: "kind")', function() {
        // TODO: update the code to test the property kind
        expect(instance).to.have.property('kind');
        // expect(instance.kind).to.be(expectedValueLiteral);
      });

      it('should have the property conflicts (base name: "conflicts")', function() {
        // TODO: update the code to test the property conflicts
        expect(instance).to.have.property('conflicts');
        // expect(instance.conflicts).to.be(expectedValueLiteral);
      });

    });
  });

}));
