/**
 * LaunchDarkly REST API
 * Build custom integrations with the LaunchDarkly REST API
 *
 * OpenAPI spec version: 3.2.0
 * Contact: support@launchdarkly.com
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.4.8
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

  beforeEach(function() {
    instance = new LaunchDarklyApi.FeatureFlag();
  });

  var getProperty = function(object, getter, property) {
    // Use getter method if present; otherwise, get the property directly.
    if (typeof object[getter] === 'function')
      return object[getter]();
    else
      return object[property];
  }

  var setProperty = function(object, setter, property, value) {
    // Use setter method if present; otherwise, set the property directly.
    if (typeof object[setter] === 'function')
      object[setter](value);
    else
      object[property] = value;
  }

  describe('FeatureFlag', function() {
    it('should create an instance of FeatureFlag', function() {
      // uncomment below and update the code to test FeatureFlag
      //var instance = new LaunchDarklyApi.FeatureFlag();
      //expect(instance).to.be.a(LaunchDarklyApi.FeatureFlag);
    });

    it('should have the property key (base name: "key")', function() {
      // uncomment below and update the code to test the property key
      //var instance = new LaunchDarklyApi.FeatureFlag();
      //expect(instance).to.be();
    });

    it('should have the property name (base name: "name")', function() {
      // uncomment below and update the code to test the property name
      //var instance = new LaunchDarklyApi.FeatureFlag();
      //expect(instance).to.be();
    });

    it('should have the property description (base name: "description")', function() {
      // uncomment below and update the code to test the property description
      //var instance = new LaunchDarklyApi.FeatureFlag();
      //expect(instance).to.be();
    });

    it('should have the property kind (base name: "kind")', function() {
      // uncomment below and update the code to test the property kind
      //var instance = new LaunchDarklyApi.FeatureFlag();
      //expect(instance).to.be();
    });

    it('should have the property creationDate (base name: "creationDate")', function() {
      // uncomment below and update the code to test the property creationDate
      //var instance = new LaunchDarklyApi.FeatureFlag();
      //expect(instance).to.be();
    });

    it('should have the property includeInSnippet (base name: "includeInSnippet")', function() {
      // uncomment below and update the code to test the property includeInSnippet
      //var instance = new LaunchDarklyApi.FeatureFlag();
      //expect(instance).to.be();
    });

    it('should have the property temporary (base name: "temporary")', function() {
      // uncomment below and update the code to test the property temporary
      //var instance = new LaunchDarklyApi.FeatureFlag();
      //expect(instance).to.be();
    });

    it('should have the property maintainerId (base name: "maintainerId")', function() {
      // uncomment below and update the code to test the property maintainerId
      //var instance = new LaunchDarklyApi.FeatureFlag();
      //expect(instance).to.be();
    });

    it('should have the property tags (base name: "tags")', function() {
      // uncomment below and update the code to test the property tags
      //var instance = new LaunchDarklyApi.FeatureFlag();
      //expect(instance).to.be();
    });

    it('should have the property variations (base name: "variations")', function() {
      // uncomment below and update the code to test the property variations
      //var instance = new LaunchDarklyApi.FeatureFlag();
      //expect(instance).to.be();
    });

    it('should have the property goalIds (base name: "goalIds")', function() {
      // uncomment below and update the code to test the property goalIds
      //var instance = new LaunchDarklyApi.FeatureFlag();
      //expect(instance).to.be();
    });

    it('should have the property version (base name: "_version")', function() {
      // uncomment below and update the code to test the property version
      //var instance = new LaunchDarklyApi.FeatureFlag();
      //expect(instance).to.be();
    });

    it('should have the property customProperties (base name: "customProperties")', function() {
      // uncomment below and update the code to test the property customProperties
      //var instance = new LaunchDarklyApi.FeatureFlag();
      //expect(instance).to.be();
    });

    it('should have the property links (base name: "_links")', function() {
      // uncomment below and update the code to test the property links
      //var instance = new LaunchDarklyApi.FeatureFlag();
      //expect(instance).to.be();
    });

    it('should have the property maintainer (base name: "_maintainer")', function() {
      // uncomment below and update the code to test the property maintainer
      //var instance = new LaunchDarklyApi.FeatureFlag();
      //expect(instance).to.be();
    });

    it('should have the property environments (base name: "environments")', function() {
      // uncomment below and update the code to test the property environments
      //var instance = new LaunchDarklyApi.FeatureFlag();
      //expect(instance).to.be();
    });

    it('should have the property archivedDate (base name: "archivedDate")', function() {
      // uncomment below and update the code to test the property archivedDate
      //var instance = new LaunchDarklyApi.FeatureFlag();
      //expect(instance).to.be();
    });

    it('should have the property archived (base name: "archived")', function() {
      // uncomment below and update the code to test the property archived
      //var instance = new LaunchDarklyApi.FeatureFlag();
      //expect(instance).to.be();
    });

    it('should have the property defaults (base name: "defaults")', function() {
      // uncomment below and update the code to test the property defaults
      //var instance = new LaunchDarklyApi.FeatureFlag();
      //expect(instance).to.be();
    });

  });

}));
