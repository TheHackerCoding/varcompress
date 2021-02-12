const fs = require("fs")
const yargs = require('yargs/yargs')
const { hideBin } = require('yargs/helpers')
const argv = yargs(hideBin(process.argv)).argv
const debug = 1
//VERY IMPORTANT
function log(x) {
	if (debug == 1) {
		console.log(x)
	} else {
		return;
	}
}
function repeatString(string, times) {
  var repeatedString = "";
  while (times > 0) {
    repeatedString += string;
    times--;
  }
  return repeatedString;
}
///for organization purposes
var original = {"fileInput": argv.original}
var output = argv.O
log(argv.original)
var dictionary = argv.dict
var _dict = JSON.parse(fs.readFileSync(dictionary, "ascii"))
log(_dict)
const _original = Buffer.from(fs.readFileSync(original.fileInput), "ascii").toString('hex')
original.fileContent = Buffer.from(fs.readFileSync(original.fileInput), "ascii").toString('hex')
//original.fileContent = fs.readFile(original.fileInput, 'utf8', function (err,data) {
//  if (err) { return console.log(err)}
//  const buf = Buffer.from(data, 'ascii');
//  var hexvalue = buf.toString('hex');
//  conosle.log(hexvalue)
//	return hexvalue
//});
for (const _property in _dict) {
	if (_dict[_property].includes("*")) {
		let x = _dict[_property].split("*")
		let _x = Buffer.from(repeatString(x[0], parseInt(x[1])), "ascii").toString('hex')
		_dict[_property] = _x
	}
	for (const property in _dict) {
	  //console.log(`${property}: ${_dict[property]}`);
	  let hexProp = Buffer.from(property).toString('hex')
	  if (original.fileContent.includes("5d" + hexProp + "5d")) {
	  	original.fileContent.replace("5d" + hexProp + "5d", _dict[property])
	  	log("yep")
	  } else {
	  	log("nope")
	  }
	}
}

console.log(original.fileContent == _original)
if ((original.fileContent == original.fileContentOriginal)) {
	console.log("worked!")
}