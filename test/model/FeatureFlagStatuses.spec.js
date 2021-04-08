/*
 * LaunchDarkly REST API
 * Build custom integrations with the LaunchDarkly REST API
 *
 * OpenAPI spec version: 5.0.3
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
    describe('FeatureFlagStatuses', function() {
      beforeEach(function() {
        instance = new LaunchDarklyApi.FeatureFlagStatuses();
      });

      it('should create an instance of FeatureFlagStatuses', function() {
        // TODO: update the code to test FeatureFlagStatuses
        expect(instance).to.be.a(LaunchDarklyApi.FeatureFlagStatuses);
      });

      it('should have the property links (base name: "_links")', function() {
        // TODO: update the code to test the property links
        expect(instance).to.have.property('links');
        // expect(instance.links).to.be(expectedValueLiteral);
      });

      it('should have the property items (base name: "items")', function() {
        // TODO: update the code to test the property items
        expect(instance).to.have.property('items');
        // expect(instance.items).to.be(expectedValueLiteral);
      });

    });
  });

}));
