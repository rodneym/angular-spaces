
/**
 * @license angular-spaces v0.0.1
 * (c) 2013-2014 Rodney Muras http://github.com/rodneym
 * License: MIT
 */
(function(window, document){ 'use strict'

	/**
	 * generates submodule names
	 */
	function _mangle(name) {
		return {
			requires: name + '_requires_ns',
			impl: name + '_impl_ns'
		}
	}
	/**
		* moduel name exists or not?
		*/
  function _module_exists(name) {
  	try {
  		angular.module(name)
  	}
  	catch(e){
  		return false
  	}
 		return true
  }

  /** 
   * the magic
   */
	function _declare(name, requires, replace) {
		requires = (requires || [])

		if (_module_exists(name) && (!replace)) {
			if (requires) {
				//console.log('extending module: ', name, ' with ', requires)

				// merge new requires into existing dependancy module
				var currentDependancies = angular.module(_mangle(name).requires).requires
				var merged = currentDependancies.concat(requires)

				var filtered = merged.filter(function (item, pos) {
					return merged.indexOf(item) == pos
				})

				// re-declare th edepency module
				angular.module(_mangle(name).requires, filtered)
		  }

		  //return the implementation module
			//console.log('returning module: ', _mangle(name).impl)
			return angular.module(_mangle(name).impl)
		}		
		else
		{
			//declare the module 
		  //console.log('declaring module: ', name)
		  angular.module(name, [_mangle(name).impl])

		  // declare the dependancy moduel 
		  //console.log('declaring module: ', _mangle(name).requires)
		  var a = angular.module(_mangle(name).requires, requires)

		  // declare and return the implementation module
			//console.log('declaring module: ', _mangle(name).impl)
    	return angular.module(_mangle(name).impl, [_mangle(name).requires])
		}
	}
	
	window.namespace = _declare
})(window, document)


