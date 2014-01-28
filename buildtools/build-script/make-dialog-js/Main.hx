import haxe.io.Output;
import haxe.Json;
import sys.FileSystem;
import sys.io.File;
using Lambda;


class Main{
	public static function main(){
		var args = Sys.args();
		var inputFilename = args[0];
		var outputFilename = args[1];

		var inputJson = Json.parse(File.getContent(inputFilename));
		var keys : Array<String> = Reflect.fields(inputJson);

		var outputJson : Array<{key : String, value : Array<String>}>  = [];

		for( key in keys) outputJson.push({ key : key, value : {
			var content = Reflect.getProperty(inputJson, key);
			var contentKeys = Reflect.fields(content);
			contentKeys.map(function(contentKey){
				return Reflect.getProperty(content, contentKey);
				}).fold(function(a,b){ return a.concat(b); }, []);
			}});


		 var str = haxe.Resource.getString("template");
		 var template = new haxe.Template(str);

		 var output = File.write(outputFilename);
		 output.writeString(template.execute({json : outputJson}));
		 output.close();
	}	
}