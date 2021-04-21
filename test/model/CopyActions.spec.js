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
    describe('CopyActions', function() {
      beforeEach(function() {
        instance = LaunchDarklyApi.CopyActions;
      });

      it('should create an instance of CopyActions', function() {
        // TODO: update the code to test CopyActions
        expect(instance).to.be.a('object');
      });

      it('should have the property updateOn', function() {
        expect(instance).to.have.property('updateOn');
        expect(instance.updateOn).to.be("updateOn");
      });

      it('should have the property updatePrerequisites', function() {
        expect(instance).to.have.property('updatePrerequisites');
        expect(instance.updatePrerequisites).to.be("updatePrerequisites");
      });

      it('should have the property updateTargets', function() {
        expect(instance).to.have.property('updateTargets');
        expect(instance.updateTargets).to.be("updateTargets");
      });

      it('should have the property updateRules', function() {
        expect(instance).to.have.property('updateRules');
        expect(instance.updateRules).to.be("updateRules");
      });

      it('should have the property updateFallthrough', function() {
        expect(instance).to.have.property('updateFallthrough');
        expect(instance.updateFallthrough).to.be("updateFallthrough");
      });

      it('should have the property updateOffVariation', function() {
        expect(instance).to.have.property('updateOffVariation');
        expect(instance.updateOffVariation).to.be("updateOffVariation");
      });

    });
  });

}));
