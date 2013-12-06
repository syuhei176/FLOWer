package retro.pub;

import retro.pub.RetroType;
import retro.pub.Job;
import retro.pub.Port;

class Worker{
	private var job:retro.pub.Job;
	public function new(job){
		this.job = job;
	}
	
	//実行する
	public function act(cb) {
		//スレッドを起動して実行する
		var script_result = new ScriptResult();
		script_result.set("output", new retro.pub.Value());
		cb(script_result);
		for(p in this.job.outputPorts) {
			var v = script_result.get(p.name);
			if(v != null) {
				p.setValue(v);
			}
		}
	}
}

class ScriptResult{
	private var script_result : Array<ScriptReturnValue>;
	
	public function new() {
		this.script_result = new Array<ScriptReturnValue>();
	}
	public function set(portname, value) {
		for(sr in this.script_result) {
			if(sr.portname == portname) {
				sr.value = value;
				return;
			}
		}
		this.script_result.push(new ScriptReturnValue(portname, value));
	}
	public function get(portname) {
		for(sr in this.script_result) {
			if(sr.portname == portname) {
				return sr;
			}
		}
		return null;
	}
}

class ScriptReturnValue{
	public var portname : String;
	public var value : retro.pub.Value;
	public function new(portname, value) {
		this.portname = portname;
		this.value = value;
	}
}
