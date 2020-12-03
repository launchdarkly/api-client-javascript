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
    instance = new LaunchDarklyApi.IntegrationsApi();
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

  describe('IntegrationsApi', function() {
    describe('deleteIntegrationSubscription', function() {
      it('should call deleteIntegrationSubscription successfully', function(done) {
        //uncomment below and update the code to test deleteIntegrationSubscription
        //instance.deleteIntegrationSubscription(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getIntegrationSubscription', function() {
      it('should call getIntegrationSubscription successfully', function(done) {
        //uncomment below and update the code to test getIntegrationSubscription
        //instance.getIntegrationSubscription(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getIntegrationSubscriptions', function() {
      it('should call getIntegrationSubscriptions successfully', function(done) {
        //uncomment below and update the code to test getIntegrationSubscriptions
        //instance.getIntegrationSubscriptions(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getIntegrations', function() {
      it('should call getIntegrations successfully', function(done) {
        //uncomment below and update the code to test getIntegrations
        //instance.getIntegrations(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('patchIntegrationSubscription', function() {
      it('should call patchIntegrationSubscription successfully', function(done) {
        //uncomment below and update the code to test patchIntegrationSubscription
        //instance.patchIntegrationSubscription(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('postIntegrationSubscription', function() {
      it('should call postIntegrationSubscription successfully', function(done) {
        //uncomment below and update the code to test postIntegrationSubscription
        //instance.postIntegrationSubscription(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
  });

}));
