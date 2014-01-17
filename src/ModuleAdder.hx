import haxe.macro.Expr;
import haxe.macro.Context;

class ModuleAdder{
	macro public static function add(){
		var json : { packages : List<String> } = haxe.Json.parse(CompileTime.readJsonFile("flower-modules.json"));
		var result : Array<Expr> = [];
		for( pkgName in Reflect.fields(json)  ){
			var classNames : { none : List<String>, 
							 virtualDevice : List<String> } = Reflect.getProperty(json, pkgName);
			for( className in classNames.none ){
				var newExpr = { 
						expr : ENew({ name : className, params : [],  pack : ["retro","library",pkgName]}, []),
						pos : Context.currentPos(),
					};
				var addExpr = macro this.modules.push($newExpr);
				result.push( addExpr );
			}
			for( className in classNames.virtualDevice ){
				var newExpr = { 
						expr : ENew({ name : className, params : [],  pack : ["retro","library",pkgName]}, 
							[{ expr : EConst(CIdent("virtualDevice")), 
							   pos : Context.currentPos() }]),
						pos : Context.currentPos(),
					};
				var addExpr = macro this.modules.push($newExpr);
				result.push( addExpr );
			}
		}
		return {
			expr : EBlock(result),
			pos : Context.currentPos(),
		};
	}
}