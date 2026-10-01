console.log("Trace starting...");
const Module = require('module');
const originalRequire = Module.prototype.require;
Module.prototype.require = function(id) {
  console.log("Requiring: " + id);
  return originalRequire.apply(this, arguments);
};
require('postcss');
console.log("Done");
