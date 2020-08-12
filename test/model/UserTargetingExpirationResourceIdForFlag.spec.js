/**
 * LaunchDarkly REST API
 * Build custom integrations with the LaunchDarkly REST API
 *
 * OpenAPI spec version: 3.4.0
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
    instance = new LaunchDarklyApi.UserTargetingExpirationResourceIdForFlag();
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

  describe('UserTargetingExpirationResourceIdForFlag', function() {
    it('should create an instance of UserTargetingExpirationResourceIdForFlag', function() {
      // uncomment below and update the code to test UserTargetingExpirationResourceIdForFlag
      //var instance = new LaunchDarklyApi.UserTargetingExpirationResourceIdForFlag();
      //expect(instance).to.be.a(LaunchDarklyApi.UserTargetingExpirationResourceIdForFlag);
    });

    it('should have the property kind (base name: "kind")', function() {
      // uncomment below and update the code to test the property kind
      //var instance = new LaunchDarklyApi.UserTargetingExpirationResourceIdForFlag();
      //expect(instance).to.be();
    });

    it('should have the property projectKey (base name: "projectKey")', function() {
      // uncomment below and update the code to test the property projectKey
      //var instance = new LaunchDarklyApi.UserTargetingExpirationResourceIdForFlag();
      //expect(instance).to.be();
    });

    it('should have the property environmentKey (base name: "environmentKey")', function() {
      // uncomment below and update the code to test the property environmentKey
      //var instance = new LaunchDarklyApi.UserTargetingExpirationResourceIdForFlag();
      //expect(instance).to.be();
    });

    it('should have the property flagKey (base name: "flagKey")', function() {
      // uncomment below and update the code to test the property flagKey
      //var instance = new LaunchDarklyApi.UserTargetingExpirationResourceIdForFlag();
      //expect(instance).to.be();
    });

    it('should have the property key (base name: "key")', function() {
      // uncomment below and update the code to test the property key
      //var instance = new LaunchDarklyApi.UserTargetingExpirationResourceIdForFlag();
      //expect(instance).to.be();
    });

  });

}));