/**
 * LaunchDarkly REST API
 * Build custom integrations with the LaunchDarkly REST API
 *
 * OpenAPI spec version: 5.0.0
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
    instance = new LaunchDarklyApi.RelayProxyConfig();
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

  describe('RelayProxyConfig', function() {
    it('should create an instance of RelayProxyConfig', function() {
      // uncomment below and update the code to test RelayProxyConfig
      //var instance = new LaunchDarklyApi.RelayProxyConfig();
      //expect(instance).to.be.a(LaunchDarklyApi.RelayProxyConfig);
    });

    it('should have the property id (base name: "_id")', function() {
      // uncomment below and update the code to test the property id
      //var instance = new LaunchDarklyApi.RelayProxyConfig();
      //expect(instance).to.be();
    });

    it('should have the property creator (base name: "_creator")', function() {
      // uncomment below and update the code to test the property creator
      //var instance = new LaunchDarklyApi.RelayProxyConfig();
      //expect(instance).to.be();
    });

    it('should have the property name (base name: "name")', function() {
      // uncomment below and update the code to test the property name
      //var instance = new LaunchDarklyApi.RelayProxyConfig();
      //expect(instance).to.be();
    });

    it('should have the property policy (base name: "policy")', function() {
      // uncomment below and update the code to test the property policy
      //var instance = new LaunchDarklyApi.RelayProxyConfig();
      //expect(instance).to.be();
    });

    it('should have the property fullKey (base name: "fullKey")', function() {
      // uncomment below and update the code to test the property fullKey
      //var instance = new LaunchDarklyApi.RelayProxyConfig();
      //expect(instance).to.be();
    });

    it('should have the property displayKey (base name: "displayKey")', function() {
      // uncomment below and update the code to test the property displayKey
      //var instance = new LaunchDarklyApi.RelayProxyConfig();
      //expect(instance).to.be();
    });

    it('should have the property creationDate (base name: "creationDate")', function() {
      // uncomment below and update the code to test the property creationDate
      //var instance = new LaunchDarklyApi.RelayProxyConfig();
      //expect(instance).to.be();
    });

    it('should have the property lastModified (base name: "lastModified")', function() {
      // uncomment below and update the code to test the property lastModified
      //var instance = new LaunchDarklyApi.RelayProxyConfig();
      //expect(instance).to.be();
    });

  });

}));
