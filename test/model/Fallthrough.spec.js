/**
 * LaunchDarkly REST API
 * Build custom integrations with the LaunchDarkly REST API
 *
 * OpenAPI spec version: 2.0.4
 * Contact: support@launchdarkly.com
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.3.1
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
    factory(root.expect, root.LaunchDarklyRestApi);
  }
}(this, function(expect, LaunchDarklyRestApi) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new LaunchDarklyRestApi.Fallthrough();
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

  describe('Fallthrough', function() {
    it('should create an instance of Fallthrough', function() {
      // uncomment below and update the code to test Fallthrough
      //var instane = new LaunchDarklyRestApi.Fallthrough();
      //expect(instance).to.be.a(LaunchDarklyRestApi.Fallthrough);
    });

    it('should have the property variation (base name: "variation")', function() {
      // uncomment below and update the code to test the property variation
      //var instane = new LaunchDarklyRestApi.Fallthrough();
      //expect(instance).to.be();
    });

    it('should have the property rollout (base name: "rollout")', function() {
      // uncomment below and update the code to test the property rollout
      //var instane = new LaunchDarklyRestApi.Fallthrough();
      //expect(instance).to.be();
    });

  });

}));
