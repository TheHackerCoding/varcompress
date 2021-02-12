import 'package:args/args.dart';
import 'package:cryptoutils/cryptoutils.dart';
import 'package:logger/logger.dart';
import 'dart:io';
import 'dart:async';
import 'dart:convert';
var logger = Logger();
String repeatString(String x, int times) {
	var y = "";
	while(times > 0) {
		y += x;
		times--;
	}
	return y;
}

error(String x) {
	logger.e("[ERROR] " + x);
	exit(1);
}

Future main(List<String> args) {
  // print(repeatString("boo,", 4));
	var parser = ArgParser();
	// args init
	parser
		..addOption('out', abbr: 'o')
		..addOption('file', abbr: 'f')
		..addOption('dictionary', abbr: 'd');
	var results = parser.parse(args);
	Map<String, dynamic> original = {
		'fileInput': results['file']
	};
	if (results['file'] == null) {
		error("Missing file argument!");
	}
	String dict = File(results['dictionary']).readAsStringSync();
	var _dict = jsonDecode(dict);
	print(_dict);
	// print(original["fileInput"]);
	original["fileContent"] = new File(original["fileInput"]).readAsString(encoding: ascii);
  // var test = File(original["fileInput"]);
  // print(test.readAsString(encoding: ascii));
	// print(original["fileContent"].toString());
}