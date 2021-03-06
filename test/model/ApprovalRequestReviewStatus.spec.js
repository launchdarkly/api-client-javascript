/*
 * LaunchDarkly REST API
 * Build custom integrations with the LaunchDarkly REST API
 *
 * OpenAPI spec version: 5.3.0
 * Contact: support@launchdarkly.com
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.4.17
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

  describe('(package)', function() {
    describe('ApprovalRequestReviewStatus', function() {
      beforeEach(function() {
        instance = LaunchDarklyApi.ApprovalRequestReviewStatus;
      });

      it('should create an instance of ApprovalRequestReviewStatus', function() {
        // TODO: update the code to test ApprovalRequestReviewStatus
        expect(instance).to.be.a('object');
      });

      it('should have the property pending', function() {
        expect(instance).to.have.property('pending');
        expect(instance.pending).to.be("pending");
      });

      it('should have the property approved', function() {
        expect(instance).to.have.property('approved');
        expect(instance.approved).to.be("approved");
      });

      it('should have the property declined', function() {
        expect(instance).to.have.property('declined');
        expect(instance.declined).to.be("declined");
      });

    });
  });

}));
