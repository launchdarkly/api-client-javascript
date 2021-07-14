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
    describe('UsageLinks', function() {
      beforeEach(function() {
        instance = new LaunchDarklyApi.UsageLinks();
      });

      it('should create an instance of UsageLinks', function() {
        // TODO: update the code to test UsageLinks
        expect(instance).to.be.a(LaunchDarklyApi.UsageLinks);
      });

      it('should have the property parent (base name: "parent")', function() {
        // TODO: update the code to test the property parent
        expect(instance).to.have.property('parent');
        // expect(instance.parent).to.be(expectedValueLiteral);
      });

      it('should have the property self (base name: "self")', function() {
        // TODO: update the code to test the property self
        expect(instance).to.have.property('self');
        // expect(instance.self).to.be(expectedValueLiteral);
      });

      it('should have the property subseries (base name: "subseries")', function() {
        // TODO: update the code to test the property subseries
        expect(instance).to.have.property('subseries');
        // expect(instance.subseries).to.be(expectedValueLiteral);
      });

    });
  });

}));
