
(function(window) {
	var kieker = require('kieker-javascript-core');
	kieker.config({"serverUrl":"http://localhost:8000","entryFile":"./js/helpers.js","files":[{"cwd":"js","dest":"build","src":"**/*.js"}],"output":"./build/helpers.js","workerOutput":"./worker.js","advices":[{"type":"function","implementation":{}},{"type":"environment","include":["os","version","name"],"implementation":{}}],"writer":[{"type":"console","logLevel":"info"}],"workerUrl":"http://localhost:8000/worker.js"});
	
var adviceFunction = require('kieker-javascript-advice-function').default;
adviceFunction(kieker);


var adviceEnvironment = require('kieker-javascript-advice-environment').default;
adviceEnvironment(kieker);
kieker.sendEnvironment();

	window.kieker = kieker;
})(window);

/*global NodeList */
window.kieker.instrumentFunction(function (window) {
	'use strict';

	// Get element(s) by CSS selector:

	window.qs = window.kieker.instrumentFunction(function (selector, scope) {
		return (scope || document).querySelector(selector);
	});
	window.qsa = window.kieker.instrumentFunction(function (selector, scope) {
		return (scope || document).querySelectorAll(selector);
	});

	// addEventListener wrapper:
	window.$on = window.kieker.instrumentFunction(function (target, type, callback, useCapture) {
		target.addEventListener(type, callback, !!useCapture);
	});

	// Attach a handler to event for all elements that match the selector,
	// now or in the future, based on a root element
	window.$delegate = window.kieker.instrumentFunction(function (target, selector, type, handler) {
		var dispatchEvent = window.kieker.instrumentFunction(function dispatchEvent(event) {
			var targetElement = event.target;
			var potentialElements = window.qsa(selector, target);
			var hasMatch = Array.prototype.indexOf.call(potentialElements, targetElement) >= 0;

			if (hasMatch) {
				handler.call(targetElement, event);
			}
		});

		// https://developer.mozilla.org/en-US/docs/Web/Events/blur

		var useCapture = type === 'blur' || type === 'focus';

		window.$on(target, type, dispatchEvent, useCapture);
	});

	// Find the element's parent with the given tag name:
	// $parent(qs('a'), 'div');
	window.$parent = window.kieker.instrumentFunction(function (element, tagName) {
		if (!element.parentNode) {
			return;
		}
		if (element.parentNode.tagName.toLowerCase() === tagName.toLowerCase()) {
			return element.parentNode;
		}
		return window.$parent(element.parentNode, tagName);
	});

	// Allow for looping on nodes by chaining:
	// qsa('.foo').forEach(function () {})
	NodeList.prototype.forEach = Array.prototype.forEach;
})(window);