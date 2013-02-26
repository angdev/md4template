var fs = require('fs');
var path = require('path');
var md = require('node-markdown').Markdown;

var config = {
	"prefix" : "",
	"encoding" : "utf8"
};

//default encoding = utf8
function parseFile(filePath, allowSpecificTag, allowedTags, allowedAttr) {
	mdContent = fs.readFileSync(filePath, config.encoding);
	return md(mdContent, allowSpecificTag, allowedTags, allowedAttr);
}

function parseDir(dirPath, allowSpecificTag, allowedTags, allowedAttr) {
	mdList = fs.readdirSync(dirPath);
	renderParamList = {};
	renderParamList.__length__ = 0;
	for(i=0; i<mdList.length; i++) {
		//process markdown files only.
		if(path.extname(mdList[i]) != '.md' ) {
			continue;
		}
		
		renderParamList.__length__++;
		fileName = path.basename(mdList[i], '.md');
		fileName = config.prefix + fileName;
		renderParamList[fileName] = parseFile(path.join(dirPath, mdList[i]), allowSpecificTag, allowedTags, allowedAttr);
	}
	return renderParamList;
}

this.parseFile = parseFile;
this.parseDir = parseDir;
this.config = config;