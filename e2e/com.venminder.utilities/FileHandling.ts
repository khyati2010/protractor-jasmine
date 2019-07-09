var fs = require("fs");
var userHome = require("user-home");

export class FileHandling {
	public static fileWrite() {
		var stream;
		var filePath = userHome + "\\Random.txt ";
		stream = fs.createWriteStream(filePath);
		stream.write("Tutorial on Node.js");
		stream.write("Introduction");
		stream.write("Events");
		stream.write("Generators");
		stream.write("Data Connectivity");
		stream.write("Using Jasmine");
	}
}
