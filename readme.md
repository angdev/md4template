###md4template

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

