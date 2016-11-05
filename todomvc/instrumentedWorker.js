
'use strict';
var worker = require('kieker-javascript-worker')({"serverUrl":"http://localhost:8000","entryFile":"./js/helpers.js","files":[{"cwd":"js","dest":"build","src":"**/*.js"}],"output":"./build/helpers.js","workerOutput":"./worker.js","advices":[{"type":"function","implementation":{}},{"type":"environment","include":["os","version","name"],"implementation":{}}],"writer":[{"type":"console","logLevel":"info"}],"workerUrl":"http://localhost:8000/worker.js"});
onmessage = worker.onMessage;
	