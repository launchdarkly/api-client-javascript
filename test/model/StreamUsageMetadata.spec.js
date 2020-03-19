/**
 * LaunchDarkly REST API
 * Build custom integrations with the LaunchDarkly REST API
 *
 * OpenAPI spec version: 2.0.32
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
    instance = new LaunchDarklyApi.StreamUsageMetadata();
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

  describe('StreamUsageMetadata', function() {
    it('should create an instance of StreamUsageMetadata', function() {
      // uncomment below and update the code to test StreamUsageMetadata
      //var instance = new LaunchDarklyApi.StreamUsageMetadata();
      //expect(instance).to.be.a(LaunchDarklyApi.StreamUsageMetadata);
    });

    it('should have the property sdk (base name: "sdk")', function() {
      // uncomment below and update the code to test the property sdk
      //var instance = new LaunchDarklyApi.StreamUsageMetadata();
      //expect(instance).to.be();
    });

    it('should have the property version (base name: "version")', function() {
      // uncomment below and update the code to test the property version
      //var instance = new LaunchDarklyApi.StreamUsageMetadata();
      //expect(instance).to.be();
    });

    it('should have the property source (base name: "source")', function() {
      // uncomment below and update the code to test the property source
      //var instance = new LaunchDarklyApi.StreamUsageMetadata();
      //expect(instance).to.be();
    });

  });

}));
