/**
 * LaunchDarkly REST API
 * Build custom integrations with the LaunchDarkly REST API
 *
 * OpenAPI spec version: 5.0.1
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
    instance = new LaunchDarklyApi.Defaults();
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

  describe('Defaults', function() {
    it('should create an instance of Defaults', function() {
      // uncomment below and update the code to test Defaults
      //var instance = new LaunchDarklyApi.Defaults();
      //expect(instance).to.be.a(LaunchDarklyApi.Defaults);
    });

    it('should have the property onVariation (base name: "onVariation")', function() {
      // uncomment below and update the code to test the property onVariation
      //var instance = new LaunchDarklyApi.Defaults();
      //expect(instance).to.be();
    });

    it('should have the property offVariation (base name: "offVariation")', function() {
      // uncomment below and update the code to test the property offVariation
      //var instance = new LaunchDarklyApi.Defaults();
      //expect(instance).to.be();
    });

  });

}));
