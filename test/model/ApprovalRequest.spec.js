/*
 * LaunchDarkly REST API
 * Build custom integrations with the LaunchDarkly REST API
 *
 * OpenAPI spec version: 5.0.2
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
    describe('ApprovalRequest', function() {
      beforeEach(function() {
        instance = new LaunchDarklyApi.ApprovalRequest();
      });

      it('should create an instance of ApprovalRequest', function() {
        // TODO: update the code to test ApprovalRequest
        expect(instance).to.be.a(LaunchDarklyApi.ApprovalRequest);
      });

      it('should have the property id (base name: "_id")', function() {
        // TODO: update the code to test the property id
        expect(instance).to.have.property('id');
        // expect(instance.id).to.be(expectedValueLiteral);
      });

      it('should have the property version (base name: "_version")', function() {
        // TODO: update the code to test the property version
        expect(instance).to.have.property('version');
        // expect(instance.version).to.be(expectedValueLiteral);
      });

      it('should have the property creationDate (base name: "creationDate")', function() {
        // TODO: update the code to test the property creationDate
        expect(instance).to.have.property('creationDate');
        // expect(instance.creationDate).to.be(expectedValueLiteral);
      });

      it('should have the property requestorId (base name: "requestorId")', function() {
        // TODO: update the code to test the property requestorId
        expect(instance).to.have.property('requestorId');
        // expect(instance.requestorId).to.be(expectedValueLiteral);
      });

      it('should have the property reviewStatus (base name: "reviewStatus")', function() {
        // TODO: update the code to test the property reviewStatus
        expect(instance).to.have.property('reviewStatus');
        // expect(instance.reviewStatus).to.be(expectedValueLiteral);
      });

      it('should have the property status (base name: "status")', function() {
        // TODO: update the code to test the property status
        expect(instance).to.have.property('status');
        // expect(instance.status).to.be(expectedValueLiteral);
      });

      it('should have the property appliedByMemberID (base name: "appliedByMemberID")', function() {
        // TODO: update the code to test the property appliedByMemberID
        expect(instance).to.have.property('appliedByMemberID');
        // expect(instance.appliedByMemberID).to.be(expectedValueLiteral);
      });

      it('should have the property appliedDate (base name: "appliedDate")', function() {
        // TODO: update the code to test the property appliedDate
        expect(instance).to.have.property('appliedDate');
        // expect(instance.appliedDate).to.be(expectedValueLiteral);
      });

      it('should have the property allReviews (base name: "allReviews")', function() {
        // TODO: update the code to test the property allReviews
        expect(instance).to.have.property('allReviews');
        // expect(instance.allReviews).to.be(expectedValueLiteral);
      });

      it('should have the property notifyMemberIds (base name: "notifyMemberIds")', function() {
        // TODO: update the code to test the property notifyMemberIds
        expect(instance).to.have.property('notifyMemberIds');
        // expect(instance.notifyMemberIds).to.be(expectedValueLiteral);
      });

      it('should have the property instructions (base name: "instructions")', function() {
        // TODO: update the code to test the property instructions
        expect(instance).to.have.property('instructions');
        // expect(instance.instructions).to.be(expectedValueLiteral);
      });

    });
  });

}));
