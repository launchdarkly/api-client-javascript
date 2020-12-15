/**
 * LaunchDarkly REST API
 * Build custom integrations with the LaunchDarkly REST API
 *
 * OpenAPI spec version: 4.0.0
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
    instance = new LaunchDarklyApi.UserTargetingExpirationForSegment();
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

  describe('UserTargetingExpirationForSegment', function() {
    it('should create an instance of UserTargetingExpirationForSegment', function() {
      // uncomment below and update the code to test UserTargetingExpirationForSegment
      //var instance = new LaunchDarklyApi.UserTargetingExpirationForSegment();
      //expect(instance).to.be.a(LaunchDarklyApi.UserTargetingExpirationForSegment);
    });

    it('should have the property expirationDate (base name: "expirationDate")', function() {
      // uncomment below and update the code to test the property expirationDate
      //var instance = new LaunchDarklyApi.UserTargetingExpirationForSegment();
      //expect(instance).to.be();
    });

    it('should have the property targetType (base name: "targetType")', function() {
      // uncomment below and update the code to test the property targetType
      //var instance = new LaunchDarklyApi.UserTargetingExpirationForSegment();
      //expect(instance).to.be();
    });

    it('should have the property userKey (base name: "userKey")', function() {
      // uncomment below and update the code to test the property userKey
      //var instance = new LaunchDarklyApi.UserTargetingExpirationForSegment();
      //expect(instance).to.be();
    });

    it('should have the property id (base name: "_id")', function() {
      // uncomment below and update the code to test the property id
      //var instance = new LaunchDarklyApi.UserTargetingExpirationForSegment();
      //expect(instance).to.be();
    });

    it('should have the property resourceId (base name: "_resourceId")', function() {
      // uncomment below and update the code to test the property resourceId
      //var instance = new LaunchDarklyApi.UserTargetingExpirationForSegment();
      //expect(instance).to.be();
    });

    it('should have the property links (base name: "_links")', function() {
      // uncomment below and update the code to test the property links
      //var instance = new LaunchDarklyApi.UserTargetingExpirationForSegment();
      //expect(instance).to.be();
    });

    it('should have the property version (base name: "_version")', function() {
      // uncomment below and update the code to test the property version
      //var instance = new LaunchDarklyApi.UserTargetingExpirationForSegment();
      //expect(instance).to.be();
    });

  });

}));
