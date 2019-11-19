/**
 * LaunchDarkly REST API
 * Build custom integrations with the LaunchDarkly REST API
 *
 * OpenAPI spec version: 2.0.22
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
    instance = new LaunchDarklyApi.DestinationGooglePubSub();
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

  describe('DestinationGooglePubSub', function() {
    it('should create an instance of DestinationGooglePubSub', function() {
      // uncomment below and update the code to test DestinationGooglePubSub
      //var instance = new LaunchDarklyApi.DestinationGooglePubSub();
      //expect(instance).to.be.a(LaunchDarklyApi.DestinationGooglePubSub);
    });

    it('should have the property project (base name: "project")', function() {
      // uncomment below and update the code to test the property project
      //var instance = new LaunchDarklyApi.DestinationGooglePubSub();
      //expect(instance).to.be();
    });

    it('should have the property topic (base name: "topic")', function() {
      // uncomment below and update the code to test the property topic
      //var instance = new LaunchDarklyApi.DestinationGooglePubSub();
      //expect(instance).to.be();
    });

  });

}));
