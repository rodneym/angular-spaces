angular-spaces
=====

angular-spaces allows module code to span multiple files.

For exmple:

in my_module.controller_a.js

	namespace('myModle', [
		'depend_on_foo',
		'depend_on_bar'
	])

	.controller('controllerA', ...)


and, in my_mOdule.controller_b.js

	namespace('myModle', [
		'depend_on_bar',
		'depend_on_baz'
	])

	.controller('controllerB', ...)

etc...which you can't do with Angular's module declaration syntax :-)


