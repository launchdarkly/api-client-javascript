/**
 * LaunchDarkly REST API
 * Build custom integrations with the LaunchDarkly REST API
 *
 * OpenAPI spec version: 2.0.24
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
    instance = new LaunchDarklyApi.Statement();
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

  describe('Statement', function() {
    it('should create an instance of Statement', function() {
      // uncomment below and update the code to test Statement
      //var instance = new LaunchDarklyApi.Statement();
      //expect(instance).to.be.a(LaunchDarklyApi.Statement);
    });

    it('should have the property resources (base name: "resources")', function() {
      // uncomment below and update the code to test the property resources
      //var instance = new LaunchDarklyApi.Statement();
      //expect(instance).to.be();
    });

    it('should have the property notresources (base name: "notresources")', function() {
      // uncomment below and update the code to test the property notresources
      //var instance = new LaunchDarklyApi.Statement();
      //expect(instance).to.be();
    });

    it('should have the property actions (base name: "actions")', function() {
      // uncomment below and update the code to test the property actions
      //var instance = new LaunchDarklyApi.Statement();
      //expect(instance).to.be();
    });

    it('should have the property notactions (base name: "notactions")', function() {
      // uncomment below and update the code to test the property notactions
      //var instance = new LaunchDarklyApi.Statement();
      //expect(instance).to.be();
    });

    it('should have the property effect (base name: "effect")', function() {
      // uncomment below and update the code to test the property effect
      //var instance = new LaunchDarklyApi.Statement();
      //expect(instance).to.be();
    });

  });

}));
