package retro.pub;

typedef ID = String;
typedef EditorKey = String;

class IDGenerator{
	private var uniqueEditorKey : EditorKey;
	private var counter : Int;
	private var idGen : IDGenerator; 

	private function new(){
		this.uniqueEditorKey = "";
	}

	public function getInstance(){
		if( this.idGen == null ){
			this.idGen = new IDGenerator();
		}
		return this.idGen;
	}

	public function genID(){
		this.counter += 1;
		return this.uniqueEditorKey + Std.string(this.counter);
	}

}