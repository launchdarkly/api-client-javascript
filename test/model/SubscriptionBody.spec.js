/*
 * LaunchDarkly REST API
 * Build custom integrations with the LaunchDarkly REST API
 *
 * OpenAPI spec version: 5.1.0
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
    describe('SubscriptionBody', function() {
      beforeEach(function() {
        instance = new LaunchDarklyApi.SubscriptionBody();
      });

      it('should create an instance of SubscriptionBody', function() {
        // TODO: update the code to test SubscriptionBody
        expect(instance).to.be.a(LaunchDarklyApi.SubscriptionBody);
      });

      it('should have the property name (base name: "name")', function() {
        // TODO: update the code to test the property name
        expect(instance).to.have.property('name');
        // expect(instance.name).to.be(expectedValueLiteral);
      });

      it('should have the property statements (base name: "statements")', function() {
        // TODO: update the code to test the property statements
        expect(instance).to.have.property('statements');
        // expect(instance.statements).to.be(expectedValueLiteral);
      });

      it('should have the property config (base name: "config")', function() {
        // TODO: update the code to test the property config
        expect(instance).to.have.property('config');
        // expect(instance.config).to.be(expectedValueLiteral);
      });

      it('should have the property on (base name: "on")', function() {
        // TODO: update the code to test the property on
        expect(instance).to.have.property('on');
        // expect(instance.on).to.be(expectedValueLiteral);
      });

      it('should have the property tags (base name: "tags")', function() {
        // TODO: update the code to test the property tags
        expect(instance).to.have.property('tags');
        // expect(instance.tags).to.be(expectedValueLiteral);
      });

    });
  });

}));
