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
    describe('FeatureFlagConfig', function() {
      beforeEach(function() {
        instance = new LaunchDarklyApi.FeatureFlagConfig();
      });

      it('should create an instance of FeatureFlagConfig', function() {
        // TODO: update the code to test FeatureFlagConfig
        expect(instance).to.be.a(LaunchDarklyApi.FeatureFlagConfig);
      });

      it('should have the property on (base name: "on")', function() {
        // TODO: update the code to test the property on
        expect(instance).to.have.property('on');
        // expect(instance.on).to.be(expectedValueLiteral);
      });

      it('should have the property archived (base name: "archived")', function() {
        // TODO: update the code to test the property archived
        expect(instance).to.have.property('archived');
        // expect(instance.archived).to.be(expectedValueLiteral);
      });

      it('should have the property salt (base name: "salt")', function() {
        // TODO: update the code to test the property salt
        expect(instance).to.have.property('salt');
        // expect(instance.salt).to.be(expectedValueLiteral);
      });

      it('should have the property sel (base name: "sel")', function() {
        // TODO: update the code to test the property sel
        expect(instance).to.have.property('sel');
        // expect(instance.sel).to.be(expectedValueLiteral);
      });

      it('should have the property lastModified (base name: "lastModified")', function() {
        // TODO: update the code to test the property lastModified
        expect(instance).to.have.property('lastModified');
        // expect(instance.lastModified).to.be(expectedValueLiteral);
      });

      it('should have the property version (base name: "version")', function() {
        // TODO: update the code to test the property version
        expect(instance).to.have.property('version');
        // expect(instance.version).to.be(expectedValueLiteral);
      });

      it('should have the property targets (base name: "targets")', function() {
        // TODO: update the code to test the property targets
        expect(instance).to.have.property('targets');
        // expect(instance.targets).to.be(expectedValueLiteral);
      });

      it('should have the property rules (base name: "rules")', function() {
        // TODO: update the code to test the property rules
        expect(instance).to.have.property('rules');
        // expect(instance.rules).to.be(expectedValueLiteral);
      });

      it('should have the property fallthrough (base name: "fallthrough")', function() {
        // TODO: update the code to test the property fallthrough
        expect(instance).to.have.property('fallthrough');
        // expect(instance.fallthrough).to.be(expectedValueLiteral);
      });

      it('should have the property offVariation (base name: "offVariation")', function() {
        // TODO: update the code to test the property offVariation
        expect(instance).to.have.property('offVariation');
        // expect(instance.offVariation).to.be(expectedValueLiteral);
      });

      it('should have the property prerequisites (base name: "prerequisites")', function() {
        // TODO: update the code to test the property prerequisites
        expect(instance).to.have.property('prerequisites');
        // expect(instance.prerequisites).to.be(expectedValueLiteral);
      });

      it('should have the property trackEvents (base name: "trackEvents")', function() {
        // TODO: update the code to test the property trackEvents
        expect(instance).to.have.property('trackEvents');
        // expect(instance.trackEvents).to.be(expectedValueLiteral);
      });

      it('should have the property trackEventsFallthrough (base name: "trackEventsFallthrough")', function() {
        // TODO: update the code to test the property trackEventsFallthrough
        expect(instance).to.have.property('trackEventsFallthrough');
        // expect(instance.trackEventsFallthrough).to.be(expectedValueLiteral);
      });

      it('should have the property site (base name: "_site")', function() {
        // TODO: update the code to test the property site
        expect(instance).to.have.property('site');
        // expect(instance.site).to.be(expectedValueLiteral);
      });

      it('should have the property environmentName (base name: "_environmentName")', function() {
        // TODO: update the code to test the property environmentName
        expect(instance).to.have.property('environmentName');
        // expect(instance.environmentName).to.be(expectedValueLiteral);
      });

    });
  });

}));
