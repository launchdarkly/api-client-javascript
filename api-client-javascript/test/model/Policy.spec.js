/**
 * LaunchDarkly REST API
 * Build custom integrations with the LaunchDarkly REST API
 *
 * OpenAPI spec version: 2.0.30
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
    instance = new LaunchDarklyApi.Policy();
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

  describe('Policy', function() {
    it('should create an instance of Policy', function() {
      // uncomment below and update the code to test Policy
      //var instance = new LaunchDarklyApi.Policy();
      //expect(instance).to.be.a(LaunchDarklyApi.Policy);
    });

    it('should have the property resources (base name: "resources")', function() {
      // uncomment below and update the code to test the property resources
      //var instance = new LaunchDarklyApi.Policy();
      //expect(instance).to.be();
    });

    it('should have the property notResources (base name: "notResources")', function() {
      // uncomment below and update the code to test the property notResources
      //var instance = new LaunchDarklyApi.Policy();
      //expect(instance).to.be();
    });

    it('should have the property actions (base name: "actions")', function() {
      // uncomment below and update the code to test the property actions
      //var instance = new LaunchDarklyApi.Policy();
      //expect(instance).to.be();
    });

    it('should have the property notActions (base name: "notActions")', function() {
      // uncomment below and update the code to test the property notActions
      //var instance = new LaunchDarklyApi.Policy();
      //expect(instance).to.be();
    });

    it('should have the property effect (base name: "effect")', function() {
      // uncomment below and update the code to test the property effect
      //var instance = new LaunchDarklyApi.Policy();
      //expect(instance).to.be();
    });

  });

}));