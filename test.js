var tape = require('tape'),
	iDo = require('./index.js');

tape('i-do', function (test) {

	iDo.task('watch', 'js')
		.do('watch -p **/*.js')
		.help('optional help text');
    test.end();
});
