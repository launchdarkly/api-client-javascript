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
    instance = new LaunchDarklyApi.AuditLogEntry();
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

  describe('AuditLogEntry', function() {
    it('should create an instance of AuditLogEntry', function() {
      // uncomment below and update the code to test AuditLogEntry
      //var instance = new LaunchDarklyApi.AuditLogEntry();
      //expect(instance).to.be.a(LaunchDarklyApi.AuditLogEntry);
    });

    it('should have the property links (base name: "_links")', function() {
      // uncomment below and update the code to test the property links
      //var instance = new LaunchDarklyApi.AuditLogEntry();
      //expect(instance).to.be();
    });

    it('should have the property id (base name: "_id")', function() {
      // uncomment below and update the code to test the property id
      //var instance = new LaunchDarklyApi.AuditLogEntry();
      //expect(instance).to.be();
    });

    it('should have the property _date (base name: "date")', function() {
      // uncomment below and update the code to test the property _date
      //var instance = new LaunchDarklyApi.AuditLogEntry();
      //expect(instance).to.be();
    });

    it('should have the property kind (base name: "kind")', function() {
      // uncomment below and update the code to test the property kind
      //var instance = new LaunchDarklyApi.AuditLogEntry();
      //expect(instance).to.be();
    });

    it('should have the property name (base name: "name")', function() {
      // uncomment below and update the code to test the property name
      //var instance = new LaunchDarklyApi.AuditLogEntry();
      //expect(instance).to.be();
    });

    it('should have the property description (base name: "description")', function() {
      // uncomment below and update the code to test the property description
      //var instance = new LaunchDarklyApi.AuditLogEntry();
      //expect(instance).to.be();
    });

    it('should have the property shortDescription (base name: "shortDescription")', function() {
      // uncomment below and update the code to test the property shortDescription
      //var instance = new LaunchDarklyApi.AuditLogEntry();
      //expect(instance).to.be();
    });

    it('should have the property comment (base name: "comment")', function() {
      // uncomment below and update the code to test the property comment
      //var instance = new LaunchDarklyApi.AuditLogEntry();
      //expect(instance).to.be();
    });

    it('should have the property member (base name: "member")', function() {
      // uncomment below and update the code to test the property member
      //var instance = new LaunchDarklyApi.AuditLogEntry();
      //expect(instance).to.be();
    });

    it('should have the property titleVerb (base name: "titleVerb")', function() {
      // uncomment below and update the code to test the property titleVerb
      //var instance = new LaunchDarklyApi.AuditLogEntry();
      //expect(instance).to.be();
    });

    it('should have the property title (base name: "title")', function() {
      // uncomment below and update the code to test the property title
      //var instance = new LaunchDarklyApi.AuditLogEntry();
      //expect(instance).to.be();
    });

    it('should have the property target (base name: "target")', function() {
      // uncomment below and update the code to test the property target
      //var instance = new LaunchDarklyApi.AuditLogEntry();
      //expect(instance).to.be();
    });

  });

}));
