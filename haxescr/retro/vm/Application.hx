package retro.vm;

import retro.pub.Diagram;

//Flowerで作成されたアプリケーションを表すクラス
class Application{
	public var diagram:retro.pub.Diagram = null;
	public function new() {
	}
	
	public function getName() {
		return "Application Name";
	}
	
	//jsonからモデルを形成
	public function parse(json_obj:Dynamic) {
	}
	
	//json文字列からモデルを形成
	public function parse_from_json(json_text:String) {
	}
}