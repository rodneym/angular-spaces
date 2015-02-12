angular-spaces
=====

What?

it let's you code modules like this...

In file my_module.controller_a.js

	namespace('myModle', [
		'depend_on_foo',
		'depend_on_bar'
	])

	.controller('controllerA', ...)


and in file my_mOdule.controller_b.js

	namespace('myModle', [
		'depend_on_bar',
		'depend_on_baz'
	])

	.controller('controllerB', ...)

etc...which you can't do with Angular's default module declaration syntax :-)


