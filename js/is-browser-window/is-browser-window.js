'use strict';

/**
 * @module {function} can-globals/js/is-browser-window/is-browser-window is-browser-window
 * @parent can-globals/js
 * @signature `isBrowserWindow()`
 *
 * Returns `true` if the code is running within a Browser window. Use this function if you need special code paths for when running in a Browser window, a Web Worker, or another environment (such as Node.js).
 *
 * ```js
 * var isBrowserWindow = require("can-globals/js/is-browser-window/is-browser-window");
 * var GLOBAL = require("can-globals/js/global/global");
 *
 * if(isBrowserWindow()) {
 *   console.log(GLOBAL() === window); // -> true
 * }
 * ```
 *
 * @return {Boolean} True if the environment is a Browser window.
 */

module.exports = function(){
	return typeof window !== "undefined" &&
		typeof document !== "undefined" && typeof SimpleDOM === "undefined";
};