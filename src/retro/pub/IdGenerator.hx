package retro.pub;

typedef ID = String;
typedef EditorKey = String;

class IDGenerator{
	private var uniqueEditorKey : EditorKey;
	private static var idGen : IDGenerator; 

	private function new(uniqueEditorKey){
		this.uniqueEditorKey = uniqueEditorKey;
	}

	public static function getInstance(uniqueEditorKey){
		if( idGen == null ){
			idGen = new IDGenerator(uniqueEditorKey);
		}
		return idGen;
	}

	public function genID(){
		return this.uniqueEditorKey + Std.string(Date.now().getTime());
	}

}