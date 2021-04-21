/*
 * LaunchDarkly REST API
 * Build custom integrations with the LaunchDarkly REST API
 *
 * OpenAPI spec version: 5.1.0
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
    describe('BigSegmentTargetsBody', function() {
      beforeEach(function() {
        instance = new LaunchDarklyApi.BigSegmentTargetsBody();
      });

      it('should create an instance of BigSegmentTargetsBody', function() {
        // TODO: update the code to test BigSegmentTargetsBody
        expect(instance).to.be.a(LaunchDarklyApi.BigSegmentTargetsBody);
      });

      it('should have the property included (base name: "included")', function() {
        // TODO: update the code to test the property included
        expect(instance).to.have.property('included');
        // expect(instance.included).to.be(expectedValueLiteral);
      });

      it('should have the property excluded (base name: "excluded")', function() {
        // TODO: update the code to test the property excluded
        expect(instance).to.have.property('excluded');
        // expect(instance.excluded).to.be(expectedValueLiteral);
      });

    });
  });

}));
