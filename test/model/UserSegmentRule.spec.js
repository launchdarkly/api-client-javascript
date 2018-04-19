/**
 * LaunchDarkly REST API
 * Build custom integrations with the LaunchDarkly REST API
 *
 * OpenAPI spec version: 2.0.1
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
    instance = new LaunchDarklyRestApi.UserSegmentRule();
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

  describe('UserSegmentRule', function() {
    it('should create an instance of UserSegmentRule', function() {
      // uncomment below and update the code to test UserSegmentRule
      //var instane = new LaunchDarklyRestApi.UserSegmentRule();
      //expect(instance).to.be.a(LaunchDarklyRestApi.UserSegmentRule);
    });

    it('should have the property clauses (base name: "clauses")', function() {
      // uncomment below and update the code to test the property clauses
      //var instane = new LaunchDarklyRestApi.UserSegmentRule();
      //expect(instance).to.be();
    });

    it('should have the property weight (base name: "weight")', function() {
      // uncomment below and update the code to test the property weight
      //var instane = new LaunchDarklyRestApi.UserSegmentRule();
      //expect(instance).to.be();
    });

    it('should have the property bucketBy (base name: "bucketBy")', function() {
      // uncomment below and update the code to test the property bucketBy
      //var instane = new LaunchDarklyRestApi.UserSegmentRule();
      //expect(instance).to.be();
    });

  });

}));
