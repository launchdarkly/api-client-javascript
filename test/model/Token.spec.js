/*
 * LaunchDarkly REST API
 * Build custom integrations with the LaunchDarkly REST API
 *
 * OpenAPI spec version: 5.0.3
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
    describe('Token', function() {
      beforeEach(function() {
        instance = new LaunchDarklyApi.Token();
      });

      it('should create an instance of Token', function() {
        // TODO: update the code to test Token
        expect(instance).to.be.a(LaunchDarklyApi.Token);
      });

      it('should have the property links (base name: "_links")', function() {
        // TODO: update the code to test the property links
        expect(instance).to.have.property('links');
        // expect(instance.links).to.be(expectedValueLiteral);
      });

      it('should have the property id (base name: "_id")', function() {
        // TODO: update the code to test the property id
        expect(instance).to.have.property('id');
        // expect(instance.id).to.be(expectedValueLiteral);
      });

      it('should have the property ownerId (base name: "ownerId")', function() {
        // TODO: update the code to test the property ownerId
        expect(instance).to.have.property('ownerId');
        // expect(instance.ownerId).to.be(expectedValueLiteral);
      });

      it('should have the property memberId (base name: "memberId")', function() {
        // TODO: update the code to test the property memberId
        expect(instance).to.have.property('memberId');
        // expect(instance.memberId).to.be(expectedValueLiteral);
      });

      it('should have the property member (base name: "_member")', function() {
        // TODO: update the code to test the property member
        expect(instance).to.have.property('member');
        // expect(instance.member).to.be(expectedValueLiteral);
      });

      it('should have the property creationDate (base name: "creationDate")', function() {
        // TODO: update the code to test the property creationDate
        expect(instance).to.have.property('creationDate');
        // expect(instance.creationDate).to.be(expectedValueLiteral);
      });

      it('should have the property lastModified (base name: "lastModified")', function() {
        // TODO: update the code to test the property lastModified
        expect(instance).to.have.property('lastModified');
        // expect(instance.lastModified).to.be(expectedValueLiteral);
      });

      it('should have the property lastUsed (base name: "lastUsed")', function() {
        // TODO: update the code to test the property lastUsed
        expect(instance).to.have.property('lastUsed');
        // expect(instance.lastUsed).to.be(expectedValueLiteral);
      });

      it('should have the property token (base name: "token")', function() {
        // TODO: update the code to test the property token
        expect(instance).to.have.property('token');
        // expect(instance.token).to.be(expectedValueLiteral);
      });

      it('should have the property name (base name: "name")', function() {
        // TODO: update the code to test the property name
        expect(instance).to.have.property('name');
        // expect(instance.name).to.be(expectedValueLiteral);
      });

      it('should have the property role (base name: "role")', function() {
        // TODO: update the code to test the property role
        expect(instance).to.have.property('role');
        // expect(instance.role).to.be(expectedValueLiteral);
      });

      it('should have the property customRoleIds (base name: "customRoleIds")', function() {
        // TODO: update the code to test the property customRoleIds
        expect(instance).to.have.property('customRoleIds');
        // expect(instance.customRoleIds).to.be(expectedValueLiteral);
      });

      it('should have the property inlineRole (base name: "inlineRole")', function() {
        // TODO: update the code to test the property inlineRole
        expect(instance).to.have.property('inlineRole');
        // expect(instance.inlineRole).to.be(expectedValueLiteral);
      });

      it('should have the property serviceToken (base name: "serviceToken")', function() {
        // TODO: update the code to test the property serviceToken
        expect(instance).to.have.property('serviceToken');
        // expect(instance.serviceToken).to.be(expectedValueLiteral);
      });

      it('should have the property defaultApiVersion (base name: "defaultApiVersion")', function() {
        // TODO: update the code to test the property defaultApiVersion
        expect(instance).to.have.property('defaultApiVersion');
        // expect(instance.defaultApiVersion).to.be(expectedValueLiteral);
      });

    });
  });

}));
