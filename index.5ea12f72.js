!function(){var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{};function t(e){return e&&e.__esModule?e.default:e}var n={};Object.defineProperty(n,"__esModule",{value:!0}),n.default=function(e){return e&&e.constructor===Symbol?"symbol":typeof e};var o=/^\s+|\s+$/g,r=/^[-+]0x[0-9a-f]+$/i,f=/^0b[01]+$/i,u=/^0o[0-7]+$/i,c=parseInt,i="object"==typeof e&&e&&e.Object===Object&&e,l="object"==typeof self&&self&&self.Object===Object&&self,a=i||l||Function("return this")(),s=Object.prototype.toString,d=Math.max,b=Math.min,p=function(){return a.Date.now()};function y(e){var o=void 0===e?"undefined":t(n)(e);return!!e&&("object"==o||"function"==o)}function v(e){if("number"==typeof e)return e;if(function(e){return"symbol"==(void 0===e?"undefined":t(n)(e))||function(e){return!!e&&"object"==typeof e}(e)&&"[object Symbol]"==s.call(e)}(e))return NaN;if(y(e)){var i="function"==typeof e.valueOf?e.valueOf():e;e=y(i)?i+"":i}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(o,"");var l=f.test(e);return l||u.test(e)?c(e.slice(2),l?2:8):r.test(e)?NaN:+e}var j="";document.querySelector("#search-box").addEventListener("input",(function(e){j=e.target.value,console.log(j),t=j,fetch("https://restcountries.com/v3.1/name/".concat(t)).then((function(e){return e.json()})).then((function(e){console.log(e)})).catch((function(e){console.log(e)}));var t}))}();
//# sourceMappingURL=index.5ea12f72.js.map
