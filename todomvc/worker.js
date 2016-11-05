(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){

'use strict';
var worker = require('kieker-javascript-worker')({"serverUrl":"http://localhost:8000","entryFile":"./js/helpers.js","files":[{"cwd":"js","dest":"build","src":"**/*.js"}],"output":"./build/helpers.js","workerOutput":"./worker.js","advices":[{"type":"function","implementation":{}},{"type":"environment","include":["os","version","name"],"implementation":{}}],"writer":[{"type":"console","logLevel":"info"}],"workerUrl":"http://localhost:8000/worker.js"});
onmessage = worker.onMessage;
	
},{"kieker-javascript-worker":5}],2:[function(require,module,exports){
'use strict';

module.exports = {
	'KiekerBrowserEnvironmentRecord': require('./kieker/common/record/misc/KiekerBrowserEnvironmentRecord.js'),
'OperationExecutionRecord': require('./kieker/common/record/controlflow/OperationExecutionRecord.js')
};

},{"./kieker/common/record/controlflow/OperationExecutionRecord.js":3,"./kieker/common/record/misc/KiekerBrowserEnvironmentRecord.js":4}],3:[function(require,module,exports){
'use strict';

module.exports = function getOperationExecutionRecord (record) {
	return {
		class: 'kieker.common.record.controlflow.OperationExecutionRecord',
		timestamp: Number(record.timestamp),
		values: [String(record.operationSignature || ''), String(record.sessionId || ''), String(record.traceId || 0), String(record.tin || 0), String(record.tout || 0), String(record.hostname || ''), String(record.eoi || 0), String(record.ess || 0)]
	};
};

},{}],4:[function(require,module,exports){
'use strict';

module.exports = function getKiekerBrowserEnvironmentRecord (record) {
	return {
		class: 'kieker.common.record.misc.KiekerBrowserEnvironmentRecord',
		timestamp: Number(record.timestamp),
		values: [String(record.name || ''), String(record.version || ''), String(record.operatingSystemName || ''), String(record.operatingSystemVersion || '')]
	};
};

},{}],5:[function(require,module,exports){
/* globals JSON */
'use strict';

var records = require('kieker-javascript-records');

// TODO: See later if we can dynmicalize the whole thing
//		 Maybe let the user config an array of file paths instead of array of names
//		 Or a single file which exports one or multiple workers in a predefined format
//		 Maybe dynamically load it from cdnjs as fallback
var writers = {
	console: require('kieker-javascript-writer-console'),
	http: require('kieker-javascript-writer-http')
};

module.exports = function (config) {
	var writerCallbacks = config.writer.map(function (writerObj) {
		var writer = writers[writerObj.type];
		return writer(writerObj);
	});

	return {
		onMessage: function (e) {
			var message = e.data[0];
			var payload = JSON.parse(e.data[1]);

			if (message === 'probe') {
				var type = payload.type;
				var record = type && records[type] ? records[type](payload) : payload;

				writerCallbacks.forEach(function (callback) {
					callback.onProbeReceived(record);
				});
			}
		}
	};
};

},{"kieker-javascript-records":2,"kieker-javascript-writer-console":6,"kieker-javascript-writer-http":7}],6:[function(require,module,exports){
'use strict';
/* globals console */

module.exports = function (options) {
	var logLevel = (options || {}).logLevel;

	return {
		onProbeReceived: function (probe) {
			switch (logLevel) {
				case 'debug':
					console.debug(probe);
					break;
				case 'error':
					console.error(probe);
					break;
				case 'info':
					console.info(probe);
					break;
				case 'warn':
					console.warn(probe);
					break;
				default:
					console.log(probe);
			}
		}
	};
};

},{}],7:[function(require,module,exports){
'use strict';
/* globals fetch */

module.exports = function (opts) {
	// TODO: extend options by
	//	- headers
	//  - credentials

	var options = (opts || {});
	var verbose = Boolean(options.verbose);
	var url = options.url || 'http://localhost:3000/api';

	var logResult = function (result) {
		if (!verbose) {
			return;
		}

		console.info('Result from ' + url + ':', result);
	};

	var notifyProbeReceived = function (probe) {
		if (!verbose) {
			return;
		}

		console.info('Will send probe to ' + url + ':', probe);
	};

	return {
		onProbeReceived: function (probe) {
			notifyProbeReceived(probe);

			fetch(url, {
				body: JSON.stringify(probe),
				method: 'POST',
				mode: 'no-cors'
			}).then(logResult);
		}
	};
};

},{}]},{},[1]);
