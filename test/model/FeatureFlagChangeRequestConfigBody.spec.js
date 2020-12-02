/**
 * LaunchDarkly REST API
 * Build custom integrations with the LaunchDarkly REST API
 *
 * OpenAPI spec version: 3.9.1
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
    instance = new LaunchDarklyApi.FeatureFlagChangeRequestConfigBody();
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

  describe('FeatureFlagChangeRequestConfigBody', function() {
    it('should create an instance of FeatureFlagChangeRequestConfigBody', function() {
      // uncomment below and update the code to test FeatureFlagChangeRequestConfigBody
      //var instance = new LaunchDarklyApi.FeatureFlagChangeRequestConfigBody();
      //expect(instance).to.be.a(LaunchDarklyApi.FeatureFlagChangeRequestConfigBody);
    });

    it('should have the property description (base name: "description")', function() {
      // uncomment below and update the code to test the property description
      //var instance = new LaunchDarklyApi.FeatureFlagChangeRequestConfigBody();
      //expect(instance).to.be();
    });

    it('should have the property instructions (base name: "instructions")', function() {
      // uncomment below and update the code to test the property instructions
      //var instance = new LaunchDarklyApi.FeatureFlagChangeRequestConfigBody();
      //expect(instance).to.be();
    });

    it('should have the property notifyMemberIds (base name: "notifyMemberIds")', function() {
      // uncomment below and update the code to test the property notifyMemberIds
      //var instance = new LaunchDarklyApi.FeatureFlagChangeRequestConfigBody();
      //expect(instance).to.be();
    });

    it('should have the property comment (base name: "comment")', function() {
      // uncomment below and update the code to test the property comment
      //var instance = new LaunchDarklyApi.FeatureFlagChangeRequestConfigBody();
      //expect(instance).to.be();
    });

  });

}));
