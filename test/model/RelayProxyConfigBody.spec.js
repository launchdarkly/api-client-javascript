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
    describe('RelayProxyConfigBody', function() {
      beforeEach(function() {
        instance = new LaunchDarklyApi.RelayProxyConfigBody();
      });

      it('should create an instance of RelayProxyConfigBody', function() {
        // TODO: update the code to test RelayProxyConfigBody
        expect(instance).to.be.a(LaunchDarklyApi.RelayProxyConfigBody);
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

    });
  });

}));
