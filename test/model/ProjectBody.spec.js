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
    describe('ProjectBody', function() {
      beforeEach(function() {
        instance = new LaunchDarklyApi.ProjectBody();
      });

      it('should create an instance of ProjectBody', function() {
        // TODO: update the code to test ProjectBody
        expect(instance).to.be.a(LaunchDarklyApi.ProjectBody);
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

      it('should have the property includeInSnippetByDefault (base name: "includeInSnippetByDefault")', function() {
        // TODO: update the code to test the property includeInSnippetByDefault
        expect(instance).to.have.property('includeInSnippetByDefault');
        // expect(instance.includeInSnippetByDefault).to.be(expectedValueLiteral);
      });

      it('should have the property tags (base name: "tags")', function() {
        // TODO: update the code to test the property tags
        expect(instance).to.have.property('tags');
        // expect(instance.tags).to.be(expectedValueLiteral);
      });

      it('should have the property environments (base name: "environments")', function() {
        // TODO: update the code to test the property environments
        expect(instance).to.have.property('environments');
        // expect(instance.environments).to.be(expectedValueLiteral);
      });

      it('should have the property defaultClientSideAvailability (base name: "defaultClientSideAvailability")', function() {
        // TODO: update the code to test the property defaultClientSideAvailability
        expect(instance).to.have.property('defaultClientSideAvailability');
        // expect(instance.defaultClientSideAvailability).to.be(expectedValueLiteral);
      });

    });
  });

}));
