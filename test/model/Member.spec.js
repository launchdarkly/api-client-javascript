/**
 * LaunchDarkly REST API
 * Build custom integrations with the LaunchDarkly REST API
 *
 * OpenAPI spec version: 2.0.9
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
    factory(root.expect, root.LaunchDarklyApi);
  }
}(this, function(expect, LaunchDarklyApi) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new LaunchDarklyApi.Member();
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

  describe('Member', function() {
    it('should create an instance of Member', function() {
      // uncomment below and update the code to test Member
      //var instane = new LaunchDarklyApi.Member();
      //expect(instance).to.be.a(LaunchDarklyApi.Member);
    });

    it('should have the property links (base name: "_links")', function() {
      // uncomment below and update the code to test the property links
      //var instane = new LaunchDarklyApi.Member();
      //expect(instance).to.be();
    });

    it('should have the property id (base name: "_id")', function() {
      // uncomment below and update the code to test the property id
      //var instane = new LaunchDarklyApi.Member();
      //expect(instance).to.be();
    });

    it('should have the property role (base name: "role")', function() {
      // uncomment below and update the code to test the property role
      //var instane = new LaunchDarklyApi.Member();
      //expect(instance).to.be();
    });

    it('should have the property email (base name: "email")', function() {
      // uncomment below and update the code to test the property email
      //var instane = new LaunchDarklyApi.Member();
      //expect(instance).to.be();
    });

    it('should have the property pendingInvite (base name: "_pendingInvite")', function() {
      // uncomment below and update the code to test the property pendingInvite
      //var instane = new LaunchDarklyApi.Member();
      //expect(instance).to.be();
    });

    it('should have the property isBeta (base name: "isBeta")', function() {
      // uncomment below and update the code to test the property isBeta
      //var instane = new LaunchDarklyApi.Member();
      //expect(instance).to.be();
    });

    it('should have the property customRoles (base name: "customRoles")', function() {
      // uncomment below and update the code to test the property customRoles
      //var instane = new LaunchDarklyApi.Member();
      //expect(instance).to.be();
    });

  });

}));
