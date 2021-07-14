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
    describe('FeatureFlagStatus', function() {
      beforeEach(function() {
        instance = new LaunchDarklyApi.FeatureFlagStatus();
      });

      it('should create an instance of FeatureFlagStatus', function() {
        // TODO: update the code to test FeatureFlagStatus
        expect(instance).to.be.a(LaunchDarklyApi.FeatureFlagStatus);
      });

      it('should have the property name (base name: "name")', function() {
        // TODO: update the code to test the property name
        expect(instance).to.have.property('name');
        // expect(instance.name).to.be(expectedValueLiteral);
      });

      it('should have the property lastRequested (base name: "lastRequested")', function() {
        // TODO: update the code to test the property lastRequested
        expect(instance).to.have.property('lastRequested');
        // expect(instance.lastRequested).to.be(expectedValueLiteral);
      });

      it('should have the property _default (base name: "default")', function() {
        // TODO: update the code to test the property _default
        expect(instance).to.have.property('_default');
        // expect(instance._default).to.be(expectedValueLiteral);
      });

      it('should have the property links (base name: "_links")', function() {
        // TODO: update the code to test the property links
        expect(instance).to.have.property('links');
        // expect(instance.links).to.be(expectedValueLiteral);
      });

    });
  });

}));
