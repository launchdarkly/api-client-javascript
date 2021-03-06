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
    describe('RelayProxyConfig', function() {
      beforeEach(function() {
        instance = new LaunchDarklyApi.RelayProxyConfig();
      });

      it('should create an instance of RelayProxyConfig', function() {
        // TODO: update the code to test RelayProxyConfig
        expect(instance).to.be.a(LaunchDarklyApi.RelayProxyConfig);
      });

      it('should have the property id (base name: "_id")', function() {
        // TODO: update the code to test the property id
        expect(instance).to.have.property('id');
        // expect(instance.id).to.be(expectedValueLiteral);
      });

      it('should have the property creator (base name: "_creator")', function() {
        // TODO: update the code to test the property creator
        expect(instance).to.have.property('creator');
        // expect(instance.creator).to.be(expectedValueLiteral);
      });

      it('should have the property name (base name: "name")', function() {
        // TODO: update the code to test the property name
        expect(instance).to.have.property('name');
        // expect(instance.name).to.be(expectedValueLiteral);
      });

      it('should have the property policy (base name: "policy")', function() {
        // TODO: update the code to test the property policy
        expect(instance).to.have.property('policy');
        // expect(instance.policy).to.be(expectedValueLiteral);
      });

      it('should have the property fullKey (base name: "fullKey")', function() {
        // TODO: update the code to test the property fullKey
        expect(instance).to.have.property('fullKey');
        // expect(instance.fullKey).to.be(expectedValueLiteral);
      });

      it('should have the property displayKey (base name: "displayKey")', function() {
        // TODO: update the code to test the property displayKey
        expect(instance).to.have.property('displayKey');
        // expect(instance.displayKey).to.be(expectedValueLiteral);
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

    });
  });

}));
