var iDo = function () {
		var that = this;

		that.seperator = ':';
		that.highlight = '\x1b[40m%s\x1b[0m';
		that._tasks = [];

		process.argv.forEach(function (val, index, array) {
			that._tasks.push(val);
		});

		return that;
	},
	iDoTask = function (taskName, para, tasks) {
		var that = this;

	};

iDoTask.prototype.do = function (command) {
	return this;
};

iDoTask.prototype.help = function (msg) {
	return this;
};

iDo.prototype.task = function (taskName, para) {
	var that = this;
	return new iDoTask(taskName, para, that._tasks);
};

iDo.prototype.markdown = function () {
	var that = this;
}




//var exec = require('child_process').exec;

/*
exec(cmd, function(error, stdout, stderr) {
    
    console.log(stdout);
    console.log('' == stderr);
});

*/
module.exports = new iDo();
