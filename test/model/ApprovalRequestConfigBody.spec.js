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
    describe('ApprovalRequestConfigBody', function() {
      beforeEach(function() {
        instance = new LaunchDarklyApi.ApprovalRequestConfigBody();
      });

      it('should create an instance of ApprovalRequestConfigBody', function() {
        // TODO: update the code to test ApprovalRequestConfigBody
        expect(instance).to.be.a(LaunchDarklyApi.ApprovalRequestConfigBody);
      });

      it('should have the property description (base name: "description")', function() {
        // TODO: update the code to test the property description
        expect(instance).to.have.property('description');
        // expect(instance.description).to.be(expectedValueLiteral);
      });

      it('should have the property instructions (base name: "instructions")', function() {
        // TODO: update the code to test the property instructions
        expect(instance).to.have.property('instructions');
        // expect(instance.instructions).to.be(expectedValueLiteral);
      });

      it('should have the property notifyMemberIds (base name: "notifyMemberIds")', function() {
        // TODO: update the code to test the property notifyMemberIds
        expect(instance).to.have.property('notifyMemberIds');
        // expect(instance.notifyMemberIds).to.be(expectedValueLiteral);
      });

      it('should have the property comment (base name: "comment")', function() {
        // TODO: update the code to test the property comment
        expect(instance).to.have.property('comment');
        // expect(instance.comment).to.be(expectedValueLiteral);
      });

      it('should have the property executionDate (base name: "executionDate")', function() {
        // TODO: update the code to test the property executionDate
        expect(instance).to.have.property('executionDate');
        // expect(instance.executionDate).to.be(expectedValueLiteral);
      });

      it('should have the property operatingOnId (base name: "operatingOnId")', function() {
        // TODO: update the code to test the property operatingOnId
        expect(instance).to.have.property('operatingOnId');
        // expect(instance.operatingOnId).to.be(expectedValueLiteral);
      });

    });
  });

}));
