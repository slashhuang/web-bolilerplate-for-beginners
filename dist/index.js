webpackJsonp([1],[
/* 0 */
/***/ function(module, exports) {

	"use strict";
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	/**
	 * Created by slashhuang on 17/2/19.
	 */
	
	var world = "world";
	
	var Test = function () {
	    function Test() {
	        _classCallCheck(this, Test);
	    }
	
	    _createClass(Test, [{
	        key: "hello",
	        value: function hello() {
	            return "hello " + world;
	        }
	    }]);
	
	    return Test;
	}();
	
	alert(new Test().hello());

/***/ }
]);
//# sourceMappingURL=index.js.map