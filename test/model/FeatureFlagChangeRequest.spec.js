/**
 * LaunchDarkly REST API
 * Build custom integrations with the LaunchDarkly REST API
 *
 * OpenAPI spec version: 3.9.2
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
    instance = new LaunchDarklyApi.FeatureFlagChangeRequest();
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

  describe('FeatureFlagChangeRequest', function() {
    it('should create an instance of FeatureFlagChangeRequest', function() {
      // uncomment below and update the code to test FeatureFlagChangeRequest
      //var instance = new LaunchDarklyApi.FeatureFlagChangeRequest();
      //expect(instance).to.be.a(LaunchDarklyApi.FeatureFlagChangeRequest);
    });

    it('should have the property id (base name: "_id")', function() {
      // uncomment below and update the code to test the property id
      //var instance = new LaunchDarklyApi.FeatureFlagChangeRequest();
      //expect(instance).to.be();
    });

    it('should have the property version (base name: "_version")', function() {
      // uncomment below and update the code to test the property version
      //var instance = new LaunchDarklyApi.FeatureFlagChangeRequest();
      //expect(instance).to.be();
    });

    it('should have the property creationDate (base name: "creationDate")', function() {
      // uncomment below and update the code to test the property creationDate
      //var instance = new LaunchDarklyApi.FeatureFlagChangeRequest();
      //expect(instance).to.be();
    });

    it('should have the property requestorId (base name: "requestorId")', function() {
      // uncomment below and update the code to test the property requestorId
      //var instance = new LaunchDarklyApi.FeatureFlagChangeRequest();
      //expect(instance).to.be();
    });

    it('should have the property reviewStatus (base name: "reviewStatus")', function() {
      // uncomment below and update the code to test the property reviewStatus
      //var instance = new LaunchDarklyApi.FeatureFlagChangeRequest();
      //expect(instance).to.be();
    });

    it('should have the property status (base name: "status")', function() {
      // uncomment below and update the code to test the property status
      //var instance = new LaunchDarklyApi.FeatureFlagChangeRequest();
      //expect(instance).to.be();
    });

    it('should have the property appliedByMemberID (base name: "appliedByMemberID")', function() {
      // uncomment below and update the code to test the property appliedByMemberID
      //var instance = new LaunchDarklyApi.FeatureFlagChangeRequest();
      //expect(instance).to.be();
    });

    it('should have the property appliedDate (base name: "appliedDate")', function() {
      // uncomment below and update the code to test the property appliedDate
      //var instance = new LaunchDarklyApi.FeatureFlagChangeRequest();
      //expect(instance).to.be();
    });

    it('should have the property currentReviewsByMemberId (base name: "currentReviewsByMemberId")', function() {
      // uncomment below and update the code to test the property currentReviewsByMemberId
      //var instance = new LaunchDarklyApi.FeatureFlagChangeRequest();
      //expect(instance).to.be();
    });

    it('should have the property allReviews (base name: "allReviews")', function() {
      // uncomment below and update the code to test the property allReviews
      //var instance = new LaunchDarklyApi.FeatureFlagChangeRequest();
      //expect(instance).to.be();
    });

    it('should have the property notifyMemberIds (base name: "notifyMemberIds")', function() {
      // uncomment below and update the code to test the property notifyMemberIds
      //var instance = new LaunchDarklyApi.FeatureFlagChangeRequest();
      //expect(instance).to.be();
    });

    it('should have the property instructions (base name: "instructions")', function() {
      // uncomment below and update the code to test the property instructions
      //var instance = new LaunchDarklyApi.FeatureFlagChangeRequest();
      //expect(instance).to.be();
    });

  });

}));