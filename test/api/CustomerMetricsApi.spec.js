/**
 * LaunchDarkly REST API
 * Build custom integrations with the LaunchDarkly REST API
 *
 * OpenAPI spec version: 3.0.0
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
    instance = new LaunchDarklyApi.CustomerMetricsApi();
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

  describe('CustomerMetricsApi', function() {
    describe('getEvaluations', function() {
      it('should call getEvaluations successfully', function(done) {
        //uncomment below and update the code to test getEvaluations
        //instance.getEvaluations(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getEvent', function() {
      it('should call getEvent successfully', function(done) {
        //uncomment below and update the code to test getEvent
        //instance.getEvent(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getEvents', function() {
      it('should call getEvents successfully', function(done) {
        //uncomment below and update the code to test getEvents
        //instance.getEvents(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getMAU', function() {
      it('should call getMAU successfully', function(done) {
        //uncomment below and update the code to test getMAU
        //instance.getMAU(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getMAUByCategory', function() {
      it('should call getMAUByCategory successfully', function(done) {
        //uncomment below and update the code to test getMAUByCategory
        //instance.getMAUByCategory(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getStream', function() {
      it('should call getStream successfully', function(done) {
        //uncomment below and update the code to test getStream
        //instance.getStream(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getStreamBySDK', function() {
      it('should call getStreamBySDK successfully', function(done) {
        //uncomment below and update the code to test getStreamBySDK
        //instance.getStreamBySDK(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getStreamSDKVersion', function() {
      it('should call getStreamSDKVersion successfully', function(done) {
        //uncomment below and update the code to test getStreamSDKVersion
        //instance.getStreamSDKVersion(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getStreams', function() {
      it('should call getStreams successfully', function(done) {
        //uncomment below and update the code to test getStreams
        //instance.getStreams(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getUsage', function() {
      it('should call getUsage successfully', function(done) {
        //uncomment below and update the code to test getUsage
        //instance.getUsage(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
  });

}));
