package retro.pub;

using Lambda;

enum MODE{
	STOP;
	RUN;
}

typedef TimerID = Int;

class Diagram{
	public var start : Port;
	public var end : Port;
	public var jobs : Array<Job>;
	public var mode : MODE;
	public var timerID : TimerID;
	public var editor : Editor;

	public function new(editor, ?model){
		this.editor = editor;
		this.mode = STOP;
		this.jobs = new Array<Job>();
		this.importer(model);
	}

	public function createNode(n){
		this.jobs.push(n);
	}

	public function connect(){
		new Connection(this, this.start, this.end);
	}

	public function clear(){
	}

	public function stop(){
		this.mode = STOP;
	}

	public function run(){
		this.mode = RUN;
	}
	
	public function getJob(id){
		for( job in this.jobs ){
			if(job.id == id){
				return job;
			}
		}
		return null;
	}

	public function getPort(uri:String){
		var ids = uri.split(".");
		for( job in this.jobs ){
			if( job.id == ids[0] ){
				return job.getInputPort(ids[1]);
			}
		}
		return null;
	}

	public function importer(?model){
		var nodes : Array<Dynamic> = model.nodes;
		if(nodes == null) {
			jobs.push(new Logic(this.editor));
		}else{
			for( i in nodes ) {
				trace(i);
			}
		}
	}
	
	public function exporter(){
			
	}
}