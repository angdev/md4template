var md4tpl = require('../lib/main');
var fs = require('fs');
var path = require('path');

var red, blue, reset;
red   = '\033[31m';
blue  = '\033[34m';
reset = '\033[0m';

function test_failed() {
	console.log(red + 'Test Failed.');
	process.exit(1);
}

md4tpl.config['prefix'] = 'md_';

//parseFile test
test_html = md4tpl.parseFile(path.join(__dirname, 'test.md'));
console.log(blue + 'parseFile : \n' + reset + test_html);


//parseDir test
test_html_arr = md4tpl.parseDir(path.join(__dirname, 'testdir'));
dir_arr = fs.readdirSync(path.join(__dirname, 'testdir'));
console.log(blue + 'directory listing: \n' + reset + dir_arr);
console.log(blue + 'parsed files:');

if(dir_arr.length != 4) {
	test_failed();
}

if(test_html_arr.__length__ != 3) {
	test_failed();
}

for(var k in test_html_arr) {
	if(k == '__length__') {
		continue;
	}
	console.log(red + k);
	if(k.indexOf(md4tpl.config['prefix']) != 0) {
		test_failed();
	}
}

console.log(reset + 'Test OK');
