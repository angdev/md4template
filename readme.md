#md4template

## Feature

  * Parsing a markdown file on file system.
  * Help to insert html code (parsed from markdown) to template.


## Usage

```javascript
var md4tpl = require('md4template');

//default encoding - utf8
md4tpl.config['encoding'] = 'utf8';

//default prefix - ''
//prefix for key of returned array from 'parseDir'.
md4tpl.config['prefix'] = 'md';

//parse a markdown file.
parsed_str = md4tpl.parseFile(file_path);

//parse markdown files in a directory.
parsed_list = md4tpl.parseDir(dir_path);
```

## Example
### md4template with express, ejs.

> expressApp/public/markdown/index/
  * current.md
  * favorite.md
  * work.md


  * route/index.js
  
```javascript
...

var md4tpl = require('md4template');

exports.index = function(req, res){
  res.render('index', md4tpl.parseDir(path.join(__dirname, '../public', 'markdown', 'index')));
};

...
```

  * view/index.ejs

```html
...

<div class="page-region">
	<div class="page-region-content">
		<div>
			<%- current %>
		</div>
		<div>
			<%- favorite %>
		</div>
		<div>
			<%- work %>
		</div>
	</div>
</div>

...
```
