package ;

import flower.JobComponent;
using Lambda;

@:expose
class Library{
	private static var jobComponents : Array<JobComponent>;

	public static function init(){
		CompileTime.importPackage("library");
		var libraryClasses = CompileTime.getAllClasses("library");
		Library.jobComponents = libraryClasses
			.map(function(c) : JobComponent return Type.createInstance(c,[]))
			.fold(function(job, array : Array<JobComponent>){ array.push(job); return array;}, []);
	}

	public static function get() : Array<JobComponent>{
		return jobComponents;
	}

	public static function getPackage(){
		var moduleNames : Array<String> = jobComponents.map(function(job : JobComponent) return job.getModuleName() );
		return moduleNames
			.map(function(moduleNames) return moduleNames.split("."))
			.fold(function(splitNames : Array<String>, packages : Dynamic){
				var modules = Reflect.field(packages, splitNames[0]);
				if( modules == null ) modules = [];
				modules.push(splitNames[1]);
				Reflect.setField(packages, splitNames[0], modules);
				return packages;
				},{});
	}
}