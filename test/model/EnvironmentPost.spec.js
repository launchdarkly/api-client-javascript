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
    describe('EnvironmentPost', function() {
      beforeEach(function() {
        instance = new LaunchDarklyApi.EnvironmentPost();
      });

      it('should create an instance of EnvironmentPost', function() {
        // TODO: update the code to test EnvironmentPost
        expect(instance).to.be.a(LaunchDarklyApi.EnvironmentPost);
      });

      it('should have the property name (base name: "name")', function() {
        // TODO: update the code to test the property name
        expect(instance).to.have.property('name');
        // expect(instance.name).to.be(expectedValueLiteral);
      });

      it('should have the property key (base name: "key")', function() {
        // TODO: update the code to test the property key
        expect(instance).to.have.property('key');
        // expect(instance.key).to.be(expectedValueLiteral);
      });

      it('should have the property color (base name: "color")', function() {
        // TODO: update the code to test the property color
        expect(instance).to.have.property('color');
        // expect(instance.color).to.be(expectedValueLiteral);
      });

      it('should have the property defaultTtl (base name: "defaultTtl")', function() {
        // TODO: update the code to test the property defaultTtl
        expect(instance).to.have.property('defaultTtl');
        // expect(instance.defaultTtl).to.be(expectedValueLiteral);
      });

      it('should have the property secureMode (base name: "secureMode")', function() {
        // TODO: update the code to test the property secureMode
        expect(instance).to.have.property('secureMode');
        // expect(instance.secureMode).to.be(expectedValueLiteral);
      });

      it('should have the property defaultTrackEvents (base name: "defaultTrackEvents")', function() {
        // TODO: update the code to test the property defaultTrackEvents
        expect(instance).to.have.property('defaultTrackEvents');
        // expect(instance.defaultTrackEvents).to.be(expectedValueLiteral);
      });

      it('should have the property tags (base name: "tags")', function() {
        // TODO: update the code to test the property tags
        expect(instance).to.have.property('tags');
        // expect(instance.tags).to.be(expectedValueLiteral);
      });

      it('should have the property requireComments (base name: "requireComments")', function() {
        // TODO: update the code to test the property requireComments
        expect(instance).to.have.property('requireComments');
        // expect(instance.requireComments).to.be(expectedValueLiteral);
      });

      it('should have the property confirmChanges (base name: "confirmChanges")', function() {
        // TODO: update the code to test the property confirmChanges
        expect(instance).to.have.property('confirmChanges');
        // expect(instance.confirmChanges).to.be(expectedValueLiteral);
      });

    });
  });

}));
